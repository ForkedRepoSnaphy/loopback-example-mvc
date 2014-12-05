var fs = require('fs-extra');
var server = require('../server/server');
var _ = require('lodash');

before(function(done) {
  // Set 15 second timeout to allow booting 
  this.timeout(5000);

  server.once('booted', function() {
    server.start();
    done();
  });
});

// Include controller tests
fs.readdirSync(__dirname+'/controllers').forEach(function(file) {
  if (file.indexOf('test.js') > -1) {
    require('./controllers/' + file);
  }
});

// Include model tests
fs.readdirSync(__dirname+'/models').forEach(function(file) {
  if (file.indexOf('test.js') > -1) {
    require('./models/' + file);
  }
});

// Include services tests
fs.readdirSync(__dirname + '/services').forEach(function(file) {
  if (file.indexOf('test.js') > -1) {
    require('./services/' + file);
  }
});