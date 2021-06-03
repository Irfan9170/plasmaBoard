const Patient = require('../model/Patient.js')

module.exports.getPatient= (req,res)=>{
    res.render("patient");
};
module.exports.createPatient =(req,res)=>{
    const newPatient = new Patient({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        blood:req.body.blood
    })
    newPatient.save();
    res.redirect("/")
};

