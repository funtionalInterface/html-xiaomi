$(function() {
	// login头
	$('section div:eq(0)').css({
		'background-color': ' #FFFFFF',
		'height': '80px',
	})
	$('section div:eq(1)').css({
		"padding-top": "5px",
		"padding-left": "100px",
	})
	$('section img:eq(0)').css({
		'border-radius': "5px",
		"height": "50px",
		"padding-top": "8px",
		"margin-top": "7px",
		"margin-left": "100px",
	})
	$('section font:eq(0)').attr('size', '5')
	$('section font:eq(1)').attr('size', '1')
	// login体
	$('section  img:eq(1)').css({
		"margin-left": "200px",
	})
	$('.col-lg-3:eq(2)').css({
		"margin-top": "30px",
		"margin-left": "500px",
	})
	$('.col-lg-3:eq(2) div:eq(0)').css({
		"background-color": "rgb(68,68,68)",
		"height": "460px",
	})
	// login体内容
	$('.float-left').css({
		'padding-top': '25px',
		'font-weight': "bold",
		'font-size': "16px",
		'color': '#ffffff',
	})
	$('.float-right').css({
		'padding-top': '25px',
		'font-weight': "bold",
		'font-size': "12px",
		'color': '#ffffff',
	})
	$('.float-right > a').css({
		'color': 'rgb(255,0,0)',
	})
	// 分割线 开始输入注册信息
	$('hr').attr('width', '400px')
	// 表单
	$('.row:eq(3)').css({
		'padding-top': '45px',
		'padding-left': '15px',
	})
	$('.row:gt(3):lt(5)').css({
		'padding-top': '25px',
		'padding-left': '15px',
	})
	// 表单input
	$('form input:lt(2)').css({
		'width': '230px',
		'height': '35px',
	})
	$('form label').css({
		'color':'#ffffff'
	})
	// 验证码
	$('form input:eq(2)').css({
		'width': '115px',
		'height': '35px',
	})
	$('.row > img').css({
		'padding-left': '30px',
		'height': '35px',
	})
	// 表单按钮
	$('.row:eq(6)').css({
		'padding-top': '80px',
		'padding-left': '90px',
	})
	$('.row:eq(6) button:eq(0)').css({
		'width': '230px',
		'background': "rgb(255,103,0)",
	})
})
// 长度检查
function checkLength(value, length) {
	return (value == null || value.length == 0 || value.length > length)
}
// 登录事件
$(function() {
	$('.row:eq(6) button:eq(0)').on('click', function() {
		var user = $('form input:eq(0)').val()
		var password = $('form input:eq(1)').val()
		var code = $('form input:eq(2)').val()
		if (checkLength(user, 3)) $("#err-msg").text("用户名不得小于3个字符！")
		else if (checkLength(password, 6)) $("#err-msg").text("密码不得小于6个字符！")
		else if (checkLength(code, 4) || code != 'rmcc') $("#err-msg").text("验证码错误！")
		else {
			alert("登录成功，正在跳转首页~")
			window.location.href = 'index.html'
		}
	})
})
