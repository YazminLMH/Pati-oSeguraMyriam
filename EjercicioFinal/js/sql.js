$(document).ready(function () {

    document.getElementById("btnConsultar").addEventListener("click", function () {
        let parid = prompt("Teclee el numero de control  a consultar");
        $.post('../php/conectar.php', { par1: parid }, function (data) {

            refrescar(data);
        }, 'json');
    });

    function refrescar(objeto) {

        console.log(objeto);
        
        $('#Numdecontrol').val(objeto.numero_de_control);
        $('#Nombre').val(objeto.nombre_de_alumno);
        $('#Semestre').val(objeto.semestre);
        $('#Carrera').val(objeto.carrera);
        $('#Especialidad').val(objeto.especialidad);
        $('#Estadocarrera').val(objeto.estado_carrera);
        $('#Correo').val(objeto.correo_institucional);
        $('#telefono').val(objeto.telefono);




    }

});
