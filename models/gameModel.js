const mongoose=require('mongoose')
// Game Model (models/gameModel.js):
// title: String, must be required.
// genre: String, must be one of the following values: 'RPG', 'Action', 'Adventure', 'Strategy', or 'Sports'. Use a Mongoose enum for this validation.
// releaseDate: Date.
// publisher: This is the most important field. It must be a mongoose.Schema.Types.ObjectId that creates a reference to the Publisher model. It is a required field.
const gameScheme=new mongoose.Schema({
    title:String,
    genre:{
        type:String,
        enum:['RPG','Action','Adventure','Strategy','Sports']
    },
    releaseDate:{
        type:Date,
        default:Date.now()
    },
    publiser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Publiser'
    }
})
module.exports=mongoose.model('Game',gameScheme)
