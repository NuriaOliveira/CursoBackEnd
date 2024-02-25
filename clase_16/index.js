const mongoose = require('mongoose')
const Cart = require('./cart')
const Product = require('./product')


const connect = () => {
    return mongoose.connect('mongodb+srv://nuriaeo:123abc@proyectocoder.aofd5cw.mongodb.net/test')
    .then(async() => {
        console.log('Conexion a la db es exitosa')
        
        /*
        Product.create({
            name: 'Radio',
            price: 87,
            category: 'Hogar',
            stick: 78
        })
        
        Cart.create({
            date: '15/02/2024'
        })*/

        let cart1 = await Cart.findOne({_id: '65ce9b138d4f514d3b5af814'})
       // cart1.products.push({product: '65ce9ba183eb8e9420c233ac'})

        //await Cart.updateOne({_id: '65ce9b138d4f514d3b5af814'}, cart1)

        console.log(JSON.stringify(cart1,null, '\t'))
    }).catch(err => {
        console.log(err)
    })
}

connect()