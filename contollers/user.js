import models from '../models/Index';

const { User } = models;
const create = (req, res) => {
  User.findAll().then((users) => {
    console.log(users);
    res.status(200).json({ status: 200 });
  });
};

const userController = { create };
module.exports = userController;
