

$(document).ready(function () {
    document.getElementById('btnFetch').addEventListener('click', function () {
        let promise = fetch('Fetch.php');

        promise.then(respuesta => respuesta.json())
            .then(datos => console.log(datos));
    });
   
   
   
    $('#btnjson').click(function () {
        $.post('Fetch.php', {}, function (data) {

           
          
          
          
            console.log(data);
            $('#Numdecontrol').val(data.Num.decontrol);
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

