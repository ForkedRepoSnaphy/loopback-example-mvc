module.exports = function(Example) {
  
  //
  // DEFINE METHODS
  //
  Example.echo = function(string, callback) {
    callback(null, string);
  };

  Example.hi = function(callback) {
    callback(null, 'Hi!');
  };

  //
  //  REGISTER METHODS
  //
  Example.remoteMethod('echo', {
    accepts: {
      arg: 'string', 
      type: 'string'
    },
    returns: {
      arg: 'string',
      type: 'string'
    },
    http: {
      verb: 'get'
    }
  });

  Example.remoteMethod('hi', {
    returns : {
      arg: 'message',
      type: 'string'
    },
    http: {
      verb: 'get'
    }
  });
};
