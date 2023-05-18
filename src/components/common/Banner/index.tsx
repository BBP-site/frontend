import { FC } from 'react';
import { CSSObject } from '@emotion/react';

import Button from '@components/common/Button';

import { colors, pageWrap, pageWrapS, position, typography } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

import bannerURL from '@images/banner.jpg';
import { useTranslation } from 'next-i18next';

interface IBannerProps {
  css?: CSSObject;
  className?: string;
  setOpenFeedback: (value: boolean) => void;
}

const Banner: FC<IBannerProps> = ({ css, className, setOpenFeedback }) => {
  const { t } = useTranslation();
  const { mobile, tablet, tabletLg } = useMedia();

  const bannerCSS: CSSObject = {
    ...pageWrapS,
    ...position.start,
    padding: '0',
    height: '500px',
    backgroundImage: `url(${bannerURL.src})`,
    [tabletLg]: {
      height: '423px',
    },
    [tablet]: {
      backgroundPosition: '42% 0',
    },
    ...css,
  };

  const bannerContentCSS: CSSObject = {
    width: '50%',
    minWidth: '510px',
    height: '100%',
    padding: '50px 0 50px 0',
    backgroundColor: colors.bannerContent,
    color: colors.white,
    [tabletLg]: {
      width: '60%',
      minWidth: 'auto',
    },
    [tablet]: {
      width: '100%',
    },
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
          <p
            css={{
              fontSize: '28px',
              lineHeight: '48px',
              color: colors.white,
              margin: '0',
              [tabletLg]: { ...typography.txt },
            }}
          >
            {t('Коллегия адвокатов города Москвы')}
          </p>

          <h1 css={{ color: colors.white, [tabletLg]: { ...typography.h3, fontSize: '47px', color: colors.white } }}>
            БАРЩЕВСКИЙ И ПАРТНЕРЫ
          </h1>

          <p css={{ fontSize: '20px', [tabletLg]: { ...typography.txtSm, marginBottom: '24px' } }}>
            {t(
              'Наша задача - быть рядом, когда возникают правовые проблемы, всегда помогать и находить выход из любых ситуаций.'
            )}
          </p>

          <Button
            onClick={() => setOpenFeedback(true)}
            css={{
              marginTop: '32px',
              ...typography.txtBold,
              lineHeight: '22px',
              [tabletLg]: { marginTop: '24px' },
              [mobile]: { width: '100%' },
            }}
          >
            Запись на консультацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
