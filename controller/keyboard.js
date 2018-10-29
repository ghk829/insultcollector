exports.keyboard = function(req, res){
	logger.info(req);
	var result = {"type":"text"};
	res.json(result);	
};