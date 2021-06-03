const Volunteer = require('../model/Volunteer.js')

module.exports.getVolunteer=(req,res)=>{
    res.render("volunteer");
};

module.exports.createVolunteer=(req,res)=>{
    const newVolunteer = new Volunteer({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        email:req.body.email,
        dep:req.body.dep
    })
    newVolunteer.save();
    res.redirect("/")
};