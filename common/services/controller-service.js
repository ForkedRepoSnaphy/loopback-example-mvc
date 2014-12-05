var async = require('async');
var _ = require('lodash');

var ControllerService = {};

ControllerService.setMethod = function(controller, method, http) {
  controller.remoteMethod(method, {
    accepts : {
      arg: 'request',
      type: 'object',
      http: {
        source: 'req'
      }
    },
    returns : {
      arg: 'response',
      type: 'object'
    },
    http : http
  });
};

ControllerService.setMethods = function(controller, methods) {
  console.log('Registering', controller.definition.name);
  _.forEach(methods, function(method) {
    console.log('    ', method.http.verb.toUpperCase(), method.http.path);
    
    ControllerService.setMethod(controller, method.method, method.http);
  });
};

module.exports = ControllerService;