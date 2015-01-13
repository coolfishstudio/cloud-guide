$(function(){


	//--------页面按钮
	/* 用户按钮 */
	$('#userBtn').click(function(){
		var _width = $('.right-bar').width();
		$('.right-bar').stop().animate({'right' : -_width}, 500, function(){
			$('#menuBtn').css('display','block');
			$('#userBtn').css('display','none');
			$('.user-bar').stop().animate({'right' : 0}, 500);
		});
	});
	/* 菜单按钮 */
	$('#menuBtn').click(function(){
		var _width = $('.user-bar').width();
		$('.user-bar').stop().animate({'right' : -_width}, 500, function(){
			$('#userBtn').css('display','block');
			$('#menuBtn').css('display','none');
			$('.right-bar').stop().animate({'right' : 0}, 500);
		});
	});
	/* 新增文字按钮 */
	$('#add-text').click(function(){

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
		cardObj.init();
		pageObj.init();
	}
	init();
});

//_______________card
var cardObj = {
	//初始化
	init : function(){
	}
};
//_______________page
var pageObj = {//obj is li
	//固定left-menu的高度
	init : function(){
		var _height = $(window).height() - 102;
		$('.left-menu').css('height',_height);
		var _html = '<li><div class="left-menu-panel on"><div class="left-menu-panel-title">1</div><div class="left-menu-panel-content"></div><div class="left-menu-panel-close">x</div></div></li>';
		$('.left-menu ul').append(_html);
	},
	//新增
	add : function(){
		console.log(11);
		$('.left-menu ul li .left-menu-panel').removeClass('on');
		var _num = $('.left-menu ul li').length + 1;
		var _html = '<li><div class="left-menu-panel on"><div class="left-menu-panel-title">' + _num + '</div><div class="left-menu-panel-content"></div><div class="left-menu-panel-close">x</div></div></li>';
		$('.left-menu ul').append(_html);
		$('.left-menu').animate({scrollTop : $('.left-menu').get(0).scrollHeight},100);
	},
	//选中
	on : function(obj){
		$('.left-menu ul li .left-menu-panel').removeClass('on');
		obj.children('.left-menu-panel').addClass('on');
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
		}else{
			//清空
			obj.find('.left-menu-panel-content').empty();
		}
	},
	//拖拽
	drag : function(obj){

	}
};
//_______________text
var textObj = {
	add : function(){

	}
};
