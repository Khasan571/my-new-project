import { useEffect, useRef } from 'react';
import './EnergyHelix.css';

const EnergyHelix = () => {
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
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
        this.growing = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.7) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.1) this.growing = true;
        }

        if (this.x < 0 || this.x > canvas.offsetWidth ||
            this.y < 0 || this.y > canvas.offsetHeight) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `rgba(14, 165, 233, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Draw helix
    const drawHelix = () => {
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const amplitude = 80;
      const frequency = 0.02;
      const helixHeight = 300;
      const points = 100;

      // Draw two strands
      for (let strand = 0; strand < 2; strand++) {
        const offset = strand * Math.PI;

        ctx.beginPath();
        ctx.strokeStyle = strand === 0
          ? 'rgba(14, 165, 233, 0.6)'
          : 'rgba(6, 182, 212, 0.6)';
        ctx.lineWidth = 2;

        for (let i = 0; i <= points; i++) {
          const t = i / points;
          const y = centerY - helixHeight / 2 + t * helixHeight;
          const angle = t * Math.PI * 4 + time * 0.5 + offset;
          const x = centerX + Math.sin(angle) * amplitude;
          const z = Math.cos(angle);

          // Depth-based opacity
          const opacity = 0.3 + (z + 1) * 0.35;
          ctx.strokeStyle = strand === 0
            ? `rgba(14, 165, 233, ${opacity})`
            : `rgba(6, 182, 212, ${opacity})`;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          // Draw connecting lines between strands at intervals
          if (i % 10 === 0 && strand === 0) {
            const x2 = centerX + Math.sin(angle + Math.PI) * amplitude;

            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 + (z + 1) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y);
            ctx.stroke();

            // Draw node points
            ctx.beginPath();
            ctx.arc(x, y, 3 + (z + 1) * 2, 0, Math.PI * 2);
            const nodeGradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
            nodeGradient.addColorStop(0, `rgba(14, 165, 233, ${0.8 + z * 0.2})`);
            nodeGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
            ctx.fillStyle = nodeGradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x2, y, 3 + (z + 1) * 2, 0, Math.PI * 2);
            const nodeGradient2 = ctx.createRadialGradient(x2, y, 0, x2, y, 6);
            nodeGradient2.addColorStop(0, `rgba(6, 182, 212, ${0.8 - z * 0.2})`);
            nodeGradient2.addColorStop(1, 'rgba(6, 182, 212, 0)');
            ctx.fillStyle = nodeGradient2;
            ctx.fill();

            ctx.beginPath();
            ctx.strokeStyle = strand === 0
              ? `rgba(14, 165, 233, ${opacity})`
              : `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.moveTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Central glow
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 150
      );
      glowGradient.addColorStop(0, 'rgba(14, 165, 233, 0.1)');
      glowGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
      glowGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw helix
      drawHelix();

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="energy-helix">
      <canvas ref={canvasRef} className="helix-canvas" />

      {/* Additional CSS-based effects */}
      <div className="helix-glow"></div>
      <div className="energy-ring ring-1"></div>
      <div className="energy-ring ring-2"></div>
      <div className="energy-ring ring-3"></div>

      {/* Floating orbs */}
      <div className="energy-orb orb-1"></div>
      <div className="energy-orb orb-2"></div>
      <div className="energy-orb orb-3"></div>
      <div className="energy-orb orb-4"></div>
    </div>
  );
};

export default EnergyHelix;
