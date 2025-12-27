const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Global variables
const fireworks = [];
const fireNumber = 16;  // particles per explosion
const range = 80;        // life range for particles

// Random color generator
function randColor() {
  return `hsl(${Math.random() * 360}, 100%, 60%)`;
}

// Create circle firework
function makeCircleFirework(fire) {
  const color = randColor();
  const velocity = Math.random() * 2 + 6;
  const max = fireNumber;

  for (let i = 0; i < max; i++) {
    const rad = (i * Math.PI * 2) / max;

    fireworks.push({
      x: fire.x,
      y: fire.y,
      size: Math.random() + 1.5,
      fill: color,
      vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
      vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
      ay: 0.04,
      life: Math.round((Math.random() * range) / 2) + range / 2
    });
  }

  return color;
}

// Update fireworks
function updateFireworks() {
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const f = fireworks[i];
    f.x += f.vx;
    f.y += f.vy;
    f.vy += f.ay;
    f.life--;

    if (f.life <= 0) {
      fireworks.splice(i, 1);
    }
  }
}

// Draw fireworks
function drawFireworks() {
  fireworks.forEach(f => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
    ctx.fillStyle = f.fill;
    ctx.fill();
  });
}

// Main animation loop
function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)"; // trail effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Randomly trigger fireworks
  if (Math.random() < 0.05) {
    makeCircleFirework({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height / 2
    });
  }

  updateFireworks();
  drawFireworks();

  requestAnimationFrame(animate);
}

// Start animation
animate();
