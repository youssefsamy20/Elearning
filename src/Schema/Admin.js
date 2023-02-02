const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema ( { 

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
},
role :{
    type :Number ,
    default:0

},
accessRequets:{
    type : [mongoose.Types.ObjectId],
    required:false, 
    ref:'courses'


},
requests: {

type:[mongoose.Types.ObjectId] , 
ref:"requests"

},


}, {timestamps:true} )

module.exports = mongoose.model("admin",adminSchema)