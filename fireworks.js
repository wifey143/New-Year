const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resize();
window.addEventListener("resize", resize);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];

    const count = 80;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = random(2, 6);
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: random(40, 80),
        color: `hsl(${random(0, 360)}, 100%, 60%)`
      });
    }
  }

  update() {
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      p.life--;
    });
    this.particles = this.particles.filter(p => p.life > 0);
  }

  draw() {
    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(
      new Firework(
        random(100, canvas.width - 100),
        random(100, canvas.height / 2)
      )
    );
  }

  fireworks.forEach(f => {
    f.update();
    f.draw();
  });

  fireworks = fireworks.filter(f => f.particles.length > 0);

  requestAnimationFrame(animate);
}

animate();
