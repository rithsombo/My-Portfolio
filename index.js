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
setInterval(showSlides, 4000);
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

const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.TorusGeometry(1, 0.3, 64, 200);
const material = new THREE.MeshPhongMaterial({
  color: 0xff69b4,
  wireframe: false,
  shininess: 100,
});
const donut = new THREE.Mesh(geometry, material);
scene.add(donut);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

window.addEventListener("resize", onWindowResize, false);
animate();
