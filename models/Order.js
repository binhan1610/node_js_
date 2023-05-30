const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dangbinhan1610:binhan1012001@cluster0.zphxwo8.mongodb.net/test', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const orderSchema = new mongoose.Schema({
    _id:Number,
    item:String,
    pirce:Number,
    quantity:Number
    
},{ collection: 'orders' })

const orderModel = mongoose.model('order', orderSchema)

module.exports = { orderModel }