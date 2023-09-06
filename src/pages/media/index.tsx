import React, { useEffect, useMemo } from 'react';

import { useMedia } from '@scripts/hooks';
import { colors, pageWrap, time } from '@scripts/theme';
import { CARD_TYPE, MEDIA_TYPE } from '@scripts/enums/common/content-card.enum';
import { parseMediaType, parseMediaTypeQuery, parseMediaTypeQueryReverse } from '@scripts/helpers';

import withConfigContentCard, { IContentMedia } from '@components/hoc-helpers/withConfigContentCard';
import ContentCard from '@components/common/ContentCard';
import Select from '@components/common/Select';
import PageTitle from '@components/PageTitle';

import { medias } from '@mocks/index';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { E_PAGES, useCommon } from '@context/common';

const compareAB = (mediaA: IContentMedia, mediaB: IContentMedia) => {
    const mediaADaysArr = [...mediaA.date.split('.')];
    const mediaBDaysArr = [...mediaB.date.split('.')];

    const [mediaADays, mediaAMonths, mediaAYears] = mediaADaysArr

    const [mediaBDays, mediaBMonths, mediaBYears] = mediaBDaysArr

    if (+mediaAYears < +mediaBYears) return 1;
    if (+mediaAYears > +mediaBYears) {
        return -1
    } else {
        if (+mediaAMonths < +mediaBMonths) return 1;
        if (+mediaAMonths > +mediaBMonths) {
            return -1;
        } else {
            if (+mediaADays < +mediaBDays) return 1;
            if (+mediaADays > +mediaBDays) return -1;
        }
    }

    return 0;
};

const newMedias = [...medias].sort(compareAB);
const mediaTypes = [MEDIA_TYPE.ALL, ...new Set(medias.map(media => media.type))].sort();
const years = [
  'all',
  ...new Set(
    medias
      .map(media => `${media.date.substring(6, 8)}`)
      .sort()
      .reverse()
  ),
];

