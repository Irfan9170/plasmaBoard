const express = require('express');
const {getDonor,createDonor}= require('../controller/donorController.js')
const router = express.Router();

router.get('/',getDonor);
router.post('/',createDonor);
module.exports= router;