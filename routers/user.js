const express= require('express')
const userSchema=require('../models/user');
const bodyparser=require('body-parser')
const userRouter=express.Router();


userRouter.use(bodyparser.json())
//get//
userRouter.get('/users', (req,res)=>{
userSchema.find()
.then((data)=>res.json(data))
.catch((err)=>res.json(err))

})
//them//
userRouter.post('/users',(req,res)=>{
const user= new userSchema(req.body);
try{
    user.save();
    res.send(user);
} catch(ex) {
    res.status(500).send(ex.message)
}
})
//sua//
userRouter.put('user/:id',(req,res)=>{
  const user=req.body;
  userSchema.findByIdAndUpdate(req.params.id,user).then((data)=>res.json(data)).catch((err)=>res.json(err))
})
//xoa//
userRouter.delete('/',(req,res)=>{

})
//getbyid//


module.exports = userRouter;