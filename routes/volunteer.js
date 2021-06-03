const express = require('express');
const router = express.Router();
const {getVolunteer,createVolunteer}=require('../controller/volunteerController.js')


router.get('/',getVolunteer);
router.post('/',createVolunteer)

module.exports= router;