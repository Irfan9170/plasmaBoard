const Donor = require('../model/Donor.js')
module.exports.getDonor=(req,res)=>{
    res.render("donor");
};
module.exports.createDonor=(req,res)=>{
    const donor = new Donor({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        city:req.body.city,
        blood:req.body.blood
    })
    donor.save();
    res.redirect("/")
};