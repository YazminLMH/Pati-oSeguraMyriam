$(document).ready(function () {
    $('#btnCambiarHeaderP').click(function () {

        let promesa = new Promise(function (resolve, reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function () {
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
                }
            };
            solicitud.open("GET", "getHeader.txt", true);
            solicitud.send();

        });

        promesa.then(function (value) { document.getElementById("Cabeza").innerHTML = value; });


    });
})