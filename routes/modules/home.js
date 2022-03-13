const express = require('express')
const router = express.Router()
<<<<<<< HEAD

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  const userId = req.user._id
  Todo.find({userId})
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

module.exports = router
=======
const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  Todo
    .find()
    .lean()
    .then(todos => res.render('index', {todos}))
    .catch(err => console.log(err))
})

module.exports = router
>>>>>>> ec7481e (test)
