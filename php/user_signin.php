<!--
		Developer: Tekletsadik Tadesse
        Mobile : +251967267539
        Droga Pharma pvt PLC.
        Address : Addiss Ababa, Ethiopia
		-->

<?php 
session_start();
include_once('db_conection.php');
//I use a PREPARED SQL Statement
//Coding For Signin
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if(isset($_POST['signin']))
{
	//Getting POST Values
	$id=$_POST['id'];	
	$password=md5($_POST['password']);	

    $stmt = $dbcon->prepare("SELECT id,name FROM users WHERE id=? AND password=? LIMIT 1");
    $stmt->bind_param('ss',$id, $password);
    $stmt->execute();
    $stmt->bind_result($id, $name);
    $stmt->store_result();
	
    if($stmt->num_rows == 1)  //To check if the row exists
        {
            if($stmt->fetch()) //fetching the contents of the row
            {              
                   $_SESSION['Logged'] = 1;
				   $_SESSION['name'] = $name;
                   $_SESSION['id'] = $id;
				   header('location:dms/index');
					//echo "<script>alert('Successful!')</script>";
				    //echo "<script>window.open('dms/index.php','_self')</script>";		   
				   exit();
              
           }

    }
    else {
		echo "<script>alert('INVALID ID/PASSWORD Combination!')</script>";
		//echo "<script>window.open('user.php','_self')</script>";
    }
    $stmt->close();
}
else 
{   

}
$dbcon->close();