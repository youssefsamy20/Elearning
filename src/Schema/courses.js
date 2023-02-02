const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const CouseSchema = new Schema({

Title : {
    type : String, 
    required: true, 
},
Subtitles: {
    type : [mongoose.Types.ObjectId], 
    required :true, 
    ref : 'subTitle',
    _id:false


},
preview:{ 
    type:[String],
    required:false




},
expire:{ 
    type: Number,
    required:false




},
ratingList:{
    type:[Number],
    required:false 
}
,
discount:{
type : Number,
required:false
},
newprice:{
    type : Number,
    required:false
    },
Rating : {
    type : Number, 
    required: false,
    default : 5
    
}, 
enr : {
    type : Number, 
    required: false,
    default : 0
    
}, 
view :{
    type:Number, 
    required:false, 
    default:0
}
,

technical :{
    type: [String],
    required:false,

},
financial :{
    type: [String],
    required:false,

},
other :{
    type: [String],
    required:false,

},



TotalHours : {
    type : Number, 
    required : true
}, 

Price : {
    type : Number, 
    required : true
}, 

Subject : {
    type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'courseSubject'
} ,
ShortSummary: {
    type : String, 
    require: true
}, 
instructor :{
    type : mongoose.Schema.Types.ObjectId, 
    ref :'instructor', 
    
},
previewLink :{
    type:String, 
    required:false 
},
} , {timestamps:true})

module.exports = mongoose.model("courses" , CouseSchema)

