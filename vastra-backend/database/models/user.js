const mongoose = require('mongoose');

const user = new mongoose.Schema({
    emailid:{
        type: String,
        required : true
        
    },

    password: {
        type: String,
        required : true
    },
    wishlist : { type : Array
         
         
         },

    cart:{
        type : Array
       
        
    },

    


  

      

});

const userdb = mongoose.model('user', user);

module.exports = userdb;