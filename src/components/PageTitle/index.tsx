import { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

import { colors, pageWrap, pageWrapS, position, typography } from '@scripts/theme';

import ParticlesMesh from '@components/ParticlesMesh';
import { useMedia } from '@scripts/hooks';

export interface IPageTitleProps {
  title: string;
  css?: CSSObject;
  cssInner?: CSSObject;
  cssTitle?: CSSObject;
  children?: ReactNode;
}

const PageTitle: FC<IPageTitleProps> = ({ title, children, css, cssInner, cssTitle, ...props }) => {
  const { tabletLg, tabletLgMin } = useMedia();

  return (
    <section
      css={{
        backgroundColor: colors.blueDark,
        [tabletLg]: { ...css, ...pageWrap },
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
            <ParticlesMesh width={6} height={1} css={{ marginBottom: '16px', [tabletLgMin]: { display: 'none' } }} />
            <h1
              css={[
                {
                  ...typography.h2,
                  color: colors.white,
                  marginBottom: '16px',
                  [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '4px' },
                },
                { ...cssTitle },
              ]}
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
