const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema ( { 

    role :{
    type :Number ,
    default:3

    }, 
    gender: {

        type : String, 
        required: true ,
    }
    }, {timestamps:true} )
    
    module.exports = mongoose.model("guest",guestSchema)