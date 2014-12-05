var ControllerService = require('../services/controller-service');
var ExampleService = require('../services/example-service');

module.exports = function(ExampleController) {
  
  //
  // Define controller methods by binding them to the controller 
  // object, exactly how you would define LoopBack model remote methods.
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
  // An example of how services can be used. Controller routes 
  // are set using a helper from ControllerService.
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
