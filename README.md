loopback-example-m~~v~~c
===

A [LoopBack](http://loopback.io/) M~~V~~C boilerplate. It supports [Sails.js](https://github.com/balderdashy/sails)-like services, and contains tests for LoopBack controllers, models, and services. At the moment, views are not implemented in this boilerplate.

## Models

In this boilerplate, models are just plain, vanilla LoopBack models. 

Please take a look at the [LoopBack documentation](http://docs.strongloop.com/display/public/LB/Creating+models) for creating new models.

By convention, models are saved under the [common/models](common/models) directory.

## ~~Views~~

Currently not implemented because our company currently has no need for them, but please feel free to submit a pull request if you have a cool solution for implementing views.

## Controllers

Controllers are essentially equivalent to LoopBack models, and controller methods are implemented as LoopBack model remote methods. This means that all model functionality works for controllers as well (ACLs, validations, and so on).

Please take a look at the [LoopBack documentation](http://docs.strongloop.com/display/public/LB/Remote+methods) to learn more about how to define remote methods.

By convention, controller files should end in `-controller.js`. This ensures that any controller files created through the `slc loopback:model` generator are moved from the initial `common/models` folder into the `common/controllers` directory. Starting the server automatically activates the [add-controllers.js]() boot script which facilitates this transfer.

Please note that `common/controllers` is listed as a model source directory in [model-config.json](), so LoopBack should have no trouble finding the controllers.

By convention, controllers are saved under the [common/controllers](common/controllers) directory.

#### Example 
```javascript
// common/controllers/example-controller.js

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
```

## Services

Mirroring Sails.js, services are shared libraries that can be used in different parts of the application, either in controllers, in models, or in other services as well.

By convention, services are saved under the [common/services](common/services) directory.

#### Example
```javascript
// common/services/example-service.js

var ExampleService = {};

//
// Services are just exported modules.
//
ExampleService.echo = function(string) {
  return string;
};

module.exports = ExampleService;
```

## Tests

Unit tests are written using the [Mocha](http://mochajs.org) testing framework.

To run all tests, simply run the following command from the project root directory:

````
npm test
````

By convention, unit tests for controllers, models, and services are saved under their own respective directories under [test](test).

#### Example
```javascript
// test/services/example-service-test.js

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
```