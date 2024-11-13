const menuBars = document.getElementById("menu-bars");
const slides = document.querySelectorAll(".slide");
const overLay = document.getElementById("overlay");

//menu bars
function toggleNav() {
  menuBars.classList.toggle("change");
  overLay.classList.toggle("overlay-active");
  if (overLay.classList.contains("overlay-active")) {
    overLay.classList.remove("overlay-slide-right");
    overLay.classList.add("overlay-slide-left");
  } else {
    overLay.classList.remove("overlay-slide-left");
    overLay.classList.add("overlay-slide-right");
  }
}
menuBars.addEventListener("click", toggleNav);
overLay.addEventListener("click", toggleNav);

//image slide
let slideIndex = 0;
function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(showSlides, 3000);
showSlides();
// scroll to section
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default jump
    // Get the target section
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    // Scroll to the section smoothly
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// Cube
const canvas = document.getElementById("3d-canvas");
const scene = new THREE.Scene();
// Set up a larger camera position and adjust the aspect ratio
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
camera.position.z = 3; // Move the camera closer to make the cube appear larger
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
const geometry = new THREE.BoxGeometry(2, 2, 2); // Increase size of the cube (2x2x2)
const material = new THREE.MeshBasicMaterial({
  color: 0xafffff,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
function onWindowResize() {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}
window.addEventListener("resize", onWindowResize, false);
animate();
