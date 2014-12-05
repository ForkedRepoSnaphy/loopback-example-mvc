var should = require('should');
var supertest = require('supertest');
var server = require('../../server/server');
var ExampleModel = require('../../common/models/example');

//
// Test the example model.
//
describe('ExampleModel', function() {
  var testString = 'Example';

  // 
  // Test the 'hi' remote method.
  // 
  describe('/api/examples/hi', function() {
    it('should return the correct greeting', function(done) {
      supertest(server)
        .get('/api/examples/hi')
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            var correctGreeting = {
              message: 'Hi!'
            };

            res.body.should.eql(correctGreeting);
            done();
          }
        });
    });
  });
});