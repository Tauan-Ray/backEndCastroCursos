const express = require('express');
const route = express.Router();
const userController = require('./controllers/userController');
const coursePageController = require('./controllers/coursePageController');
const loginController= require('./controllers/loginController')



//View users
route.get('/', userController.viewUsers);


//Register user
route.post('/', userController.registerUser);

//Login user
route.post('/login', loginController.loginUser);

//Delete user
route.delete('/:id', userController.deleteUser);



//View course
route.get('/home', coursePageController.viewCourses);

//Create course
route.post('/home', coursePageController.createCouse);

//Delete couse
route.delete('/home/:id', coursePageController.deleteCourse);
//Atualizar curso
//route.put('/users/home:courseName', mainController.updateUserAdmin);
//route.put('/users/updateClient/:index', mainController.updateUserClient);

//route.delete('/users/deleteUser/:index', mainController.deleteuser) ;


module.exports = route;