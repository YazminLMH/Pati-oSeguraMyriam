## Proceso de captura y propagación (bubbling) de los eventos en Javascript.

***
Hay un orden de activacion de la propagacion de eventos.

##### Fase 1 : Captura de eventos
La captura de eventos es la primer fase ya que en esta se activa un evento (el evento captura), se propaga  el primero a traves del evento padre , el cual vendría siendo el objeto de *window*, seguido de *document* , y por consiguiente el *html* , y luego los demas elementos internos. Y baja hasta que llega al evento en el que se hizo clic. 

##### Fase 2: Burbujeo de eventos o propagacion 
Este evento comienza desde el evento al que se dio el clic y se propaga hasta que llega al elemento padre superior nuevamente  

La propagacion ocurre cuando un evento ocurre en un elemento y este, primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así sucesivamente.
Tambien los suelen llamar burbuja ya que se van "expandiendo" los eventos uno por uno

![Imagen](C:\wamp64\www\Pati-oSeguraMyriam\Parcial 2\EventosJS)
en la figura anterior se puede apreciar mucho mejor la definicion de propagacion  

