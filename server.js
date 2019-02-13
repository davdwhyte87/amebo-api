import http from 'http';
import app from './app';
// eslint-disable-next-line no-unused-vars
import models, { sequelize } from './models/Index';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

// start server
sequelize.sync().then(() => {
  server.listen(port);
});
export default server;
