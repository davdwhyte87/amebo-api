import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sgMail from '@sendgrid/mail';

import User from '../models/User';


/**
 * This function sends a mail to the user, with the users access code
 * @param {String} email - The email of the user
 * @param {Int} code - The authentication code for a user
 * @returns {Boolean} - returns a true or false on the operation
 */
async function sendCodeEmail(email, code) {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: email,
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h4>Thank you for signing up, your activation code is, ' + code + ' </h4>',
  };
  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
/**
 * This function creates a user
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - returns a response object
 */
const create = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(400).json({ status: 400, message: 'An error occurred' });
    }
    const user = User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    user.save().then((userData) => {
      const safeUserData = userData.password;
      delete safeUserData.password;
      const userToken = jwt.sign({
        data: safeUserData,
      }, process.env.JWT_SECRETE, { expiresIn: '24h' });
      // send user a mail
      sendCodeEmail('kingstonwhyte87@gmail.com', 93904);
      return res.status(201).json({
        status: 201,
        data: [{ id: userData.id, message: 'User created successfully', token: userToken }],
      });
    })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({ status: 400, message: 'An error occurred' });
      });
  });
};

/**
 * This function signs a user in by providing a token
 * that can be used for authentication
 * @param {Object} req - Request object
 * @param {Object} res - response object
 * @returns {Object} - response object
 */
const signIn = async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email }).select('+password').exec();
    if (!user) {
      return res.status(404).json({ status: 404, message: 'This account does not exist' });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: 400, message: 'An error occurred' });
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    }
    if (result) {
      const userData = user;
      const userToken = jwt.sign({
        id: userData.id,
      }, process.env.JWT_SECRETE, {
        expiresIn: '24h',
      });
      return res.status(200).json({
        status: 200,
        data: [{ id: userData.id, token: userToken }],
      });
    }
  });
};
const userController = { create, signIn };
module.exports = userController;
