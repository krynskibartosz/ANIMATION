let scene, geometrie, renderer, material, mesh2, camera, light;

// @Init Lance le prog
const Init = () => {

    scene = new THREE.Scene();



        // 1 = le point le plus proche / 10000= point le plus éloigner de la caméra
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    material = new THREE.MeshToonMaterial();

    geometrie = new THREE.BoxGeometry(5, 5, 5);

    mesh2 = new THREE.Mesh(geometrie, material)
    scene.add(mesh2)

    light = new THREE.AmbientLight(0xfff, 1);
    scene.add(light);
}



const Animate = () => {
    requestAnimationFrame(Animate);
    let date = Date.now() * .005
    mesh2.rotation.z += .03
    mesh2.rotation.y += .03
    mesh2.rotation.x += .2
    mesh2.scale.z += .03
    renderer.render(scene, camera)
    mesh2.position.z = Math.cos(date * .1) * 30
    mesh2.position.y = Math.cos(date * .1) * 30
    mesh2.position.x = Math.cos(date * .1) * 30
}
Init()
Animate()