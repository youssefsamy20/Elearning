const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestsSchema = new Schema ( { 

course:{type: mongoose.Types.ObjectId , ref:'courses'}, 
cor:{type: mongoose.Types.ObjectId , ref:"cortrainee"}, 
status:
{
    type:String , 
    required:false, 
    default:'pending'

}














}, {timestamps:true} )

module.exports = mongoose.model("requests",requestsSchema)
