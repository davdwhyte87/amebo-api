import express from 'express';

import userController from '../contollers/user';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handleValidation';

const userRouter = express.Router();

userRouter.post('/signup', validator('signup'), handleValidation, userController.create);

module.exports = userRouter;
