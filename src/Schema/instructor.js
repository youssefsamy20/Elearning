const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const instructorSchema = new Schema ( { 

    username : {
        type : String , 
        required : true
    }, 
    
    email: {
        type :String , 
        required : true
    } , 
    
    password : {
        type : String , 
        required : true
    }
    ,
    role :{
        type :Number ,
        default:1

    } ,
    ratingList:{
        type:[Number],
        required:false 
    }
    ,
    
    Rating : {
        type : Number, 
        required: false,
        default : 5
        
    }
    
    , 
    bio: {
        type: String , 
        required: false, 
        default:"Not updated Yet"
    }, 
    contract:{
        type:Boolean , 
        required:false, 
        default: false, 

    }
    }, {timestamps:true} )
    
    module.exports = mongoose.model("instructor",instructorSchema)