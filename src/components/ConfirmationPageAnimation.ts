import { useMantineTheme } from '@mantine/core';

function initBackgroundAnimation() {
  const theme = useMantineTheme();
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.zIndex = '-1';
  canvas.style.top = '0';
  canvas.style.left = '0';
  document.body.appendChild(canvas);

  const ctx: CanvasRenderingContext2D = canvas.getContext(
    '2d'
  ) as CanvasRenderingContext2D;
  let particles: Particle[] = [];

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;

    constructor(
      x: number,
      y: number,
      size: number,
      speedX: number,
      speedY: number
    ) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.05;
    }

    draw() {
      ctx.fillStyle = theme.colors.blue[2];
      ctx.strokeStyle = theme.colors.blue[2];
      ctx.lineWidth = 2;
      ctx.beginPath();
      const spikes = 5;
      const outerRadius = this.size;
      const innerRadius = this.size / 1.9;
      const step = (Math.PI * 2) / spikes;

      const startingAngle = -Math.PI / 2;

      ctx.moveTo(
        this.x + Math.cos(startingAngle) * outerRadius,
        this.y + Math.sin(startingAngle) * outerRadius
      );

      for (let i = 0; i < spikes * 2; i++) {
        let angle = startingAngle + (step * i) / 2;
        let radius = i % 2 === 0 ? outerRadius : innerRadius;

        ctx.lineTo(
          this.x + Math.cos(angle) * radius,
          this.y + Math.sin(angle) * radius
        );
      }

      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animateParticles);
  }

  function createParticle() {
    const posX = canvas.width / 2;
    const posY = canvas.height / 2;

    const size = 22;
    const speedX = (Math.random() - 0.5) * 4;
    const speedY = (Math.random() - 0.5) * 4;

    particles.push(new Particle(posX, posY, size, speedX, speedY));
  }

  resizeCanvas();
  animateParticles();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < 55; i++) {
    createParticle();
  }
}

export default initBackgroundAnimation;
