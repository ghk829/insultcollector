exports.message = function(req, res){
	require('module-alias/register');
	var service = require("@service/messageService");
	const Message = require("@model/Message");
	var data = req.body;
	service(data).then(function(result){
		console.log(result)
		res.json(result);
	})
};