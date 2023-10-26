const express = require('express');
const router = express.Router();
const {signup,checkEmail,getDetails,getAllUsers} = require('../model/UserModel');
const {encrypty} = require('../functions/encrypt');
const {signToken,checkLogin} = require('../functions/jwt');
const {toDate,welcome} = require('../functions/Helper_functions');

router.post('/register',async(req,res)=>{
    const pass = req.body.pass;
    const hashedPassword = await encrypty(pass);
    const email = req.body.email;

    const check = {email:req.body.email};
    const data = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      reg_date : toDate(),
      uniquekey: hashedPassword
    }
    const payload = {email : email};
  
    const signedUp = await checkEmail(check);
      if(signedUp){
        res.json({msg:'user already has an account'});
      }else{
        signup(data);
        const token = await signToken(payload);
        //welcome(email);
        res.json({msg:'registration okay', token:token});
      }
   
    
  });

  router.post('/userdetail',checkLogin,(req,res)=>{
    const user = req.user;
    const email = user.email;
    const data = {email : email};
    getDetails(data).then( feed =>{
      res.json(feed);
    })
      
  });



  module.exports = router;


