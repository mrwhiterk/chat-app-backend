const express = require('express')
const router = express.Router()
const channelController = require('../controllers/channel')
const passport = require('passport')

let auth = passport.authenticate('jwt-user')

router.get('/', channelController.index)
router.get('/getUsers/:roomName', channelController.getChannelUsers)
router.get('/getMessages/:roomName', channelController.getChannelMessages)
router.post('/', auth, channelController.create)
router.put('/:id', auth, channelController.updateTitle)
router.delete('/:id', auth, channelController.delete)

module.exports = router
