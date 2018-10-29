exports.message = function(req, res){
	require('module-alias/register');
	const service = require("@service/messageService")();
	const Message = require("@model/message");
	service.registerMessage().then(
		function(result){
			//TO-DO Front에 필요한 정보 만들어가삼요
			console.log(result);
			res.json(result);	
		});
		
};