const express = require('express')
const router = express.Router();
const Patient = require('../models/patient')
router.use(express.json())

router.post('/patient-register',async(req,res)=>{
    
    await Patient.create(req.body)
})









module.exports=router