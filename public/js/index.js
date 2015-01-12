$(function(){


	var typeBtn = {'imgType':['jc','ys','pl','gs','xg'],'textType':['jc','ys','pl','gs','xg'],'btnType':['jc','ys','pl','gs','xg'],'musicType':['yy'],'pageType':[]};

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
	var _num = $('.left-menu ul li').length + 1;
	var _html = '<li><div class="left-menu-panel"><div class="left-menu-panel-title">' + _num + '</div><div class="left-menu-panel-content"></div></div></li>';
	$('.left-menu ul').append(_html);
}
// 选中page
function on_page(obj){
	$('.left-menu ul li .left-menu-panel').removeClass('on');
	obj.children('.left-menu-panel').addClass('on');
}
//删除page