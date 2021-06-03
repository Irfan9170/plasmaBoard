const express = require('express');
const router = express.Router();
const home = require('../controller/homeController.js')
const Donor = require('../model/Donor.js')

router.get('/',home);

module.exports = router;
