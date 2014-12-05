var fs = require('fs-extra');
var async = require('async');
var _ = require('lodash');
var commonPath = __dirname + '/../../common';

//
// Move *-controller.js files from common/models to common/controllers
//
module.exports = function addControllers(server, callback) {
  async.waterfall([
    // Filter out controller files from common/models
    function(onWaterfall) {
      fs.readdir(commonPath + '/models', function(err, files) {
        if (err) {
          onWaterfall(err);
        } else {
          var controllerFiles = _.filter(files, function(file) {
            return file.indexOf('-controller') > -1;
          });

          onWaterfall(null, controllerFiles);
        }
      });
    },
    // Move controller files to common/controllers
    function(controllerFiles, onWaterfall) {
      async.each(controllerFiles, function(file, onEach) {
        fs.move(commonPath + '/models/' + file, 
          commonPath + '/controllers/' + file, function(err) {
            if (err) {
              onEach(err);
            } else {
              console.log('Moved controller file:', file);
              onEach();
            }
          });
      }, function(err) {
        if (err) {
          onWaterfall(err);
        } else {
          onWaterfall();
        }
      });
    }
  ], function(err, result) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback();
    }
  });
};
