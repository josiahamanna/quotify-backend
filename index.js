const express = require('express')
const app = express()
const port = 3005
const { quoteRouter } = require('./app/controlers/quotes_controler')
require('./config/database')

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('welcome to quotify-react')
})

app.use('/quotes', quoteRouter)

app.listen(port, ()=>console.log('listeing to port ', port))