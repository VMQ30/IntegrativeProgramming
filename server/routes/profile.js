const express = require("express");
const router = express.Router();
const { profile } = require('../controllers/profile')
const requireAuth = require('../middleware/requireAuth');

router.post('/create', requireAuth, profile)

module.exports = router;
