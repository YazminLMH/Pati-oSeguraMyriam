
$(document).ready(function () {
$('#btnjson').click(function () {
        $.post('BotonJson.php', {}, function (data) {

            console.log(data);
            $('#Num.de control').val(data.Num.decontrol);
            $('#Nombre').val(data.nombre);
            $('#Semestre').val(data.Semestre);
            $('#Carrera').val(data.Carrera);
            $('#Especialidad').val(data.Especialidad);
            $('#Estado carrera').val(data.carrera);
            $('#Correo').val(data.Correo);
            $('#telefono').val(data.telefono);

        }, 'json');
    });
});