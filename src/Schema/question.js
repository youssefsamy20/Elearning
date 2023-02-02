const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ( { 

    Q :{
    type :String ,
    required : true , 

    },
    firstAnswer : 
    {   
        type : String , 
        required: true



    },
    secondAnswer : 
    {   
        type : String , 
        required: true



    },
    thirdAnswer : 
    {   
        type : String , 
        required: true



    },
    fourthAnswer : 
    {   
        type : String , 
        required: true



    },
    A : {
        type : String, 
        required: true,


    }
    }, {timestamps:true} )
    
    module.exports = mongoose.model("question",questionSchema)