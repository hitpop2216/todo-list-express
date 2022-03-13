const mongoose = require('mongoose')
const Schema = mongoose.Schema
<<<<<<< HEAD

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Todo', todoSchema)
=======
const todoSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  isDone:{
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Todo', todoSchema)
>>>>>>> ec7481e (test)
