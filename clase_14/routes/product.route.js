const express = require('express')

const {Router} = express
const Products = require('../db/models/product.model')
const { model } = require('mongoose')
const route = new Router()

route.get('/allProducts', async(req, res) => {
    try {
        let resp = await Products.find()
        res.send({
            msg: 'Productos encontrados',
            data: resp
        })
    } catch (error) {
        console.log(err)
    }
})

route.post('/createProd', async(req, res) => {
    try {
        await Products.create(req.body)
        res.status(201).send({
            msg: 'Producto creado',
            data: req.body
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

module.exports = route