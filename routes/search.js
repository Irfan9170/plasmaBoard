const express= require('express')
const router = express.Router();
const {search} = require('../controller/searchController.js')
router.post('/',search);

module.exports= router;