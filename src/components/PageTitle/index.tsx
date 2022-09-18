import { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

import { pageWrapS, position, colors, typography, pageWrap } from '@scripts/theme';

import ParticlesMesh from '@components/ParticlesMesh';
import { useMedia } from '@scripts/hooks';

export interface IPageTitleProps {
  title: string;
  css?: CSSObject;
  cssInner?: CSSObject;
  children?: ReactNode;
}

const PageTitle: FC<IPageTitleProps> = ({ title, children, css, cssInner, ...props }) => {
  const { tabletLg, tabletLgMin } = useMedia();

  return (
    <section
      css={{
        backgroundColor: colors.blueDark,
        [tabletLg]: { ...pageWrap },
        ...css,
      }}
      {...props}
    >
      <div
        css={{
          ...pageWrapS,
          ...position.spaceBetween,
          padding: '48px 24px 48px 0',
          color: colors.white,
          ...cssInner,
          [tabletLg]: { paddingTop: '24px', paddingBottom: '24px' },
        }}
      >
        <div css={{ display: 'flex' }}>
          <div
            css={{
              backgroundColor: colors.blue,
              minWidth: '74px',
              height: '64px',
              marginRight: '16px',
              [tabletLg]: { display: 'none' },
            }}
          />
          <div>
            <ParticlesMesh width={10} height={2} css={{ marginBottom: '16px', [tabletLgMin]: { display: 'none' } }} />
            <h1
              css={{
                ...typography.h2,
                color: colors.white,
                marginBottom: '16px',
                [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '4px' },
              }}
            >
              {title}
            </h1>
            <div css={{ ...typography.txt }}>{children}</div>
          </div>
        </div>
        <ParticlesMesh css={{ marginLeft: '48px', [tabletLg]: { display: 'none' } }} />
      </div>
    </section>
  );
};

export default PageTitle;
