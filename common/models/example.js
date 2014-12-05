module.exports = function(Example) {
  
  //
  // Define LoopBack model remote methods.
  //
  Example.echo = function(string, callback) {
    callback(null, string);
  };

  Example.hi = function(callback) {
    callback(null, 'Hi!');
  };

  //
  //  Register remote methods.
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
