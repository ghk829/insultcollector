module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	var express = require('express');
	var router = express.Router();
	var controller = require('@controller/keyboard');
	router.get('/',controller.keyboard);
	return router;	//라우터를 리턴
};
