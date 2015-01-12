var tool = require('./util/tool');

/* 创建跳转一个新的项目链接 */
exports.home = function(req, res){
	var pid = tool.generateUUID();
    res.redirect('/p/' + pid);
};