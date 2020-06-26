$(function() {
	$("header nav ol").css({
		'margin-left': '6%'
	});
	$("header nav ol").css({
		'background': 'transparent'
	});
	$("header nav ol li:eq(6)").css({
		'margin-right': '45%'
	});
	$("button[class='btn btn-warning']").css({
		'position': 'absolute',
		'top': '0px',
		'right': '8%',
		'width': '10%',
		'height': "5.5%",
		'border': '0px',
		'border-radius': '0px',
		'background': '#ff6a00',
		'color': '#ffffff',
	})
	$('header a,footer a').on('mouseover', function() {
		$(this).css({
			'color': '#000000',
			'text-decoration': 'underline'
		})
	}).on('mouseout', function() {
		$(this).css({
			'color': '#999999',
			'text-decoration': ''
		})
	})


	$("footer nav ol[class='breadcrumb']").css({
		'background': 'transparent',
	});


})
$(function() {
	$("a[href='http://www.beian.miit.gov.cn/']").on('mouseover', function() {
		$(this).css('color', 'rgb(255,106,0)')
	}).on('mouseout', function() {
		$(this).css('color', 'rgb(153,153,153)')
	}).css('color', 'rgb(153,153,153)')
})
