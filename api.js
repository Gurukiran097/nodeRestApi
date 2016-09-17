var middleware = function(config,context,models){
  return function(req,res,next){
    req.model = models[config.db];
    req.context = config;
    require(config.mixin)[(req.method).toLowerCase()](req,res,require(context.serializer));
  }
};

function generateRoute(app,context,models) {
  for(var endpoints in context.rules){
    var routeConfig = context.rules[endpoints];
    if(routeConfig.parameter){
      app.use(endpoints + '/:' + routeConfig.parameter,middleware(routeConfig,context,models));
    }
    app.use(endpoints,middleware(routeConfig,context,models));
  }
}

module.exports = generateRoute;
