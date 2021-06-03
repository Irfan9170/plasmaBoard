const mongoose = require('mongoose')
const resourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    verify:{
        type:String
    },
    status:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
    resource:{
        type:String
    }
   
   
})

const Resource = mongoose.model('Resource',resourceSchema);

module.exports = Resource;