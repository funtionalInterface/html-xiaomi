$(function() {
	// 注册栏
	$("section div:eq(0)").css({
		'border-radius': "6px",
		'background': "#ffffff",
		'height': "555px",
		'width': '999px',
		'margin-bottom': '16px'
	})
	// 注册栏第一行
	$(".float-left").css({
		'margin-left': '60px',
		'margin-top': '40px',
		'font-weight': "bold",
	})
	$(".float-right").css({
		'margin-right': '60px',
		'margin-top': '40px',
		'font-weight': "bold",
		'font-size': '12px',
		'color': 'rgb(255,103,0)'
	})
	// 分割线 开始输入注册信息
	$('hr').attr('width', '90%')
	// from表单 
	$('form div:eq(0)').css({
		'margin-top': '50px'
	})
	$('form div:gt(1)').css({
		'margin-top': '25px'
	})
	$("form label").css({
		'font-weight': "5px",
		'font-size': '13.5px',
		'margin-left': '170px'
	})
	$("form input:lt(4)").css({
		'border-radius': "0px",
		'width': '200px',
		'height': '33px',
		'margin-right': '20px'
	})
	// 验证码
	$("form input:eq(4)").css({
		'border-radius': "0px",
		'width': '100px',
		'height': '33px',
		'margin-right': '20px'
	})
	// 注册按钮
	$("form button").css({
		'border-radius': "0px",
		'border': "0px",
		'width': '300px',
		'height': '33px',
		'margin-top': "30px",
		'margin-left': "155px",
		'background': "rgb(255,103,0)"
	})
})
/**
 * 表单验证，输出相应信息
 * @param {Object} el 待验证栏
 * @param {Object} color 输出信息颜色
 * @param {Object} msg 输出的信息
 */
function check(el, color, msg) {
	if ($(el).attr('name') == 'code') {
		if ($(el).next().next().prop("nodeName") == 'FONT') {
			$(el).next().next().css('color', color)
			$(el).next().next().html(msg)
		} else $(el).next().after("<font color='" + color + "' style=font-size:12px>" + msg + "</font>")
	} else {
		if ($(el).next().prop("nodeName") == 'FONT') {
			$(el).next().css('color', color)
			$(el).next().html(msg)
		} else $(el).after("<font color='" + color + "' style=font-size:12px>" + msg + "</font>")
	}
}
// 添加表单验证事件
$(function() {
	$("form input").on('blur', function() {
		var type = $(this).attr('name')
		var value = $(this).val()
		var condition = "input[name=\'" + type + "\'] "
		switch (type) {
			case 'name':
				if (value == null || value.length == 0 || value.length > 3) check($(condition), 'red', '用户名不得小于3个字符！')
				else check($(condition), 'green', '格式正确！')
				break
			case 'password':
				if (value == null || value.length == 0 || value.length < 6) check($(condition), 'red', '密码不得小于6个字符！')
				else check($(condition), 'green', '格式正确！')
				break
			case 'repassword':
				if (value == null || value.length == 0 || value.length < 6) check($(condition), 'red', '两次密码不一致！')
				else check($(condition), 'green', '格式正确！')
				break
			case 'phone':
				var reg = /^[1][3,4,5,7,8][0-9]{9}$/
				if (!reg.test(value)) check($(condition), 'red', '手机格式不正确！')
				else check($(condition), 'green', '格式正确！')
				break
			case 'code':
				if (value == null || value.length == 0 || value.length > 5 || value != 'rmcc') check($(condition), 'red',
					'验证码错误！')
				else check($(condition), 'green', '格式正确！')
				break
			default:
				break
		}
	})
})
