const express = require("express")
//const handlebars = require('express-handlebars')
const recurso = require('./router/rutas')

const app=  express()
const PORT=8080

/*
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))
app.set('view engine', 'hbs')
app.set('views', './views')
*/

/*
app.set('views','./viewsPug');
app.set('view engine', 'pug');
*/


app.set('views', './viewsEjs');
app.set('view engine', 'ejs');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',recurso)

const server = app.listen(PORT,()=>{
    console.log(`servidor http escuchando ${server.address().port}`)
});

app.use('/static',express.static(__dirname+'/public'))

server.on("error",error =>console.log(`error e el servidor ${error}`));




