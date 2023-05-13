<?php
$uname = $_POST['uname']; 
$password = $_POST['password']; 
$conn = mysqli_connect("localhost","root","","onlineMed"); 
if(!$conn){
    die("Connection was not established"); 
}
$sql = "SELECT * FROM users WHERE uname = '$uname' AND password = '$password'"; 

if($sql === true){
    header("Location:home.html");
}
?>