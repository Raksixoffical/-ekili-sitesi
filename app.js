const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
 
//port
const PORT = 3000 || process.env.PORT

//görüntü motorcuğu

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//router
app.get('/', function (req, res) {
  res.render('pages/index')
});

app.use((req, res) => {
    res.send("404")
});
app.listen(PORT, () => {
    console.log("uygulama 3000 portunda başlatıldı")
});