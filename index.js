const express = require('express')
const port = 8000;
const app = express();

//using template engine
app.set('view engine', 'ejs');
app.set('views', './views')



// use express router
app.use('/', require('./routes'));


app.listen(port,function (err) {
if(err){
     console.log(`server:${err}`)
}
    console.log(`server is running ${port}`)
})

