import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_URL, { dialect: 'postgres'});

sequelize.sync();

module.exports = sequelize;
