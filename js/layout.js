$(function() {
	// 导航栏侧边距
	$("header nav ol").css({
		'margin-left': '6%'
	});
	// 面包屑透明背景
	$("header nav ol").css({
		'background': 'transparent'
	});
	// 导航栏左右分开
	$("header nav ol li:eq(6)").css({
		'margin-right': '45%'
	});
	// 导航栏购物按钮格式
	$("button[class='btn btn-warning']").css({
		'position': 'absolute',
		'top': '0px',
		'right': '10%',
		'width': '150px',
		'height': "41.5px",
		'border': '0px',
		'border-radius': '0px',
		'background': '#ff6a00',
		'color': '#ffffff',
	})
	// 面包屑a标签鼠标停留格式
	$('header a,footer a').on('mouseover', function() {
		$(this).css({
			'color': '#ff6a00',
			'text-decoration': 'underline'
		})
	}).on('mouseout', function() {
		$(this).css({
			'color': '#999999',
			'text-decoration': ''
		})
	})

	// 面包屑透明背景
	$("footer nav ol[class='breadcrumb']").css({
		'background': 'transparent',
	});


})
// 版权信息鼠标停留动画
$(function() {
	$("a[href='http://www.beian.miit.gov.cn/']").on('mouseover', function() {
		$(this).css('color', 'rgb(255,106,0)')
	}).on('mouseout', function() {
		$(this).css('color', 'rgb(153,153,153)')
	}).css('color', 'rgb(153,153,153)')
})
