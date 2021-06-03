const mongoose = require('mongoose')
const volunteerSchema = new mongoose.Schema({
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
    email:{
        type:String
    },
    dep:{
        type:String
    }
})

const Volunteer = mongoose.model('Volunteer',volunteerSchema);

module.exports = Volunteer;