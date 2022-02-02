/* Page Loader JavaScript */

let loader = document.getElementById('loader');
let postLoad = document.getElementById('fdiv');

/* Adding a listener to show and hide the bootstrap spinner and body page */
window.addEventListener('load', () => {
    $(loader).fadeOut(777);
    $(postLoad).css({display: 'block'});
});