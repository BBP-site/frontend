import React, { useMemo, useState } from 'react';

import { useMedia } from '@scripts/hooks';
import { colors, pageWrap, time } from '@scripts/theme';
import { CARD_TYPE, MEDIA_TYPE } from '@scripts/enums/common/content-card.enum';
import { parseMediaType } from '@scripts/helpers';

import withConfigContentCard, { IContentMedia } from '@components/hoc-helpers/withConfigContentCard';
import ContentCard from '@components/common/ContentCard';
import Select from '@components/common/Select';
import PageTitle from '@components/PageTitle';

import { medias } from '@mocks/index';

const compareAB = (mediaA: IContentMedia, mediaB: IContentMedia) => {
  const mediaADaysArr = [...mediaA.date.split('.')];
  const mediaBDaysArr = [...mediaB.date.split('.')];

  const mediaADays = `${parseInt(mediaADaysArr[2], 10) * 365}${parseInt(mediaADaysArr[1], 10) * 60}${parseInt(
    mediaADaysArr[0],
    10
  )}`;
  const mediaBDays = `${parseInt(mediaBDaysArr[2], 10) * 365}${parseInt(mediaBDaysArr[1], 10) * 60}${parseInt(
    mediaBDaysArr[0],
    10
  )}`;

  if (mediaADays > mediaBDays) return 1;
  if (mediaADays < mediaBDays) return -1;
  return 0;
};

const newMedias = [...medias].sort(compareAB);
const mediaTypes = [MEDIA_TYPE.ALL, ...new Set(medias.map(media => media.type))].sort();
const years = ['all', ...new Set(medias.map(media => `${media.date.substring(6, 8)}`).sort())];

const Media = () => {
  const { tabletLgMin, tabletLg, tablet, mobileLg } = useMedia();
  const [typeFilter, setTypeFilter] = useState(MEDIA_TYPE.ALL);
  const [yearFilter, setYearFilter] = useState('all');

  const mediasCards = useMemo(
    () =>
      newMedias
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
            { ...media, title: parseMediaType(media.type), contentHtml: <p>{media.name}</p> },
            CARD_TYPE.MEDIA
          )
        ),
    [typeFilter, yearFilter]
  );

  return (
    <main
      css={{
        height: '100%',
        backgroundColor: colors.gray100,
        paddingBottom: '48px',
        width: '100%',
      }}
    >
      <PageTitle title="Медиа" css={{ marginBottom: '24px' }} />
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
                onChange={value => setTypeFilter(Number(value))}
                items={mediaTypes.map(type => ({ label: parseMediaType(type), value: type }))}
              />
            </div>
            <div css={{ flexGrow: 1, width: '100%' }}>
              <Select
                placeholder="Период"
                onChange={value => setYearFilter(`${value}`)}
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
                    onChange={event => setTypeFilter(Number(event.target.value))}
                  />
                  <label htmlFor={`media-type-filter-${type}`}>{parseMediaType(type)}</label>
                </div>
              ))}
            </div>
            <div css={{ width: '100%', display: 'flex' }}>
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
                      onChange={event => setYearFilter(event.target.value)}
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
