/* Animacion del principio de la página */

const mensajeria = document.getElementById("fdivsectionApp");
const funcionamiento = document.getElementById("sdivsectionFunctionApp");

window.addEventListener('load', () => {
    mensajeria.style.animation = "fade 2s ease-out";
});

/* window.addEventListener('load', () => {
    $(funcionamiento).fadeIn(777);
}); */