const express = require('express')
const contoller = require('../controllers/order')
const router = express.Router ()
const passport = require('passport')

router.get('/', passport.authenticate('jwt', {session: false}), contoller.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), contoller.create)



module.exports = router 