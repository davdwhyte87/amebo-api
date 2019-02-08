import User from '../models/User';

const create = () => {
  User.findAll().then((users) => {
    console.log(users);
  });
};

const userController = { create };
module.exports = userController;
