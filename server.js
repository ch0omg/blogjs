const express = require('express');
const app = express();
const fs = require('fs');
const router2 = require('./router/test')(app,fs);
const session = require('express-session');
const router = require('./router/main')(app,fs);

app.use(session({
    secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}))
app.set('veiws', __dirname +'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.listen(3000, ()=> console.log('server is running....'))
