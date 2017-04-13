const userRouter = require('express').Router();
const userController = require('../controllers/userController.js');

userRouter.post('/', userController.createUser);

module.exports = userRouter;
