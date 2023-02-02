const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subTitleSchema = new Schema ({

weekOne :{
        title :{type : String , required : true},
        video : {type : String , required : true} , 
        videoDescription : {type : String , required : true}
     
},
TotalHours : {
    type : Number, 
    required : false
},
exam : {

    type:mongoose.Types.ObjectId, 
    required : true, 
    ref:'exam'
}





}, {timestamps:true})

module.exports = mongoose.model('subTitle' , subTitleSchema)