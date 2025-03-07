<?php
$contact = $_POST['email_id'];
$program = $_POST['course_id'];
$source = $_POST['utm_source'];
$authKey = 'mtechlanding2020keyascsa';//sarvgyanfdxzdf43dnde3
$leadName = $_POST['lead_name'];
$phone = $_POST['phone_no'];
$qualification_id = $_POST['qualification_id'];
$discipline_id = $_POST['discipline_id'];

$post_fields = Array(
  email_id => $contact,
	course_id => $program,
	utm_source => $source,
	auth_key => $authKey,
	lead_name => $leadName,
	phone_no => $phone,
	qualification_id => $qualification_id,
	discipline_id => $discipline_id	
);

$ch = curl_init('https://aoap.amrita.edu/lead-manager/aoap-sync/index');
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_HEADER, false); 
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_fields));     

$result = curl_exec($ch);
?>