const mongoose=require('mongoose')
const connection = async ()=>{
    try{
        const conn =await mongoose.connect('mongodb://127.0.0.1:27017/hospital');
        if(conn){
            console.log("Connected to mongodb sucessfully")
        }
    }
    catch(err){
        console.log(err)
    }
    
}
module.exports = connection