const express = require('express')
const router = express.Router()
<<<<<<< HEAD

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const auth = require('./modules/auth')
const {authenticator} = require('../middleware/auth')

router.use('/todos', authenticator,todos)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator,home)

module.exports = router
=======
const home = require('./modules/home')
const todos = require('./modules/todos')

router.use('/', home)
router.use('/todos', todos)

module.exports = router
>>>>>>> ec7481e (test)
