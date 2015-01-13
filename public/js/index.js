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
	}
	//新增
	add : function(){
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

	},
	//清空
	clear : function(obj){
		obj.find('.left-menu-panel-content').empty();
	}
};
//_______________



