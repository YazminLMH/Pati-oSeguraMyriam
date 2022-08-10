<?php


$ID=$_POST['ID'];
$numero=$_POST['num'];
$nom=$_POST['nom'];
$sem=$_POST['sem'];
$car=$_POST['car'];
$esp=$_POST['esp'];
$est=$_POST['est'];
$cor=$_POST['cor'];
$tel=$_POST['tel'];

$hostname='localhost';
$database='L19100231';
$username='root';
$password='1234';
$port='3307';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

try {
$consultaSql = "update alumno set numero_de_control=$numero,nombre_de_alumno='$nom',semestre=$sem,carrera='$car',especialidad='$esp',estado_carrera='$est',correo_institucional='$cor',telefono='$tel' where ID=$ID";

$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>