const express = require('express')
const { findAllUsers, findOne, addUsers, editUsers, deleteUsers } = require('../methods/methods')



const UsersRoute  = express.Router()


UsersRoute.get('/', findAllUsers) // GET :  RETURN ALL USERS 


UsersRoute.get('/one/:id', findOne) // GET :  RETURN A USER 


UsersRoute.post('/add', addUsers) // POST :  ADD A NEW USER TO THE DATABASE 


UsersRoute.put('/edit/:id', editUsers) // PUT : EDIT A USER BY ID 


UsersRoute.delete('/delete/:id', deleteUsers) // DELETE : REMOVE A USER BY ID 

module.exports=UsersRoute
