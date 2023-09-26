import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { CSSObject } from '@emotion/react';

import { colors, links, pageWrap, position, typography } from '@scripts/theme';

import { teamDetails, teamDetailsEn } from '@mocks/index';

import PageTitle from '@components/PageTitle';
import Carousel from '@components/common/Carousel';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';
import mailIconURL from '@icons/mail.svg';
import { useMedia } from '@scripts/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const TeamDetail = () => {
  const { query, locale, locales } = useRouter();
  const { t } = useTranslation();
  const detailInfo = useMemo(
    () => (locale === locales?.[0] ? teamDetails : teamDetailsEn).find(detail => detail.id === query.id),
    [locale, locales, query.id]
  );
  const { tablet, tabletLg } = useMedia();

  const blockCSS: CSSObject = {
    marginBottom: '24px',
    span: {
      ...typography.h5,
      display: 'inline-block',
      marginBottom: '8px',
    },
    p: {
      ...typography.txt,
      color: colors.gray700,
      marginBottom: '8px',
    },
    ul: {
      margin: 0,
      ...typography.txt,
      color: colors.gray700,
      listStyle: 'disc',
      marginLeft: '24px',
      li: {
        marginBottom: '8px',
        '&::before': {
          display: 'none',
        },
      },
    },
  };

  return (
    <main css={{ width: '100%', marginTop: '16px', marginBottom: '72px' }}>
      {detailInfo && (
        <>
          <div css={{ ...pageWrap, marginBottom: '16px' }}>
            <Link href={`/team#${detailInfo.id}`} passHref>
              <a
                css={{
                  ...links.blue,
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                }}
              >
                <ArrowIcon css={{ marginRight: '10px', transform: 'rotate(-90deg)' }} /> {t('Назад')}
              </a>
            </Link>
          </div>
          <PageTitle
            title={detailInfo.name}
            css={{ marginBottom: '40px' }}
            cssInner={{ paddingTop: '16px', paddingBottom: '16px', h1: { marginBottom: 0 } }}
            cssTitle={{ [tabletLg]: { fontSize: '32px', lineHeight: '44px' } }}
          />
          <div
            css={{
              ...pageWrap,
              display: 'grid',
              gridTemplate: 'auto / 224px 1fr',
              marginTop: '24px',
              gap: 40,
              [tablet]: {
                gridTemplate: 'auto / 1fr',
              },
            }}
          >
            <div
              css={{
                width: '100%',
                display: 'grid',
                alignItems: 'start',
              }}
            >
              <div css={{ ...position.center, flexDirection: 'column' }}>
                <div
                  css={{
                    ...position.center,
                    flexDirection: 'column',
                    [tabletLg]: { display: 'flex', justifyContent: 'center' },
                  }}
                >
                  <Image src={detailInfo.img} width={224} height={323} objectFit="cover" />

                  <div
                    css={{
                      marginTop: '16px',
                      marginBottom: '16px',
                      width: '100%',
                      ...detailInfo.degreeCSS,
                      ...((detailInfo.id === 'barshevskiy' || detailInfo.id === 'barkalova') && {
                        [tabletLg]: { textAlign: 'center' },
                      }),
                    }}
                  >
                    <p
                      css={{
                        color: colors.gray700,
                        marginBottom: 0,
                        fontWeight: 'bold',
                      }}
                    >
                      {detailInfo.position}
                    </p>
                    {detailInfo.degree &&
                      detailInfo.degree.map(degree => (
                        <p
                          key={degree}
                          css={{
                            color: colors.gray700,
                            marginBottom: 0,
                            fontWeight: 'bold',
                          }}
                        >
                          {degree}
                        </p>
                      ))}
                  </div>

                  {detailInfo.email && (
                    <Link href={`mailto:${detailInfo.email}`} passHref>
                      <a
                        css={{
                          ...links.blue,
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '24px',
                          width: '100%',
                        }}
                      >
                        <div css={{ width: '24px', height: '24px', marginRight: '14px' }}>
                          <Image src={mailIconURL} width="24px" height="24px" />
                        </div>
                        {detailInfo.email}
                      </a>
                    </Link>
                  )}

                  {detailInfo.revardsIcons && (
                    <Carousel
                      css={{ maxWidth: '200px', width: '100%' }}
                      smallArrows
                      pagination={false}
                      slidesPerView={3}
                      spaceBetween={1}
                      breakpoints={{
                        900: {
                          slidesPerView: 3,
                          spaceBetween: 1,
                        },
                      }}
                    >
                      {detailInfo.revardsIcons.map(iconData => (
                        <Image
                          key={iconData.url}
                          css={{ position: 'relative', width: '50px' }}
                          src={iconData.url}
                          width={iconData.width}
                          height={iconData.height}
                        />
                      ))}
                    </Carousel>
                  )}
                </div>
              </div>
            </div>

            <div>
              {detailInfo.experienceHTML && <div css={blockCSS}>{detailInfo.experienceHTML}</div>}
              {detailInfo.revardsHTML && (
                <div css={blockCSS}>
                  <span>{t('Награды')}</span>
                  {detailInfo.revardsHTML}
                </div>
              )}
              {detailInfo.practicesHTML && (
                <div css={blockCSS}>
                  <span>{t('Специализация')}</span>
                  {detailInfo.practicesHTML}
                </div>
              )}
              {detailInfo.mediaHTML && (
                <div css={blockCSS}>
                  <span>{t('Публикации')}</span>
                  {detailInfo.mediaHTML}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async (context: { params: { id: string }; locale: string }) => {
  const {
    params: { id },
    locale,
  } = context;

  const detailInfo = teamDetails.find(detail => detail.id === id);

  return !detailInfo
    ? { notFound: true }
    : {
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
        },
      };
};

export default TeamDetail;
