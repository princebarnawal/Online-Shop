<?php
session_start();
	if(isset($_POST['btw'])){
		$email = $_POST['email'];
		$pwd = $_POST['pwd'];
		$con=mysqli_connect('localhost','root','','user') or die('DB connection error');
		$select = "select * from user where email = '$email' and pwd = '$pwd'";
		$result = mysqli_query($con,$select) or die("Retrieval Error");
		if(mysqli_num_rows($result) != 0)
		{
			setcookie('email',$email,time()+60);
			setcookie('pwd',$pwd,time()+60);
			// echo "Login Successful";
			echo 'Login Successful. <a href="home.html">Go to Home Page</a>';

		}else{
			echo "Password does not match";
		}
	}
?>
