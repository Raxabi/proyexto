/* Animacion del principio de la página */

const mensajeria = document.getElementById("fdivsectionApp");
const funcionamiento = document.getElementById("ssectionFunctionApp");
const aportar = document.getElementById("tdivsectionAport");

window.addEventListener('load', () => {
    mensajeria.style.animation = "fade 2s ease-out";
});

window.addEventListener('load', () => {
    $(funcionamiento).fadeIn(1000);
});

window.addEventListener('load', () => {
    $(aportar).fadeIn(1700);
});