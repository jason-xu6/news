$(document).ready(function()
	{
		$(".tab-ul ul li").mouseover(function()
			{
				$(".tab-ul ul li").each(function(index) {
					alert($(this).text())
				});
			});
	});