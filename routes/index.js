var express = require('express');
var router = express.Router();

var pageIndex = require('./pageIndex'),
	pageCard = require('./pageCard');


/* GET home page. */
router.get('/', pageIndex.home);

/* 用户的登录、退出、注册 */
/* 用户名下的项目 创建、修改、删除、查询 */
router.get('/p/:pid', pageCard.getCard);
/* 项目下的卡片页面 创建、修改、删除、查询 */
/* 卡片里的控件 创建、修改、删除、查询 */
/* 素材的创建修改删除查询 */
/* 项目的统计数据 */

module.exports = router;
