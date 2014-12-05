var should = require('should');
var supertest = require('supertest');
var server = require('../../server/server');
var Example = require('../../common/models/example');

describe('Example', function() {
  var testString = 'Example';

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