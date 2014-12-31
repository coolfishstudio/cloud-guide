var pageColl = require('./mongo').getCollection('guide_page');
var tool = require('../util/tool');

exports.insert = function(pageObj, callback){
	pageObj._id = tool.generateUUID();//页id
	pageObj.createTimestamp = new Date().getTime();//创建时间
	pageObj.updateTimestamp = new Date().getTime();//修改时间
	pageColl.insert(pageObj, callback);
};

exports.update = function(pageID, pageObj, callback){
	pageObj.updateTimestamp = new Date().getTime();
	pageColl.findAndModify({_id: pageID.toLowerCase()}, [], {$set: pageObj}, {new: true}, callback);
};

exports.remove = function(pageID, callback){
	pageColl.remove({_id: pageID}, callback);
};

exports.getById = function(pageID, callback){
	pageColl.findOne({_id:pageID},callback);
};

exports.getAllByCardID = function(cardID, callback){
	pageColl.find({cardID : cardID}).sort({'createTimestamp':-1}).toArray(callback);
};

exports.getAllPageByCardID = function(cardID, pageNum, currentPage, callback){
	pageColl.find({cardID : cardID}).sort({'createTimestamp':-1}).limit(pageNum).skip(pageNum * (currentPage - 1)).toArray(callback);
};
