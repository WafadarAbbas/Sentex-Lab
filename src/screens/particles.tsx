import React, { useEffect, useRef } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';


async function loadParticles(options: any) {
  await loadSlim(tsParticles);

  await tsParticles.load({ id: 'tsparticles', options });
}

const Particles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const configs = {
      particles: {
        number: { value: 400, density: { enable: true, value_area: 500 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 4 },
          image: { src: 'img/github.svg', width: 100, height: 100 }
        },
        opacity: {
          value: 0.2,
          random: false,
          animation: { enable: false, speed: 1, minimumValue: 0.1, sync: false }
        },
        size: {
          value: 1,
          random: true,
          animation: { enable: false, speed: 80, minimumValue: 0.1, sync: false }
        },
        lineLinked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          outMode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          //  onClick: { enable: true, mode: 'repulse' },
          resize: true
        },
        modes: {
          grab: { distance: 400, lineLinked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particlesNb: 4 },
          remove: { particlesNb: 2 }
        }
      },
      retina_detect: true
    };

    const loadAndDestroyParticles = async () => {
      if (particlesRef.current) {
        await loadParticles(configs);
      }
    };

    loadAndDestroyParticles();

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div
      ref={particlesRef}
      id="tsparticles"
      style={{ position: 'relative' }}
    />
  );
};

export default Particles;