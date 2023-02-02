const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema ( { 

    question :{
    type :[mongoose.Schema.Types.ObjectId] ,
    required : true , 
    ref: 'question'

    }
    }, {timestamps:true} )
    
    module.exports = mongoose.model("exam",examSchema)