<?php
$conn = mysqli_connect("localhost", "root", "", "user");
if (!$conn) {
    die("Connection error: " . mysqli_connect_error());
}
    $createTbl = "CREATE TABLE IF NOT EXISTS contact (
        name VARCHAR(20),
        email VARCHAR(30),
        subject VARCHAR(200),
        message varchar(400)
    )";

    if (!mysqli_query($conn, $createTbl)) {
        die("Table creation error: " . mysqli_error($conn));
    }
    echo "Connection hghhg successfully";

    // if(isset($_POST['']))
    // {

    // $name = $_POST["name"];
    // $email = $_POST["email"];
    // $subject = $_POST["subject"];
    // $message = $_POST["message"];
    // $insert = "INSERT INTO contact (name, email, subject, message) 
    //     VALUES('$name', '$email', '$subject', '$message')";

    // mysqli_query($conn,$insert) or die('insertion failed');
    // echo 'data successfully inserted';
    // }
?>

