const usersServices=require('./users.services.js')

const router=require('express').Router()

router.get('/users',usersServices.getAllUsers)
router.get('/users/:id',usersServices.getUserById)
router.post('/users',usersServices.postUser)

module.exports=router