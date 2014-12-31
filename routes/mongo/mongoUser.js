var userColl = require('./mongo').getCollection('user');
var tool = require('../util/tool');

exports.insert = function(userObj, callback){
	userObj._id = tool.generateUUID();//用户id
	userObj.createTimestamp = new Date().getTime();//创建时间
	userObj.updateTimestamp = new Date().getTime();//修改时间
	userObj.lastTimestamp = new Date().getTime();//最后登陆
	userColl.insert(userObj, callback);
};

exports.update = function(userID, userObj, callback){
	userObj.updateTimestamp = new Date().getTime();
	userColl.findAndModify({_id: userID.toLowerCase()}, [], {$set: userObj}, {new: true}, callback);
};

exports.remove = function(userID, callback){
	userColl.remove({_id: userID}, callback);
};

exports.getById = function(userID, callback){
	userColl.findOne({_id:userID},callback);
};

exports.getByName = function(userName, callback){
	userColl.findOne({name : userName},callback);
};

exports.getByEmail = function(email, callback){
	userColl.findOne({email : email},callback);
};
