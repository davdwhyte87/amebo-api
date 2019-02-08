'use strict';

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = () => {
  _User2.default.findAll().then(users => {
    console.log(users);
  });
};

const userController = { create };
module.exports = userController;
//# sourceMappingURL=user.js.map