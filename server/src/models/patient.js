
const mongoose=require('mongoose')
const { Schema } = mongoose;

const patient = new Schema({
    Name: String, // String is shorthand for {type: String}
  DOB: String,
  phoneNumber: String,
  email:String,
  bloodgroup:String,
  gender:String,
  address:String,
  password:String
  
});

const Patient = mongoose.model('Patient', patient);
module.exports = Patient