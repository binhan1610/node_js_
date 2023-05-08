const express= require('express')
const mongoose =require('mongoose')
const jwt= require('jsonwebtoken')
const bodyparser=require('body-parser')
const userRouter=require('./routers/user')

//================/
const app=express();
app.use(bodyparser.json());
const PORT =3003;
//-======/
app.use('/',userRouter)
//mongodb/
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/',(req,res)=>{
  res.send('binhan')
})
app.listen(PORT ,()=>{
  console.log(`app run PORT ${PORT}`);
})