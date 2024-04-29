import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Design : React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <div className="w-full h-full">
      <Particles
        className="w-full h-screen"
    
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

               
              },
              // resize: true,
            },
            modes: {
              push: {
                quantity: 20,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width:1,
            },
            collisions: {
              enable: true,
            },
            move: {
              // directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                // area: 1200,
              },
              value: 200,
            },
            opacity: {
              value:0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Design;
