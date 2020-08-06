const mongoose = require('mongoose');

const styleCatalog = new mongoose.Schema({
    wear_type:{
        type: String,
        required : true
        
    },

    color: {
        type: String,
        required : true
    },
    size : { type : Array ,
         "default" : ["S","M","L","XL"] 
         
         },

    price:{
        type: Number,
        required : true
       
        
    },

    imgId:{
        type: String,
        required : true,
         unique: true 
        
        
    },

    titleName:{
        type: String,
        required : true
       
        
    },

    sizeCount:  [{
        
        M: Number,
        S: Number,
        L: Number,
        XL: Number
        
      }],
    

      

});

const styleCat = mongoose.model('styleCatalog', styleCatalog);

module.exports = styleCat;