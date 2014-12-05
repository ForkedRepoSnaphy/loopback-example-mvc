var should = require('should');
var supertest = require('supertest');
var server = require('../../server/server');

describe('ExampleController', function() {

  describe('/api/example-controller/hi', function() {
    it('should return the correct response', function(done) {
      supertest(server)
        .get('/api/example-controller/hi')
        .expect(200)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            var correctResponse = {
              response: {
                message: 'Hi!'
              }
            };

            res.body.should.eql(correctResponse);
            done();
          }
        }); 
    });
  });

  describe('/api/example-controller/callService', function() {
    it('should return the correct response', function(done) {
      supertest(server)
        .get('/api/example-controller/callService?name=Santa')
        .expect(200)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            var correctResponse = {
              response: {
                message: 'Called example service which returned: Santa'
              }
            };

            res.body.should.eql(correctResponse);
            done();
          }
        });
    });
  });

});