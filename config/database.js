import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import UserModel from '../models/User';

dotenv.config();

console.log(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_URL, { dialect: 'postgres' });

const User = UserModel(sequelize);
sequelize.sync().then(() => console.log('juu'));
sequelize.authenticate()
  .then(() => { console.log('Database connected'); })
  .catch((error) => { console.log(error); });
module.exports = { User };
