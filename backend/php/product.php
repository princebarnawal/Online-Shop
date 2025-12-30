<?php
$con = mysqli_connect('localhost', 'root', '', 'user') or die('DB connection error');

$createtbl = "CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    address VARCHAR(100),
    number VARCHAR(15),
    payment varchar(20),
    product varchar(30)
)";

if (mysqli_query($con, $createtbl)) {
    // echo "Table created successfully.";
} else {
    echo "Table creation error: " . mysqli_error($con);
}

  if(isset($_POST['btw']))
 {
     $name=$_POST['name'];
     $email=$_POST['email'];
     $address=$_POST['address'];
	 $num=$_POST['number'];
     $payment=$_POST['payment'];
     $product=$_POST['product'];

     $insert="insert into product (name, email, address, number, payment, product)
      VALUES ('$name','$email','$address','$num','$payment','$product')";
    

    if (mysqli_query($con,$insert)){
        echo"Product Buy Successfully";
    } else {
        echo"Insertion failed:" . mysqli_error($con);
    }
 }

?>
