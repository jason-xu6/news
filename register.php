<?php
  header("content-type:text/html;charset:utf-8");
$username=$_POST['username'];
$password=$_POST['password'];
$filename='register.txt';
     
     if (file_exists($filename)&&filesize($filename)>0) {
     	$string=file_get_contents($filename);
     	$mesInfo=unserialize($string);
     }
           $mes=compact('username','password');
       if(in_array($mes, $mesInfo)){
           echo '这个用户名已经存在了<br>"<a href="index.html">重新登陆</a>"<br>';
           echo "三秒钟之后自动跳转登陆界面";
		   echo "<meta http-equiv='refresh' content='3;url=index.html'/>";
       } else {
           $mesInfo[]=compact('username','password');
		   $mesInfo=serialize($mesInfo);
		if (file_put_contents($filename, $mesInfo)) {
			echo "注册成功<br><a href='index.html'>马上登陆</a><br>";
			echo "三秒钟之后自动跳转登陆界面";
			echo "<meta http-equiv='refresh' content='3;url=index.html'/>";
		}else{
			echo "注册失败<br><a href='index.html'>重新添加</a>";
		}
       }
       
		
	
