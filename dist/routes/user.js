'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../contollers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = _express2.default.Router();

userRouter.get('/', _user2.default.create);

module.exports = userRouter;
//# sourceMappingURL=user.js.map