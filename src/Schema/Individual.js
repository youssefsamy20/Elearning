const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualSchema = new Schema({

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
    } ,
    role :{
        type :Number ,
        default:2
    
    } , 
    progress: {
        type:Number, 
        required: false , 
        default :0
    }
    ,
    firstname: {
        type:String, 
        required: false , 
        default :0
    }
    ,
    lastname: {
        type:String, 
        required: false , 
        default :0
    }
    ,
    gender: {
        type:String, 
        required: false , 
        default :0
    }
    ,
    courses : 
        [mongoose.Schema.Types.ObjectId] 
    }, {timestamps:true} )

module.exports = mongoose.model('individual' , individualSchema)