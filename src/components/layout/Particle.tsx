'use client';

import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

export const Particle = () => {
  const init = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        particles: {
          number: {
            value: 19,
            density: {
              enable: false,
              value_area: 800
            }
          },
          color: {
            value: '#07da63'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 7
            }
          },
          opacity: {
            value: 0.4,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3.5,
            random: true,
            anim: {
              enable: false,
              speed: 4.786101162224897,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};
