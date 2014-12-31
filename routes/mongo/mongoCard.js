var cardColl = require('./mongo').getCollection('guide_card');
var tool = require('../util/tool');

exports.insert = function(cardObj, callback){
	cardObj._id = tool.generateUUID();//项目id
	cardObj.createTimestamp = new Date().getTime();//创建时间
	cardObj.updateTimestamp = new Date().getTime();//修改时间
	cardColl.insert(cardObj, callback);
};

exports.update = function(cardID, cardObj, callback){
	cardObj.updateTimestamp = new Date().getTime();
	cardColl.findAndModify({_id: cardID.toLowerCase()}, [], {$set: cardObj}, {new: true}, callback);
};

exports.remove = function(cardID, callback){
	cardColl.remove({_id: cardID}, callback);
};

exports.getById = function(cardID, callback){
	cardColl.findOne({_id:cardID},callback);
};

exports.getAllByUserID = function(userID, callback){
	cardColl.find({userID : userID}).sort({'createTimestamp':-1}).toArray(callback);
};

exports.getAllPageByUserID = function(userID, pageNum, currentPage, callback){
	cardColl.find({userID : userID}).sort({'createTimestamp':-1}).limit(pageNum).skip(pageNum * (currentPage - 1)).toArray(callback);
};
