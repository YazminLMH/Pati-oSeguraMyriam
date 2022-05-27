function cargar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            document.getElementById("Cabeza").innerHTML = this.responseText;

        }
    };
    xhttp.open("GET","datos.txt",false);//false sincrono TRUE asincrono
    xhttp.send();
}
let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);