var assert = require('assert');
var ExampleService = require('../../common/services/example-service');

describe('ExampleService', function() {
  describe('#echo', function() {
    it('should return the correct response, the same exact string passed in', 
      function() {
        var testString = 'Hello!';
        assert.equal(ExampleService.echo(testString), testString);
      });
  });
});