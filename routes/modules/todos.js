const express = require('express')
const router = express.Router()
<<<<<<< HEAD

const Todo = require('../../models/todo')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const name = req.body.name

  return Todo.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Todo.findOne({_id, userId})
    .lean()
    .then(todo => res.render('detail', { todo }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Todo.findOne({_id, userId})
    .lean()
    .then(todo => res.render('edit', { todo }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, isDone } = req.body

  return Todo.findOne({_id, userId})
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${_id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Todo.findOne({_id, userId})
    .then(todo => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
=======
const Todo = require('../../models/todo')


router.get('/new', (req, res) => {
  res.render('new')
})
router.post('/new', (req, res) => {
  Todo
    .create({name: req.body.name})
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.get('/:id/detail', (req, res) => {
  Todo
    .findById(req.params.id)
    .lean()
    .then(todo => res.render('detail', {todo}))
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {
  Todo
    .findById(req.params.id)
    .lean()
    .then(todo => res.render('edit', { todo }))
    .catch(err => console.log(err))
})
router.put('/:id', (req, res) => {
  Todo
    .findByIdAndUpdate({_id: req.params.id}, {
      name: req.body.name,
      isDone: req.body.isDone === 'on'
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
  Todo
    .findByIdAndRemove({ _id: req.params.id })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
>>>>>>> ec7481e (test)
