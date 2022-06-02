$(document).ready(function () {

    document.getElementById("btnConsultar").addEventListener("click", function () {
        swal("Ingresa el ID a consultar:", {
            content: "input",
        })
            .then((ID) => {
                $.post('../php/consultar.php', { par1: ID }, function (data) {

                    swal("Accion completada", "se ha consultado correctamente", "success");
                    refrescar(data);
                }, 'json');
            });
     
   
    });

    /* Eliminar */ 
   

    $('#btnEliminar').click(function(){
        let ID = document.getElementById("ID").value; 
                $.post('../php/Eliminar.php', { par1: ID }, function (data) {

                    swal("Accion completada", "se ha eliminado correctamente", "success");
                    refrescar(data);
                }, 'json');
            });

    
    $('#btnAgregar').click(function () {
    
        let Numero = document.getElementById("Numdecontrol").value;
        let Nombre  = document.getElementById("Nombre").value;
        let Semestre = document.getElementById("Semestre").value;
        let Carrera = document.getElementById("Carrera").value;
        let Especialidad = document.getElementById("Especialidad").value;
        let EstadoCarrera = document.getElementById("Estadocarrera").value;
        let Correo = document.getElementById("Correo").value;
        let Telefono = document.getElementById("telefono").value;
    

                $.post('../php/Agregar.php', { num:Numero,nom:Nombre,sem:Semestre,car:Carrera,esp:Especialidad,est:EstadoCarrera,cor:Correo,tel:Telefono }, function (data) {

                    swal("Accion completada", "se ha agregado correctamente", "success");
                    refrescar(data);
                }, 'json');
           

    })
    
   
    $('#btnModificar').click(function () {
                let ID = document.getElementById("ID").value; 
                let Numero = document.getElementById("Numdecontrol").value;
                let Nombre = document.getElementById("Nombre").value;
                let Semestre = document.getElementById("Semestre").value;
                let Carrera = document.getElementById("Carrera").value;
                let Especialidad = document.getElementById("Especialidad").value;
                let EstadoCarrera = document.getElementById("Estadocarrera").value;
                let Correo = document.getElementById("Correo").value;
                let Telefono = document.getElementById("telefono").value;

                $.post('../php/Modificar.php', {ID:ID, num: Numero, nom: Nombre, sem: Semestre, car: Carrera, esp: Especialidad, est: EstadoCarrera, cor: Correo, tel: Telefono}, function (data) {

                    swal("Accion completada", "se ha modificado correctamente", "success");
                    refrescar(data);
                }, 'json');
       
       
            })
    


    
    
    
    
    
    
    function refrescar(objeto) {

        console.log(objeto);
        
        $('#ID').val(objeto.ID);
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
