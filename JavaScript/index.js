/* Autowrite with JavaScript library Typed.js */

const arrayWords = [
    'Calidad',
    'Innovación',
    'Sencillez',
    'Sibani Choza',
];
/* Stating Typed and declaring object of Typed properties */
var typed = new Typed('#autoWrite', {
    strings: arrayWords,
    typeSpeed: 100,
    startDelay: 300,
    backDelay: 1500,
    backSpeed: 100,
    loop: true,
});