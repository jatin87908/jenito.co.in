const starsCanvas = document.createElement("canvas");
starsCanvas.id = "stars-canvas";
document.body.prepend(starsCanvas);
const ctx = starsCanvas.getContext("2d");
let stars = [];
function resizeCanvas() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
function createStars() {
  stars = [];
  const starsCount = Math.min(200, Math.floor(window.innerWidth * window.innerHeight / 1000));
  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * starsCanvas.width,
      y: Math.random() * starsCanvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.5
    });
  }
}
createStars();
function animateStars() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.globalAlpha = star.opacity;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > starsCanvas.height) {
      star.y = 0;
      star.x = Math.random() * starsCanvas.width;
    }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateStars);
}
animateStars();
// Smooth Scroll logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
