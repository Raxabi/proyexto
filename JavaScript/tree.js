/*
// Inicializamos una escena con three.js
const newthree = new THREE.Scene();
const camera = new THREE.perspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Inicializamos el renderizador WebGL
const film = new THREE.WebGLRender();
film.setSize(window .innerHeight, window.innerWidth);
document.body.appendChild(film.domElement);

//\\//\\
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 660066 });
const cube = new THREE.Mesh( geometry, material );
newthree.add();
view.camera.z = 5
function render() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    film.render(newthree, camera)
};
render();*/