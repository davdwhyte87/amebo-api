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

/**
 * This function trys to connect to a database
 * @returns {null} - This function returns null
 */
async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  } catch (error) {
    console.log(error);
  }
}
connectDb();

const app = express();
app.use(expressValidator());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// set view engine
app.set('view engine', 'hjs');


// allow app to get json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/v1', (req, res) => {
  res.status().json({ status: 200, message: 'Welcome to Amebo Api' });
});
// link routes with app
app.use('/api/v1/user', userRouter);

app.use(morgan('dev'));
export default app;
