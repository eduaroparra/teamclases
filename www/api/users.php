<?php

    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
	header("Content-Type:application/json");

	require_once "config.php";
    require_once "database.php";

    //validamos que la peticion al API sea por el metodo POST
    if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
        
       setUser();

	}else{
		response(400,"Invalid Request",NULL);
	}


	function setUser(){
		
		$DBConnect =  new Database();
        

        $name = $_POST['nombre'];
		$username = $_POST['usuario'];
		$password = $_POST['password'];

        
		 
		 
$stmt = $DBConnect->mysqli->prepare("INSERT INTO usuarios(usuario,password,nombre) VALUES (?,?,?);");
$stmt->bind_param('sss', $username,$password,$name);
$r = $stmt->execute(); 

if($r){
	
	response(200,"CORRECTO","USUARIO REGSITRADO");
	
}else{
	
	response(400,"INCORRECTO","USUARIO NO REGSITRADO");
}
         
	}




	function response($status,$status_message,$data)
	{
		header("HTTP/1.1 ".$status);
		
		$response['status']=$status;
		$response['status_message']=$status_message;
		$response['data']=$data;
		
		$json_response = json_encode($response);
		echo $json_response;

	}



?>