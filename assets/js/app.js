// contenedor principal
var contenedor = document.getElementsByClassName("base")[0];

// Caja 1
var rojo = document.createElement('div');
var morado = document.createElement('div');
var amarillo = document.createElement('div');

rojo.setAttribute("class", "box-uno");
morado.setAttribute("class", "box-dos");
amarillo.setAttribute("class", "box-tres");

rojo.appendChild(morado);
morado.appendChild(amarillo);
contenedor.appendChild(rojo);

// caja 2
var azul = document.createElement('div');
var negro = document.createElement('div');
var verde = document.createElement('div');

azul.setAttribute("class", "box-cuatro");
negro.setAttribute("class", "box-cinco");
verde.setAttribute("class", "box-seis");

azul.appendChild(negro);
azul.appendChild(verde);
contenedor.appendChild(azul);
