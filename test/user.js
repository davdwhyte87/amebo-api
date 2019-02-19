/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models/User';

chai.use(chaiHttp);
const should = chai.should();

before('Drop database', (done) => {
  User.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    done();
  });
});
describe('Tests for authentication', () => {
  it('should create a new user', (done) => {
    const user = {
      name: 'johns mith',
      email: 'johnsm@gmail.com',
      password: '12345',
    };
    chai.request(app).post('/api/v1/user/signup').send(user)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('should not create a new user with the wrong credentials', (done) => {
    const user = {
      name: 'joh',
      email: 'johnsm',
      password: 'workoksmk',
    };
    chai.request(app).post('/api/v1/user/signup').send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('should not create a new user with the wrong credentials', (done) => {
    const user = {
      name: 'joh',
      email: 'johnsm@gmail.com',
    };
    chai.request(app).post('/api/v1/user/signup').send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
