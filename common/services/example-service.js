var ExampleService = {};

//
// Services are just exported modules.
//
ExampleService.echo = function(string) {
  return string;
};

module.exports = ExampleService;