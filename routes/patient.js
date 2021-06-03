const express = require('express');
const router = express.Router();
const {getPatient,createPatient}= require('../controller/patientController')


router.get('/',getPatient);
router.post('/',createPatient);

module.exports= router;