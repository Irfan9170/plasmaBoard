const Resource =require('../model/Resource.js')

module.exports.getResource=(req,res)=>{
    res.render("resources")
};
module.exports.addResource=(req,res)=>{
    const resource = new Resource({
        name:req.body.name,
        mobile:req.body.mobile,
        verify:req.body.verify,
        status:req.body.status,
        city:req.body.city,
        address:req.body.address,
        resource:req.body.res
    })
    resource.save();
    res.redirect("/")
};