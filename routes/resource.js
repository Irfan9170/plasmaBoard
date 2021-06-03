const express = require('express')
const router = express.Router();
const {getResource,addResource}=require('../controller/resorceController.js')

router.get('/',getResource)
router.post('/',addResource)

module.exports=router;