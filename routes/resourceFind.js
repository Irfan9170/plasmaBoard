const express = require('express')
const router = express.Router();
const {findResource}=require('../controller/searchController.js')
router.post('/',findResource)

module.exports= router;