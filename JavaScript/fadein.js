/* Animacion del principio de la página */

const mensajeria = document.getElementById("divsectionApp");
const funcionamiento = document.getElementById("divsectionFunctionApp");
const mobileApp = document.getElementById("divsectionMobile");
const aportar = document.getElementById("divsectionAport");

window.addEventListener('load', () => {
    mensajeria.style.animation = "fade 2s ease-out";
});

window.addEventListener('load', () => {
    $(funcionamiento).fadeIn(1000);
});

window.addEventListener('load', () => {
    $(mobileApp).fadeIn(1200);
});

window.addEventListener('load', () => {
    $(aportar).fadeIn(1500);
});