$(function(){


	var typeBtn = {'imgType':['jc','ys','pl','xg'],'textType':['jc','ys','pl','xg'],'btnType':['jc','ys','pl','xg'],'musicType':['yy'],'pageType':[]};

	/* 头部新增按钮 */
	$('.top-control-box').on('click', '.top-control', function(){
		console.log($(this).attr('relName'));
		var _this = $(this);
		$('.right-menu ul li').css('display','none');
		for (var i = 0; i < typeBtn[$(this).attr('relName')].length; i++) {
			console.log(typeBtn[$(this).attr('relName')][i]);
			$('.right-menu ul li[relName='+typeBtn[$(this).attr('relName')][i]+']').css('display','block');
		};
	});

});
