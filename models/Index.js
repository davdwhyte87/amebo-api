import Sequelize from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_URL, { dialect: 'postgres' });

const models = {
  User: sequelize.import('./User'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
