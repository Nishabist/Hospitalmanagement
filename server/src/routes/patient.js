const express = require('express')
const router = express.Router();
const Patient = require('../models/patient')
router.use(express.json())

router.post('/patient-register',async(req,res)=>{
try{
   const patientExist = await Patient.findOne({phoneNumber : req.body.phoneNumber})
   if(patientExist){
     
      res.status(409).json({msg :'Phone Number already taken!'})
   }
   else{
      const data = await Patient.create(req.body);
      if(data) res.json({msg :"Patient registered sucessfully"})
      
   }
}
  catch(err){
   res.json(err)
  } 
   
})


router.post('/patient-login',(req,res)=>{
   
})








module.exports=router