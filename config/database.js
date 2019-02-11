import Sequelize from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_URL, { dialect: 'postgres' });

sequelize.authenticate()
  .then(() => { console.log('Database connected'); })
  .catch((error) => { console.log(error); });
sequelize.sync().then(() => console.log('juu'));

module.exports = sequelize;
