import { useEffect, useRef } from 'react';
import './NanoNetwork.css';

const NanoNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      initParticles();
    };

    // Draw gradient background
    const drawBackground = () => {
      // Main solid background - white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Subtle glow spots
      const glow1 = ctx.createRadialGradient(
        canvas.offsetWidth * 0.2, canvas.offsetHeight * 0.5, 0,
        canvas.offsetWidth * 0.2, canvas.offsetHeight * 0.5, 300
      );
      glow1.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      glow1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const glow2 = ctx.createRadialGradient(
        canvas.offsetWidth * 0.8, canvas.offsetHeight * 0.5, 0,
        canvas.offsetWidth * 0.8, canvas.offsetHeight * 0.5, 250
      );
      glow2.addColorStop(0, 'rgba(29, 78, 216, 0.06)');
      glow2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;

        if (this.x < 0) this.x = canvas.offsetWidth;
        if (this.x > canvas.offsetWidth) this.x = 0;
        if (this.y < 0) this.y = canvas.offsetHeight;
        if (this.y > canvas.offsetHeight) this.y = 0;
      }

      draw() {
        const pulse = 0.6 + Math.sin(this.pulsePhase) * 0.4;
        const alpha = this.opacity * pulse;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 78, 216, ${alpha})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.15;
            ctx.strokeStyle = `rgba(29, 78, 216, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      drawBackground();
      drawConnections();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="nano-network">
      <canvas ref={canvasRef} className="nano-canvas" />
    </div>
  );
};

export default NanoNetwork;
