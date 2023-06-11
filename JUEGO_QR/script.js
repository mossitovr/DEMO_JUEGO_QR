// Obtener los elementos de los botones
var boton1 = document.getElementById('boton1');
var boton2 = document.getElementById('boton2');
var boton3 = document.getElementById('boton3');

// Agregar eventos de clic a los botones
boton1.addEventListener('click', reproducirPista1);
boton2.addEventListener('click', reproducirPista2);
boton3.addEventListener('click', reproducirPista3);

// Funciones para reproducir las pistas de audio
function reproducirPista1() {
    var audio = new Audio('pista1.mp3'); // Ruta de la pista de audio 1
    audio.play();
}

function reproducirPista2() {
    var audio = new Audio('pista2.mp3'); // Ruta de la pista de audio 2
    audio.play();
}

function reproducirPista3() {
    var audio = new Audio('pista3.mp3'); // Ruta de la pista de audio 3
    audio.play();
}

