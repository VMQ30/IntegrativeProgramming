const express = require("express");
const router = express.Router();
const { createProfile , getProfile } = require('../controllers/profile')
const requireAuth = require('../middleware/requireAuth');

router
    .post('/create', requireAuth, createProfile)
    .get('/me', requireAuth, getProfile)

module.exports = router;
