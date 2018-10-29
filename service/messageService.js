messageService = function(reqData){
			return new Promise(function(resolved,rejected){
				var result;
				const Message = require("@model/Message")
				var message = new Message();
				//reqData Setter
				for(var elem in reqData){
					console.log(elem);
					console.log(reqData[elem])
					message[elem] = reqData[elem];
					
				}
				message.save(function(err,msg){
					if(err){
						var text = "fuck you asshole";
						result = {"message":{"text":text}};
						resolved(result);
					}
					else{
						Message.find(function(err,msginsult){
							var rand = msginsult[Math.floor(Math.random() * msginsult.length)];
							console.log(rand);
							var text = rand.content;
							result = {"message":{"text":text}};
							resolved(result);
						})
						}
				})
			 })
		
}



module.exports = messageService




