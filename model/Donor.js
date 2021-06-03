const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    pincode:{
        type:Number,
        
    },
    city:{
        type:String
    },
    blood:{
        type:String
    }
})

const Donor = mongoose.model('Donor',donorSchema);

module.exports=Donor;