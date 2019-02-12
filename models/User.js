import Sequelize from 'sequelize';
import sequelize from '../config/database';


const User = sequelize.define('user', {
  fistname: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
});
module.exports = User;
