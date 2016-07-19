$(document).ready(function()
	{
		$(".tab-ul ul li").mouseover(function()
			{
				$(".tab-ul ul li").each(function(index) {
					alert($(this).text());
				});
			});
	});

$(document).ready(function()
	{
		$("#span-login a").click(function()
			{
				$(".login-wrap").css('display', 'block');
				$(".container").css('opacity', '.6');
			});
	});