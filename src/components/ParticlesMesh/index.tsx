import { FC } from 'react';
import { CSSObject } from '@emotion/react';

import { colors } from '@scripts/theme';

export interface IParticlesMeshProps {
  css?: CSSObject;
  particlesCSS?: CSSObject;
  width?: number;
  height?: number;
}

const ParticlesMesh: FC<IParticlesMeshProps> = ({ css, particlesCSS, width = 10, height = 4, ...props }) => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 10px)',
      gridTemplateRows: 'repeat(4, 10px)',
      gap: '16px',
      ...css,
    }}
    {...props}
  >
    {[...Array(height).keys()].map(i =>
      [...Array(width).keys()].map(j => (
        <span
          key={`${i}-${j}`}
          css={{
            display: 'inline-flex',
            backgroundColor: colors.white,
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            ...particlesCSS,
          }}
        />
      ))
    )}
  </div>
);

export default ParticlesMesh;
