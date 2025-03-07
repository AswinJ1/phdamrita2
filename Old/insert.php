<?php
$connection = mysqli_connect("localhost", "suaguvdqyjec5", ""); // Establishing Connection with Server
$db = mysqli_select_db("dbemraa6smt5t6", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$enquiry = $_POST['enquiry'];
if($name !=''||$email !=''){
//Insert Query of SQL
$query = mysql_query("insert into leads(name, email, contact, enquiry) values ('$name', '$email', '$contact', '$enquiry')");
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysqli_close($connection); // Closing Connection with Server
?>