const express = require("express");
const router = express.Router();
const profile = require('../controllers/profile')

router.route('/create').post(profile)

module.exports = router;
