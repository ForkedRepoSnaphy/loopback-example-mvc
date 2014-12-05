var _ = require('lodash');
var server = require('../../server/server');

var ControllerService = require('../services/controller-service');
var ExampleService = require('../services/example-service');

module.exports = function(ExampleController) {
  
  //
  // DEFINE METHODS
  //
  ExampleController.sayHi = function(req, callback) {
    callback(null, { message: 'Hi!' });
  };


  ExampleController.callExampleService = function(req, callback) {
    var name = req.param('name');

    callback(null, 
      { message: 'Called example service which returned: ' + 
        ExampleService.echo(name) });  
  };

  //
  //  REGISTER METHODS
  //
  ControllerService.setMethods(ExampleController, [
    {
      method: 'sayHi',
      http: {
        path: '/hi',
        verb: 'get'
      }  
    },
    {
      method: 'callExampleService',
      http: {
        path: '/callService',
        verb: 'get'
      }  
    }
  ]);
};