const Media = () => {
  const { query, replace } = useRouter();
  const { pagesHistory } = useCommon();
  const { media, year } = query;
  const { tabletLgMin, tabletLg, tablet, mobileLg } = useMedia();

  const typeFilter = useMemo(() => parseMediaTypeQueryReverse(`${media}`) || MEDIA_TYPE.ALL, [media]);
  const yearFilter = useMemo(() => year || 'all', [year]);

  useEffect(() => {
    pagesHistory.push(E_PAGES.MEDIA);
  }, []);

  const mediasCards = useMemo(() => {
    let medias = newMedias.slice();
    if (typeFilter === MEDIA_TYPE.PODCAST) medias = medias.reverse();
    return medias
      .filter(
        media =>
          (typeFilter === MEDIA_TYPE.ALL && yearFilter === 'all') ||
          (media.type === typeFilter && new RegExp(`${yearFilter}$`).test(media.date)) ||
          (media.type === typeFilter && yearFilter === 'all') ||
          (typeFilter === MEDIA_TYPE.ALL && new RegExp(`${yearFilter}$`).test(media.date))
      )
      .map(media =>
        withConfigContentCard(
          ContentCard,
          { ...media, title: parseMediaType(media.type), contentHtml: <p>{media.name}</p>, subContent: media.subName },
          CARD_TYPE.MEDIA
        )
      );
  }, [typeFilter, yearFilter]);

  return (
    <main
      css={{
        height: '100%',
        backgroundColor: colors.gray100,
        paddingBottom: '48px',
        width: '100%',
      }}
    >
      <PageTitle title="Медиа" css={{ marginBottom: '24px' }}>
        <p>
          Мы проповедуем философию, согласно которой адвокат – это не ремесленник, а фигура публичная. Потому адвокаты
          нашей Коллегии активно участвуют как в жизни юридического сообщества, так и общественной жизни страны
        </p>
      </PageTitle>
      <div css={{ ...pageWrap }}>
        <section
          css={{
            padding: '32px 40px',
            marginBottom: '24px',
            backgroundColor: colors.white,
            borderRadius: '8px',
            [tablet]: {
              flexDirection: 'column',
            },
            [mobileLg]: { padding: '32px 16px' },
          }}
        >
          <div
            css={{
              [tabletLgMin]: { display: 'none' },
              display: 'flex',
              justifyContent: 'space-between',
              [tablet]: { flexDirection: 'column' },
            }}
          >
            <div
              css={{
                flexGrow: 1,
                width: '100%',
                marginRight: '32px',
                [tablet]: { marginRight: 0, marginBottom: '32px' },
              }}
            >
              <Select
                placeholder="Все типы медиа"
                onChange={value => {
                  query.media = parseMediaTypeQuery(Number(value));
                  if (query.media === 'all') delete query.media;
                  replace({ query });
                }}
                items={mediaTypes.map(type => ({ label: parseMediaType(type), value: type }))}
              />
            </div>
            <div css={{ flexGrow: 1, width: '100%' }}>
              <Select
                placeholder="Период"
                onChange={value => {
                  query.year = `${value}`;
                  if (query.year === 'all') delete query.year;
                  replace({ query });
                }}
                items={years.map(year => ({ label: year !== 'all' ? `20${year}` : 'Все время', value: year }))}
              />
            </div>
          </div>
          <div css={{ [tabletLg]: { display: 'none' } }}>
            <div
              css={{
                display: 'flex',
                width: '100%',
                borderBottom: `1px solid ${colors.gray400}`,
                marginBottom: '32px',
              }}
            >
              {mediaTypes.map(type => (
                <div
                  key={type}
                  css={{
                    label: {
                      cursor: 'pointer',
                      marginRight: '32px',
                      fontSize: '22px',
                      lineHeight: '22px',
                      fontWeight: 600,
                      color: colors.gray600,
                      transition: `color ${time}`,
                    },
                    input: {
                      display: 'none',
                      '&:checked + label': { color: colors.blue, borderBottom: `1px solid ${colors.blue}` },
                    },
                  }}
                >
                  <input
                    type="radio"
                    name="media-type-filter"
                    value={type}
                    id={`media-type-filter-${type}`}
                    checked={typeFilter === type}
                    onChange={event => {
                      query.media = parseMediaTypeQuery(Number(event.target.value));
                      if (query.media === 'all') delete query.media;
                      replace({ query });
                    }}
                  />
                  <label htmlFor={`media-type-filter-${type}`}>{parseMediaType(type)}</label>
                </div>
              ))}
            </div>
            <div css={{ width: '100%', display: 'flex', height: 35 }}>
              <span css={{ marginRight: '16px', color: colors.gray700, whiteSpace: 'nowrap' }}>
                Смотреть за период:{' '}
              </span>
              <div css={{ display: 'flex', overflowX: 'scroll' }}>
                {years.map(year => (
                  <div
                    key={year}
                    css={{
                      label: {
                        cursor: 'pointer',
                        marginRight: '24px',
                        color: colors.gray600,
                        transition: `color ${time}`,
                      },
                      input: {
                        display: 'none',
                        '&:checked + label': { color: colors.blue },
                      },
                    }}
                  >
                    <input
                      type="radio"
                      name="media-year-filter"
                      value={year}
                      id={`media-year-filter-${year}`}
                      checked={yearFilter === year}
                      onChange={event => {
                        query.year = event.target.value;
                        if (query.year === 'all') delete query.year;
                        replace({ query });
                      }}
                    />
                    <label htmlFor={`media-year-filter-${year}`} css={{ whiteSpace: 'nowrap' }}>
                      {year !== 'all' ? `20${year}` : 'Все время'}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto',
            gridColumnGap: '25px',
            gridRowGap: '16px',
            [tabletLg]: {
              gridTemplateColumns: '1fr 1fr',
            },
            [mobileLg]: {
              gridTemplateColumns: '1fr',
            },
          }}
        >
          {mediasCards.map((card, index) => (
            <div key={medias[index].id}>{card()}</div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Media;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
