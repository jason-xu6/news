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
        document.getElementById("show").innerHTML=show;

    }
    setInterval(date, 1000);
   
		};