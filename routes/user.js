import express from 'express';

import userController from '../contollers/user';

const userRouter = express.Router();

userRouter.get('/', userController.create);

module.exports = userRouter;
