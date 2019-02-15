import sequelize from '../database';
import User from './User';
/**
 * This script creates tables based on the synced models
 */
// sequelize.sync();
sequelize.authenticate()
  .then(() => User.sync())
  .then(() => {
    console.log('database created');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });
