const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.get('/', (req, res) =>{
    res.status(200).send('<h1>Gold Transporte API<h1>')
})


app.listen(3000, ()=>{
    console.log('Sucess start')
})