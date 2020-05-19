module.exports = function(app,fs){

    app.get('/login/:username/:password',function(req,res){
        var sess;
        sess = req.session;

        fs.readFile(__dirname+"/../data/user.json", "utf8", function(err,data){
            var users = JSON.parse(data);
            var username = req.parse.username;
            var password = req.parse.password;
            var result = {};
            if(!users[username]){
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            if(users[username]["password"] ==password){
                result["success"] = 1;
                sess.username = username;
                sess.name = users[username]["name"];
                res.json(result);
            }
        })
    })

   app.get('/',function(req,res){
       sess = req.session;
       console.log(sess.username);
   })

   app.get('/login', function(req,res){
       sess = req.session;
       sess.username = "velopert";
   })

   app.get('/session_destroy',function(req,res){
    sess = req.session;   
    req.session.destroy(function(err){

       });
   })
}