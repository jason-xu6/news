window.onload=function()
		{
			    date();
			    function time(i){
			    	if (i<10) {
			    		i="0"+i;
			    	}else {
			    		i=i;
			    	}
			    	return i;
			    }
                function date(){
                	var myDate=new Date();
				    var year=myDate.getFullYear();
				    var month=myDate.getMonth()+1;
				    var date=myDate.getDate();
				    var h=myDate.getHours();
				    var m=myDate.getMinutes();
				    var s=myDate.getSeconds();
				    var d=myDate.getDay();
				    var xinqi=new Array(7);
                    xinqi[0]="星期天";
                    xinqi[1]="星期一";
                    xinqi[2]="星期二";
                    xinqi[3]="星期三";
                    xinqi[4]="星期四";
                    xinqi[5]="星期五";
                    xinqi[6]="星期六";
				    month=time(month);
				    date=time(date);
				    m=time(m);
				    s=time(s);
				    var show="当前时间:"+year+"年"+month+"月"+date+"日"+" "+h+":"+m+":"+s+" "+xinqi[d];
	                document.getElementById("time1").innerHTML=show;

                }
                setInterval(date, 1000);
                date1();
                function date1()
                {   
                	var myDate=new Date();
                	var youDate=new Date("2016-7-31,00:00:00");
                	var rightDate=youDate.getTime()-myDate.getTime();
                	//1天=24小时  1小时=60分钟 1分钟=60秒 1秒=1000毫秒;
                	var day=parseInt(rightDate/(24*60*60*1000));
                	var h=parseInt(rightDate/(60*60*1000)%24);
                	var m=parseInt(rightDate/(60*1000)%60);
                	var s=parseInt(rightDate/(1000)%60);
                	h=time(h);
				    m=time(m);
				    s=time(s);
                	if (rightDate<=0) {
                		document.getElementById("time2").innerHTML="it's time";
                	}else {
                		document.getElementById("time2").innerHTML="民大实习结束："+day+"天"+h+"小时"+m+"分钟"+s+"秒";
                	}
                	
                }
                setInterval(date1, 1000);
		};