module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	var express = require('express');
	var router = express.Router();
	var controller = require('@controller/message');
	router.post('/',controller.message);
	return router;	//라우터를 리턴
};
