import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: p5.Color;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    // Only create the p5 instance once
    if (containerRef.current && !p5Instance.current) {
      const sketch = (p: p5) => {
        let particles: Particle[] = [];
        
        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          
          // Create particles
          for (let i = 0; i < 50; i++) {
            particles.push({
              x: p.random(p.width),
              y: p.random(p.height),
              size: p.random(3, 8),
              speedX: p.random(-0.5, 0.5),
              speedY: p.random(-0.5, 0.5),
              color: p.color(236, 72, 153, p.random(10, 30))
            });
          }
        };
        
        p.draw = () => {
          p.clear();
          
          for (let i = 0; i < particles.length; i++) {
            let particle = particles[i];
            
            p.noStroke();
            p.fill(particle.color);
            p.ellipse(particle.x, particle.y, particle.size);
            
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around
            if (particle.x < 0) particle.x = p.width;
            if (particle.x > p.width) particle.x = 0;
            if (particle.y < 0) particle.y = p.height;
            if (particle.y > p.height) particle.y = 0;
          }
        };
        
        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
      };

      p5Instance.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="p5-canvas" id="p5-container" />;
};

export default ParticleBackground;
