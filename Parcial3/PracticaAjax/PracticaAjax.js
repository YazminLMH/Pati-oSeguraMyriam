function ajaxFunction() {

    // Creamos el objeto XMLHttpRequest para comunicarnos con el servidor
    //-------------------------------------------------------------------
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();

    // Funcion para procesar la respuesta del servidor
    //-------------------------------------------------
    ajaxRequest.onreadystatechange = function ()
     {
       { if (ajaxRequest.readyState == 4)                                // La respuesta esta lista?
        document.getElementById("Cabeza").innerHTML = "Holi uwu" // Obtenemos la respuesta
     }
    };

    ajaxRequest.open("GET", "PracticaAjax.php", true);  //Configurar la solicitud
    ajaxRequest.send();                                  //Enviamos la solicitud
}