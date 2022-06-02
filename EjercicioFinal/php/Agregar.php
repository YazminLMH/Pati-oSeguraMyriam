<?php



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
$password='';
$port='3307';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

try {
$consultaSql = "insert into Alumno(numero_de_control,nombre_de_alumno,semestre,carrera,especialidad,estado_carrera,correo_institucional,telefono)
values('$numero','$nom','$sem','$car','$esp','$est','$cor','$tel')";

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