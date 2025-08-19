<?php
$con=mysqli_connect('localhost','root','') or die('connection error');

 $create="create database if not exists user ";
 mysqli_query($con,$create) or die('Database creation error');
 
  mysqli_select_db($con,'user');

  $createtbl="create table if not exists user(name varchar(20),email varchar(30),pwd varchar(20))";

  mysqli_query($con,$createtbl) or die('table creation error');

  if(isset($_POST['btw']))
 {
     $name=$_POST['Name'];
     $email=$_POST['email'];
     $pwd=$_POST['pwd'];
     $insert="insert into user values('$name','$email','$pwd')";
     mysqli_query($con,$insert) or die('insertion failed');
     echo 'data successfully inserted';
 }

?>