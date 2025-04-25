const express = require('express');
const route = express.Router();
const userController = require('./controllers/userController');
const coursePageController = require('./controllers/coursePageController');
const loginController= require('./controllers/loginController')
const { authenticateToken } = require('./middleware')



//View users
route.get('/', authenticateToken, userController.viewUsers);


//Register user
route.post('/', userController.registerUser);

//Login user
route.post('/login', loginController.loginUser);

//Delete user
route.delete('/:id', authenticateToken, userController.deleteUser);



//View course
route.get('/home', authenticateToken, coursePageController.viewCourses);

//Create course
route.post('/home', authenticateToken, coursePageController.createCouse);

//Delete couse
route.delete('/home/:id', authenticateToken, coursePageController.deleteCourse);
//Atualizar curso
//route.put('/users/home:courseName', mainController.updateUserAdmin);
//route.put('/users/updateClient/:index', mainController.updateUserClient);

//route.delete('/users/deleteUser/:index', mainController.deleteuser) ;


module.exports = route;