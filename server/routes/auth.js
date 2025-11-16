const express = require('express')
const router = express.Router()
const { signUpUser , loginUser } = require('../controllers/auth')

router.route('/signup').post(signUpUser)
router.route('/login').post(loginUser)

module.exports = router;