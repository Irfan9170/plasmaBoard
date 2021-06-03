const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
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
    blood:{
        type:String
    }
})

const Patient = mongoose.model('Patient',patientSchema);

module.exports= Patient;