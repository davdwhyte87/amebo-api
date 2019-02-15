import User from '../models/User';

/**
 * This function creates a user
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - returns a response object
 */
const create = (req, res) => {
  User.findAll().then((users) => {
    console.log(users);
    res.status(200).json({ status: 200 });
  });
};

const userController = { create };
module.exports = userController;
