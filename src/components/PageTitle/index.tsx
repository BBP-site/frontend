import { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

import { pageWrapS, position, colors, typography } from '@scripts/theme';

import ParticlesMesh from '@components/ParticlesMesh';

export interface IPageTitleProps {
  title: string;
  css?: CSSObject;
  children?: ReactNode;
}

const PageTitle: FC<IPageTitleProps> = ({ title, children, css, ...props }) => (
  <section
    css={{
      ...pageWrapS,
      ...position.spaceBetween,
      backgroundColor: colors.blueDark,
      color: colors.white,
      padding: '48px 24px 48px 0',
      ...css,
    }}
    {...props}
  >
    <div css={{ display: 'flex' }}>
      <div css={{ backgroundColor: colors.blue, width: '74px', height: '64px', marginRight: '16px' }} />
      <div>
        <h1 css={{ ...typography.h2, color: colors.white, marginBottom: '16px' }}>{title}</h1>
        <div css={{ ...typography.txt }}>{children}</div>
      </div>
    </div>
    <ParticlesMesh css={{ marginLeft: '48px' }} />
  </section>
);

export default PageTitle;
