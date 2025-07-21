const images = [
  'img/1 (1).jpg',
  'img/1 (2).jpg',
  'img/1 (3).jpg',
  'img/1 (4).jpg',
  'img/1 (5).jpg',
  'img/1 (6).jpg',
  'img/1 (7).jpg',
  'img/1 (8).jpg',
  'img/1 (9).jpg',
  'img/1 (10).jpg',
  'img/1 (12).jpg',
  'img/1 (12).jpg',
];

let index = 0;
const carouselImage = document.getElementById('carousel-image');

setInterval(() => {
  index = (index + 1) % images.length;
  carouselImage.src = images[index];
}, 2000);

// Fogos de artifício simples com canvas
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = (Math.random() * canvas.height) / 2;
  const colors = ['#ff4b5c', '#ffcd3c', '#4a90e2', '#50fa7b', '#bd93f9'];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: x,
      y: y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 1,
      radius: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    const vx = Math.cos(p.angle) * p.speed;
    const vy = Math.sin(p.angle) * p.speed;

    p.x += vx;
    p.y += vy;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });
}

setInterval(createFirework, 1500);
function animate() {
  updateParticles();
  requestAnimationFrame(animate);
}
animate();
