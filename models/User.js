import Sequelize from 'sequelize';

module.exports = (sequelize) => {
  return sequelize.define('user', {
    fistname: {
      type: Sequelize.STRING,
    },
  }, {
    freezeTableName: true,
  });
};
