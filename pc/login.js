/**
liubowen082@163.com
2014-8-15
pc
*/
(function(){
		  
	var showError = function(msg){
		$('#cx_login_error').show();
		$('#cx_login_error_msg').html(msg);
		}
		
	var hideError = function(){
		$('#cx_login_error').hide();
		$('#cx_login_error_msg').html('');
		}
		

	$('#loginSubmit').on('click',function(){
		hideError();
		var email = $.trim($('#loginEmail').val())
		
		var loginPwd = $.trim($('#loginPwd').val());
		
		
		
		if(email == ''){
			showError('请填写账号');
			return false;
			}
		
		if(loginPwd == ''){
			showError('请填写密码');
			return false;
			}
	})
	
	
	
	
	var showRegError = function(msg){
		$('#cx_reg_error').show();
		$('#cx_reg_error_msg').html(msg);
		}
		
	var hideRegError = function(){
		$('#cx_reg_error').hide();
		$('#cx_reg_error_msg').html('');
		}
		

	$('#regSumbit').on('click',function(){
		hideRegError();
		var regUserName = $.trim($('#regUserName').val())
		
		var regEmail = $.trim($('#regEmail').val());
		var regPwd = $.trim($('#regPwd').val());
		var regCheckNum = $.trim($('#regCheckNum').val());
		
		
		if(regUserName == ''){
			showRegError('请填写用户名');
			return false;
			}
		if(regUserName.length>16||regUserName.length<3){
			showRegError('用户名应为3-16字符的汉字、字母或数字');
			return false;
			}
		
		if(regEmail == ''){
			showRegError('请填写邮箱');
			return false;
			}
		  var   sReg   =   /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;   
		  if(!sReg.test(regEmail)){
			  showRegError('邮箱格式错误');
				return false;
			  }
		  if(regPwd == ''){
			showRegError('请填写密码');
			return false;
			}
			
		if(regPwd.length>16||regPwd.length<6){
			showRegError('密码应为6-16位');
			return false;
			}
			
		  if(regCheckNum == ''){
			showRegError('请输入验证码');
			return false;
			}
		
	})
		  
	
	
	$('#cx_login_showLogin').on('click',function(){
												 
						$('#cx_login_title').html('登录')
						$('#cx_login_box').show();
						$("#cx_reg_box").hide();
												 
	})
	$('#cx_login_showReg').on('click',function(){
												 
						$('#cx_login_title').html('注册')
						$('#cx_login_box').hide();
						$("#cx_reg_box").show();
												 
	})
		  
	$('#cx_login_bg').css({height:$(document).height() + 'px'}) 
	$(window).on('resize',function(){
		$('#cx_login_bg').css({height:$(document).height() + 'px'}) 
	})
		  
		  
		  
})()