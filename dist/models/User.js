'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _database2.default.define('user', {
  fistname: {
    type: _sequelize2.default.STRING
  }
});

module.exports = User;
//# sourceMappingURL=User.js.map