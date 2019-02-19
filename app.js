import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';

// import database
import mongoose from 'mongoose';
// import routers
import userRouter from './routes/user';

dotenv.config();
// connect to database
try {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
} catch (error) {
  console.log(error);
}

const app = express();
app.use(expressValidator());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
// allow app to get json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('hello mN');
});
// link routes with app
app.use('/user', userRouter);

app.use(morgan('dev'));
export default app;
