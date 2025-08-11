const mongoose=require('mongoose')
// name: String, must be required and unique.
// location: String.
// yearEstablished: Number, must be a minimum of 1950
const publiserScheme=new mongoose.Schema({
 name:{
    type:String
 },
 location:{
    type:String
 },
 yearEstablished:{
    type:Number,
    min:1950
 }
})
module.exports= mongoose.model("Publiser",publiserScheme)
