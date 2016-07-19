$(function(){
	$("form :input").blur(function(){
		$(this).next("span").remove();
		
		if ($(this).is("#username")){
			 var myReg = /^[\u4e00-\u9fa5]+$/;
			if(this.value==""||this.value.length<6||this.value.length>12||myReg.test($(this).val())){
				var errorMsg = "*请输入6至12位英文或数字组合";
				$(this).after("<span class='msg'>"+errorMsg+"</span>");
				}else{
					var okMsg = "*格式正确";
					$(this).after("<span class='msg1'>"+okMsg+"</span>");
					}
				
				
			}
		if ($(this).is("#resure")){
			var password = $("#password").val();
			if(this.value== (""+password+"") && !(this.value=="")){
				var okMsg1 = "*密码正确";
					$(this).after("<span class='msg1'>"+okMsg1+"</span>");
				
				}
			else{
				var errorMsg1 = "*密码不一致，请重新输入";
				$(this).after("<span class='msg'>"+errorMsg1+"</span>");
					}
			}	
		});
	$("#submit2").click(function(){
		$(".requir").trigger("blur");
		var numError = $(".msg").length;
		if(numError){
			return false;
			}
		else
		alert("注册成功！");
		})	;
	});