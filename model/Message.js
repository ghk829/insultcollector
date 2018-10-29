var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	user_key: String,
    //author: {type:Schema.Types.ObjectId,ref:'user'},
    // 임시로 loginId로
    type : String,
    content: String
});

module.exports = mongoose.model('Message', messageSchema);