import { FC } from 'react';
import { CSSObject } from '@emotion/react';

import Button from '@components/common/Button';

import { colors, pageWrap, pageWrapS, position, typography } from '@scripts/theme';

import bannerURL from '@images/banner.jpg';

interface IBannerProps {
  css?: CSSObject;
  className?: string;
}

const Banner: FC<IBannerProps> = ({ css, className }) => {
  const bannerCSS: CSSObject = {
    ...pageWrapS,
    ...position.start,
    padding: '0',
    height: '600px',
    backgroundImage: `url(${bannerURL.src})`,
    ...css,
  };

  const bannerContentCSS: CSSObject = {
    width: '50%',
    minWidth: '510px',
    height: '100%',
    padding: '50px 0 50px 0',
    backgroundColor: colors.bannerContent,
    color: colors.white,
  };

  return (
    <div css={bannerCSS} className={className}>
      <div css={bannerContentCSS}>
        <div
          css={{
            ...pageWrap,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <p css={{ fontSize: '32px', lineHeight: '48px', color: colors.white, margin: '0' }}>
            Коллегия адвокатов города Москвы
          </p>

          <h1 css={{ color: colors.white }}>БАРЩЕВСКИЙ И ПАРТНЕРЫ</h1>

          <p css={{ marginTop: '32px', ...typography.txtMd }}>
            Наша задача - быть рядом, когда возникают правовые проблемы, всегда помогать и находить выход из любых
            ситуаций.
          </p>

          <Button css={{ marginTop: '32px', ...typography.txtBold, lineHeight: '22px' }}>Запись на консультацию</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
