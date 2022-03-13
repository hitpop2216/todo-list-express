<<<<<<< HEAD
const Todo = require('../todo')
const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose')
const User = require('../user')
const SEED_USER = {
  name: 'root',
  email: 'root@root',
  password: '123456'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        {length: 10},
        (_, i) => Todo.create({ name: 'name-' + i, userId })
      ))
    })
    .then(() => {
      console.log('done')
      process.exit()
    })
})
=======
const db = require('../../config/mongoose')
const Todo =require('../todo')
db.once('open', () => {
  for(let i = 1; i<=10; i++) {
    Todo.create({name:`name-${i}`})
  }
  console.log('done!')
})
>>>>>>> ec7481e (test)
