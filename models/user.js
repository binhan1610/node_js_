const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dangbinhan1610:binhan1012001@cluster0.zphxwo8.mongodb.net/test', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    
},{ collection: 'users' })

const userModel = mongoose.model('users', userSchema)

module.exports = { userModel }