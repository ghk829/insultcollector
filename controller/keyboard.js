exports.keyboard = function(req, res){
	var result = {
			  "type" : "buttons",
			  "buttons" : ["hello"]
			}
	res.json(result);	
		
};