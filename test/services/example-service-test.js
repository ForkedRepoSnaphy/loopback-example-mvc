var assert = require('assert');
var ExampleService = require('../../common/services/example-service');

//
// Test the example service.
//
describe('ExampleService', function() {

  //
  // Test the 'echo' method.
  //
  describe('#echo', function() {
    it('should return the correct response, the same exact string passed in', 
      function() {
        var testString = 'Hello!';
        assert.equal(ExampleService.echo(testString), testString);
      });
  });
});