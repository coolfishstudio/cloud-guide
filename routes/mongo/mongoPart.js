var partColl = require('./mongo').getCollection('guide_part');
var tool = require('../util/tool');

exports.insert = function(partObj, callback){
	partObj._id = tool.generateUUID();//项目id
	partObj.createTimestamp = new Date().getTime();//创建时间
	partObj.updateTimestamp = new Date().getTime();//修改时间
	partColl.insert(partObj, callback);
};

exports.update = function(partID, partObj, callback){
	partObj.updateTimestamp = new Date().getTime();
	partColl.findAndModify({_id: partID.toLowerCase()}, [], {$set: partObj}, {new: true}, callback);
};

exports.remove = function(partID, callback){
	partColl.remove({_id: partID}, callback);
};

exports.getById = function(partID, callback){
	partColl.findOne({_id:partID},callback);
};

exports.getAllByPageID = function(pageID, callback){
	partColl.find({pageID : pageID}).sort({'createTimestamp':-1}).toArray(callback);
};

exports.getAllPageByPageID = function(pageID, pageNum, currentPage, callback){
	partColl.find({pageID : pageID}).sort({'createTimestamp':-1}).limit(pageNum).skip(pageNum * (currentPage - 1)).toArray(callback);
};