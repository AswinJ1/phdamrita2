<?php
$username="uzad8ugedcskz";
$database="dbemraa6smt5t6";
$password="43{bE1ALj412";

$connection = mysqli_connect("localhost", $username, $password) or die ("could not connect to mysql"); // Establishing Connection with Server
$db = mysqli_select_db($connection , $database) or die ("no database"); // Selecting Database from Server

$fname = $_POST['fname'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$enquiry = $_POST['enquiry'];
$qualification_id = $_POST['qualification_id'];
$discipline_id = $_POST['discipline_id'];
$utm_source = $_POST['Source'];
$utm_medium = $_POST['Medium'];
$utm_campaign = $_POST['Campaign'];
$utm_adgroupid = $_POST['Adgroupid'];

if($fname !=''||$email !=''){
  //create prepared statement
  $query = $connection->prepare("INSERT INTO leads(fname, email, contact, enquiry, utm_source, utm_medium, utm_campaign, utm_adgroupid, qualification, discipline) values(?,?,?,?,?,?,?,?,?,?)");
  //bind params
  $query->bind_param("ssssssssss", $fname, $email, $contact,$enquiry,$utm_source,$utm_medium,$utm_campaign,$utm_adgroupid,$qualification_id,$discipline_id);
  //execute query
  $query->execute();
  echo "New records created successfully";
}
mysqli_close($connection); // Closing Connection with Server
?>
