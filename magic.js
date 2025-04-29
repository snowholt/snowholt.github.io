// Magic animation for theme change
class MagicParticle {
  constructor(x, y, size, color, speed, angle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.opacity = 1;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 5;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.opacity -= 0.01;
    this.rotation += this.rotationSpeed;
    return this.opacity > 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.globalAlpha = this.opacity;
    
    // Draw a star/sparkle
    ctx.fillStyle = this.color;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const outerRadius = this.size;
      const innerRadius = this.size / 2;
      
      const outerX = Math.cos(((i * 72) - 18) * Math.PI / 180) * outerRadius;
      const outerY = Math.sin(((i * 72) - 18) * Math.PI / 180) * outerRadius;
      
      const innerX = Math.cos(((i * 72) + 18) * Math.PI / 180) * innerRadius;
      const innerY = Math.sin(((i * 72) + 18) * Math.PI / 180) * innerRadius;
      
      if (i === 0) {
        ctx.moveTo(outerX, outerY);
      } else {
        ctx.lineTo(outerX, outerY);
      }
      
      ctx.lineTo(innerX, innerY);
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
  }
}

class MagicWind {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animating = false;
    this.colors = ["#fbcfe8", "#f9a8d4", "#f472b6", "#db2777", "#be185d"];
    this.targetElement = null;
    this.callbackFn = null;
  }

  init() {
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '9999';
    this.ctx = this.canvas.getContext('2d');
    
    // Append to body when needed
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles(x, y) {
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
      const size = 1 + Math.random() * 4;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const speed = 1 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      
      this.particles.push(new MagicParticle(x, y, size, color, speed, angle));
    }
  }

  createSwirlEffect(targetElement, callback) {
    if (!targetElement) return;
    
    this.targetElement = targetElement;
    this.callbackFn = callback;
    
    if (!this.canvas) {
      this.init();
    }
    
    // Append canvas to body for animation
    document.body.appendChild(this.canvas);
    this.resizeCanvas();
    
    // Get position of clicked element
    const rect = targetElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    
    // Create initial particles
    this.createParticleTrail(startX, startY);
    
    // Start animation
    this.animating = true;
    this.animate();
    
    // Clean up after animation completes
    setTimeout(() => {
      if (this.canvas && this.canvas.parentNode) {
        document.body.removeChild(this.canvas);
      }
      if (typeof this.callbackFn === 'function') {
        this.callbackFn();
      }
    }, 1500);
  }

  createParticleTrail(startX, startY) {
    // Create particles along a path
    const numPoints = 10;
    
    // Create swirling path
    for (let i = 0; i < numPoints; i++) {
      const progress = i / numPoints;
      const angle = progress * Math.PI * 4; // Two full circles
      const radius = 50 * progress;
      
      const x = startX + Math.cos(angle) * radius;
      const y = startY + Math.sin(angle) * radius;
      
      // Create particles at this point
      this.createParticles(x, y);
      
      // Create a trail of particles across the screen in a wave pattern
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      for (let j = 0; j < 5; j++) {
        const pathX = startX + (j / 5) * screenWidth * 0.8;
        const pathY = startY + Math.sin(j + progress * Math.PI * 2) * 50;
        
        this.createParticles(pathX, pathY);
      }
    }
  }

  animate() {
    if (!this.animating) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    this.particles = this.particles.filter(particle => {
      const active = particle.update();
      if (active) {
        particle.draw(this.ctx);
      }
      return active;
    });
    
    // Continue animation if there are still particles
    if (this.particles.length > 0) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.animating = false;
    }
  }
}

// Export the MagicWind effect
window.MagicWind = new MagicWind();
