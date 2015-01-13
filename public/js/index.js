$(function(){
	var typeBtn = {
		'imgType' : ['jc','ys','pl','gs','xg'],
		'textType' : ['jc','ys','pl','gs','xg'],
		'btnType' : ['jc','ys','pl','gs','xg'],
		'musicType' : ['yy'],
		'pageType' : ['jc','mb']
	};

	/* 头部新增按钮 */
	$('.top-control-box').on('click', '.top-control', function(){
		console.log($(this).attr('relName'));
		var _this = $(this);
		$('.right-menu ul li').css('display','none');
		for (var i = 0; i < typeBtn[$(this).attr('relName')].length; i++) {
			console.log(typeBtn[$(this).attr('relName')][i]);
			$('.right-menu ul li').eq(i).removeClass('on');
			$('.right-menu ul li[relName='+typeBtn[$(this).attr('relName')][i]+']').css('display','block');
		};
		$('.right-menu ul li[relName='+typeBtn[$(this).attr('relName')][0]+']').addClass('on');
	});



	/* 新增page */
	$('.add-page-btn').click(function(){
		pageObj.add();
	});
	/* 选中page */
	$('.left-menu ul').on('click', 'li', function(){
		var _this = $(this);
		pageObj.on(_this);
	});
	/* 删除page */
	$('.left-menu ul').on('click', '.left-menu-panel-close', function(){
		var _this = $(this).parent().parent();
		pageObj.del(_this);
		return false;
	});


	/* 初始化 */
	function init(){
		pageObj.init();
	}
	init();
});

//_______________page
var pageObj = {//obj is li
	//固定left-menu的高度
	init : function(){
		var _height = $(window).height() - 102;
		$('.left-menu').css('height',_height);
		if(!localStorageObj.find('page_num')){
			localStorageObj.add('page_num', 1);
			localStorageObj.add('page_current', 0);
		}
		var pageNum = localStorageObj.find('page_num');
		for (var i = 0; i < pageNum; i++) {
			var _html = '<li><div class="left-menu-panel' + (localStorageObj.find('page_current') == i ? ' on' : '') + '"><div class="left-menu-panel-title">' + (i + 1) + '</div><div class="left-menu-panel-content"></div><div class="left-menu-panel-close">x</div></div></li>';
			$('.left-menu ul').append(_html);
		};
	},
	//新增
	add : function(){
		$('.left-menu ul li .left-menu-panel').removeClass('on');
		var _num = $('.left-menu ul li').length + 1;
		var _html = '<li><div class="left-menu-panel on"><div class="left-menu-panel-title">' + _num + '</div><div class="left-menu-panel-content"></div><div class="left-menu-panel-close">x</div></div></li>';
		$('.left-menu ul').append(_html);
		$('.left-menu').animate({scrollTop : $('.left-menu').get(0).scrollHeight},100);
		localStorageObj.update('page_num', _num);
		localStorageObj.update('page_current', _num - 1);
	},
	//选中
	on : function(obj){
		$('.left-menu ul li .left-menu-panel').removeClass('on');
		obj.children('.left-menu-panel').addClass('on');
		localStorageObj.update('page_current', obj.index());
	},
	//删除
	del : function(obj){
		var _parent = obj.parent().find('li');
		var _length = _parent.length;
		if(_length > 1){
			//删除
			var _index = obj.index();//当前是第几个
			for(var i = _index; i < _length; i++){
				_parent.eq(i).find('.left-menu-panel-title').html(i);
			};
			if(_index == _length - 1){
				pageObj.on(obj.prev());//点亮前一个
			}else{
				pageObj.on(obj.next());//点亮后一个
			}
			obj.remove();//移出去
			var pageNum = localStorageObj.find('page_num');
			localStorageObj.update('page_num', pageNum - 1);
			localStorageObj.update('page_current', pageNum - 2);
		}else{
			//清空
			obj.find('.left-menu-panel-content').empty();
		}
	},
	//拖拽
	drag : function(obj){

	}
};
//_______________localStorage
var localStorageObj = {
	//存储
	add : function(key, value){
		localStorage[key] = value;
	},
	//修改
	update : function(key, value){
		localStorage[key] = value;
	},
	//清空
	clear : function(){
		localStorage.clear();
	},
	//删除
	delete : function(key){
		localStorage.removeItem(key);
	},
	//查找
	find : function(key){
		return localStorage[key];
	}
};



