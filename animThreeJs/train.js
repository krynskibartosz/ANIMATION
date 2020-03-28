let scene, geometrie, renderer, material, mesh, camera, light;

const Init = () => {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    material = new THREE.MeshLambertMaterial();

    geometrie = new THREE.BoxGeometry(5, 5, 5);

    mesh = new THREE.Mesh(geometrie, material)
    scene.add(mesh)

    light = new THREE.AmbientLight(0xfff, 1);
    scene.add(light);
}

const Animate = () => {
    requestAnimationFrame(Animate);
    let date = Date.now() * .005
    mesh.rotation.z += .03
    // mesh.rotation.y += .03
    mesh.rotation.x += .02
    mesh.scale.z += .01
    renderer.render(scene, camera)
    mesh.position.z = Math.cos(date *.1)* 30
    mesh.position.y = Math.cos(date *.1)* 30
    mesh.position.x = Math.cos(date *.1)* 30
}

Init()
Animate()