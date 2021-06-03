const Donor = require('../model/Donor.js');
const Resource = require('../model/Resource.js')
module.exports.search=(req,res)=>{
    const pin = parseInt(req.body.pincode)
        Donor.find({'blood':req.body.blood}, 'name mobile', function (err, per) {
        
        Donor.find({'blood':req.body.blood,'pincode':pin}, 'name mobile', function (err, person) {
            if (err) {
                res.render("err")
                console.log(err);
            };
            if(person.length==0){
                res.render("err",{pin:pin,blood:req.body.blood});
            }
              res.render("search",{all:per,person:person,blood:req.body.blood,pin:pin})
          });
          
      });
};

module.exports.findResource=(req,res)=>{
    Resource.find({'city':req.body.city,'resource':req.body.res}, function (err, resource) {
        if (err) {
            res.render("err")
            console.log(err);
        };
        res.render("resource",{res:resource})
      });
};

module.exports.findCity =(req,res)=>{
    Donor.find({'city':req.body.city},  function (err, p) {
        if (err) {
            res.render("err")
            console.log(err);
        };
          res.render("city",{person:p,city:req.body.city})
      }); 
};