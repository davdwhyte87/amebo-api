import Sequelize from 'sequelize';
import sequelize from '../database';


const User = sequelize.define('user', {
  id: { type: Sequelize.BIGINT, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.TEXT },
  isAdmin: { type: Sequelize.BOOLEAN, defaultValue: false },
  isActivated: { type: Sequelize.BOOLEAN, defaultValue: false },
  code: { type: Sequelize.INTEGER },
}, {
  freezeTableName: true,
});
module.exports = User;
