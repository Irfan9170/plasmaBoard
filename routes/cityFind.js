const express = require('express')
const router = express.Router();
const {findCity} = require('../controller/searchController.js')
router.post('/',findCity)

module.exports= router;