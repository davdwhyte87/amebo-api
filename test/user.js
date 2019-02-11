/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import sequelize from '../config/database';

chai.use(chaiHttp);
const should = chai.should();

describe('Tests for authentication', () => {
  it('should get all the users', (done) => {
    chai.request(app).get('/user').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
