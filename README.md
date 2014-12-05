loopback-m~~v~~c-sample
===

A [loopback](http://loopback.io/) MVC boilerplate. It supports [Sails.js](https://github.com/balderdashy/sails)-like services, and features tests for controllers, models, and services. At the moment, views are not implemented in this boilerplate.

## Models

Please take a look at the [loopback documentation](http://docs.strongloop.com/display/public/LB/Creating+models) for creating new models.

Models are saved under the [common/models](common/models) directory.

## ~~Views~~

Currently not implemented because we currently do not need them, but please feel free to submit a pull request if you have a cool solution for implementing views!

## Controllers

Controllers are essentially equivalent to `loopback` models, and adding a new controller is the same as adding a new `loopback` model: 
	
````
slc loopback:model
````

The new controller is saved under the `common/models` folder, but running `node .` to start the server activates the [add-controllers.js]() boot script, which transfers all files containing `-controller` into the `common/controllers` folder.

Notice that `common/controllers` is listed as a model source directory in [model-config.json](), so `loopback` should be able to search for controllers under this directory.

Please take a look at [example-controller.js]() to see how to set controller routes.

Controllers are saved under the [common/controllers](common/controllers) directory.

## Services

Mirroring Sails.js, services are shared libraries that can be used in different parts of the application, either in controllers, in models, or in other services as well.

Please take a look at [example-service.js]() to see how to implement services.

Services are saved under the [common/services](common/services) directory.

## Tests

Unit tests are written using the [Mocha](http://mochajs.org) testing framework.

To run all tests, simply run the following command from the project root directory:

````
npm test
````

Sample controller, model, and service tests are saved under the [test](test) directory.