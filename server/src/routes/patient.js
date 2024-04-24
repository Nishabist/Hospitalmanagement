const express = require('express')
const router = express.Router();
const Patient = require('../models/patient')
router.use(express.json())
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/patient-register',async(req,res)=>{
try{
   const patientExist = await Patient.findOne({phoneNumber : req.body.phoneNumber})
   if(patientExist){
     
      res.status(409).json({msg :'Phone Number already taken!'})
   }
   else{
      const hashpassword=await bcrypt.hash(req.body.password,saltRounds)
      req.body.password=hashpassword
      const data = await Patient.create(req.body);
      if(data) res.json({msg :"Patient registered sucessfully"})
      
   }
}
  catch(err){
   res.json(err)
  } 
   
})


router.post('/patient-login',async(req,res)=>{
     //check if phone number exists
const patientDetail = await Patient.findOne({phoneNumber : req.body.phoneNumber})


if(!patientDetail){
   res.status(401).json({msg:'Invalid User'})
   
}else{
   const isMatched = await bcrypt.compare(req.body.password ,patientDetail.password)
   
        
  
   if(!isMatched){
      res.json({msg :"login sucess"})
   }else{
      res.json({msg:"wrong password"})
   }
}














//     console.log(patientDetail)
//     if(!patientDetail){
//     
//     }else{
      
//       if(isMatched){
//       //  const{password, ...patientInfo}=patientDetail;
 
//        //it generate token for the user
//       //  const token = jwt.sign({ phoneNumber:req.body.phoneNumber, id:patientDetail.password }, process.env.SECRET_KEY);
//        //the content inside curly bracket is a paylod
//         res.json({msg:'Login sucessfully',token,patientDetail:userInfo})
//       }else{
//         res.status(401).json({msg:'Password doesnot matched'})
//       }
//     }
})








module.exports=router