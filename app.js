import express from 'express';
import morgan from 'morgan';
// import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';

// import database

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
export default app;
