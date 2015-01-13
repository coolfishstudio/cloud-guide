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
		add_page();
	});
	/* 选中page */
	$('.left-menu ul').on('click', 'li', function(){
		var _this = $(this);
		on_page(_this);
	});
	/* 删除page */
	$('.left-menu ul').on('click', '.left-menu-panel-close', function(){
		var _this = $(this).parent().parent();
		del_page(_this);
		return false;
	});


	/* 初始化 */
	function init(){
		//固定left-menu的高度
		var _height = $(window).height() - 102;
		$('.left-menu').css('height',_height);
	}
	init();
});

//_______________page
// 新增page
function add_page(){
	$('.left-menu ul li .left-menu-panel').removeClass('on');
	var _num = $('.left-menu ul li').length + 1;
	var _html = '<li><div class="left-menu-panel on"><div class="left-menu-panel-title">' + _num + '</div><div class="left-menu-panel-content"></div><div class="left-menu-panel-close">x</div></div></li>';
	$('.left-menu ul').append(_html);
	$('.left-menu').animate({scrollTop : $('.left-menu').outerHeight()},500);
}
// 选中page
function on_page(obj){
	$('.left-menu ul li .left-menu-panel').removeClass('on');
	obj.children('.left-menu-panel').addClass('on');
}
//删除page
function del_page(obj){
	var _parent = obj.parent().find('li');
	var _length = _parent.length;
	if(_length > 1){
		//删除
		var _index = obj.index();//当前是第几个
		for(var i = _index; i < _length; i++){
			_parent.eq(i).find('.left-menu-panel-title').html(i);
		};
		if(_index == _length - 1){
			on_page(obj.prev());//点亮前一个
		}else{
			on_page(obj.next());//点亮后一个
		}
		obj.remove();//移出去
	}else{
		//清空
		obj.find('.left-menu-panel-content').empty();
	}
}

//_______________menu
function getRightMenu(type){

}



