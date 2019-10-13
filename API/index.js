const express = require('express')
const app = express()
const db = require('./config/db')
const consig = require('consign')

consig()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (req, res) =>{
    res.status(200).send('<h1>Gold Transporte API<h1>')
})

app.listen(3000, ()=>{
    console.log('Sucess start')
})