messageService = function(){
	return {
		registerMessage : function(reqData){
			var result;
			const Message = require("@model/Message")
			
			var message = new Message();
			//reqData Setter
			for(var elem in reqData){
				message[elem] = reqData[elem];
			}
			message.save(function(err,art){
				if(err){
					var text = "귀하의 차량이 성공적으로 등록되었습니다. 축하합니다!";
					result = {"message":{"text":text}};
				}
				else{
					var text = "귀하의 차량이 성공적으로 등록되었습니다. 축하합니다!";
					result = {"message":{"text":text}};
					}
			})
			return result;
										}
	}
}



module.exports = artService




