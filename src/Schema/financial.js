const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financialchema = new Schema ( { 

    proplem :{
        tags: [String],
        require: false

        
    },
    solved:{
        is_active: Boolean
        ,
        require:false
    }
    })
    
    module.exports = mongoose.model("finanical",financialchema)