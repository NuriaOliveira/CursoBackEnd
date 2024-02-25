const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                }
            }
        ]
    }
})

//midleware
CartSchema.pre('findOne', function(){
    this.populate('products.product')
})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart