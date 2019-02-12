import express from 'express';
import morgan from 'morgan';
// import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';

// import models
import User from './models/User';
// import database
import sequelize from './config/database';
// import routers
import userRouter from './routes/user';


// connect to database


dotenv.config();
const app = express();
app.use(expressValidator());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.get('/hello', (req, res) => {
  res.send('hello mN');
});
// link routes with app
app.use('/user', userRouter);

app.use(morgan('dev'));

// start server
sequelize
  .authenticate()
  .then(() => {
    User.sync({ force: true });
    process.exit(0);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
app.listen(process.env.PORT || 3000, () => {
  console.log('server is running on port 5000');
  sequelize
    .authenticate()
    .then(() => User.sync({ force: true }))
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
});
export default app;
