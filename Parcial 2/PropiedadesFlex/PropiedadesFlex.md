#  Propiedades flexbox  
El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.  
  
 Un área del documento que contiene un flexbox es llamada contendedor flex. Para crear un contenedor flex, establecemos la propiedad del área del contenedor display como flex o inline-flex. Tan pronto como hacemos esto, los hijos directos de este contenedor se vuelven ítems flex 


## -Flex-Items



| #            |  Propiedad   | Que hace            | Valores      |
|--------------|:------------:|:-------------------:|-------------:|
|          1   |   order      | Especifica  el orden de los elementos flexibles. El primer elemento flexible del codigo no tiene que aparecer como el primer elemento del diseño.                | su valor determinado es 0             |
|          2   | flex-grow    |Especifica cuanto crecera un elemento flexible en relacion con el resto de los elementos flexibles                     |su valor determinado es 0 |              |
|          3   | flex-shrink  |Especifica cuanto se encogera un elemento flexible en relacion con el resto de los elementos flexibles                      |       su valor determinado es 1       |
|    4         | flex-basis   |Especifica la longitud inicial de un elemento flexible    |              |
|    5         | flex         |Es una propiedad abreviada para las propieddes flex-grow, flex-shrink y flex-basis                     |              |
|    6         | align-self   |Especifica la alineacion del elemento seleccionado dentro del contenedor flexible, anula la alineacion predetermniada establecida por la propiedad align-items del contenedor                      |              |

## -Flex-container

| #            |  Propiedad   | Que hace            | Valores      |
|--------------|:------------:|:-------------------:|-------------:|
|          1   |flex-direction |Define en que direccion el contenedor quiere aplicar los elementos flexibles         | ---           |
|          2   | flex-wrap    |Especifica si los elementos flexibles deben ajustarse o no    | ---  |              |
|          3   | flex-flow  |Es una propiedad abreviada para establecer las propiedades de direccion flexible y envoltura flexible    |     ---      |
|    4         | justify-content   |La propiedad de justificar el contenido se utiliza para alinear los elementos flexibles, como su nombre lo dice los justifica    |     ---         |
|    5         | align-items         |Alinea los elementos flexibles                      |        ---      |
|    6         | align-content   |es usada para alinear las lineas flexibles                  |     ---         |