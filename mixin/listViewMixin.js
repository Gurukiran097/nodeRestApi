var router = {};

router.get = function(req,res,next) {
  var query = {};
  if(req.params[req.context.parameter]){
    query = {'_id': req.params[req.context.parameter]};
    console.log(req.params);
  }
  req.model.find(query,function(err,data){
    req.err = err;
    req.data = data;
    next(req,res);
  });
}

router.post = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

router.put = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

router.delete = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

module.exports = router;
