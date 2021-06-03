const Donor = require('../model/Donor.js')
 const home =  (req, res) => {
	Donor.find({}, function(err, person) {
		res.render('home', { person: person });
	});

};

module.exports = home ;