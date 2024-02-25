const express = require('express')
const Database = require('./db/index')
const productsRoute = require('./routes/product.route')

const app = express()

app.use(express.json())

app.use('/prod', productsRoute) 

app.listen(8080, ()=> {
    console.log('Server runing on port 8080')
    Database.connect()
})