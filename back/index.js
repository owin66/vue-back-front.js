const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')



//настрои подключение
mongoose.connect(
    'mongodb+srv://owin66:Pass321@nodejs.tyesk.mongodb.net/node-blog?retryWrites=true&w=majority',
)
//инициализируем приложение

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//объявим роуты
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`)
