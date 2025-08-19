<?php
session_start();
	if(isset($_COOKIE['email'])){
		echo "Welcome ".$_COOKIE['email'];
	}
	else{
		echo "<a href='login.php'>Login</a> First to view this page";
		die();
	}
?>
<h1>Hello</h1>