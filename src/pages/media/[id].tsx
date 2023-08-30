import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IContentMedia } from '@components/hoc-helpers/withConfigContentCard';

import { links, pageWrap, position, typography } from '@scripts/theme';
import { parseMediaType } from '@scripts/helpers';
import { useMedia } from '@scripts/hooks';

import { medias } from '@mocks/index';
import { IMediaDetail, mediasDetails } from '@mocks/mediasDetail';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';
import PageTitle from '@components/PageTitle';
import { useRouter } from 'next/router';
import { E_PAGES, useCommon } from '@context/common';

interface IMediaDetailItem extends IContentMedia, IMediaDetail {}

const MediaDetail = ({ media }: { media: IMediaDetailItem }) => {
  const router = useRouter();
  const { pagesHistory } = useCommon();
  const { tablet, tabletLg } = useMedia();

  const isBackWithQuery = useMemo(
    () => pagesHistory.list[pagesHistory.list.length - 1] === E_PAGES.MEDIA,
    [pagesHistory]
  );

  return (
    <main
      css={{
        display: 'grid',
        gridTemplate: 'auto auto 1fr / 1fr',
        height: '100%',
        paddingBottom: '40px',
        width: '100%',
      }}
    >
      <PageTitle
        title="Медиа"
        css={{ marginBottom: '24px', width: '100%' }}
        cssInner={{ paddingTop: '16px', paddingBottom: '16px', h1: { marginBottom: 0 } }}
        cssTitle={{ [tabletLg]: { fontSize: '32px', lineHeight: '44px' } }}
      />

      <div css={{ ...pageWrap, marginBottom: '16px', width: '100%' }}>
        {isBackWithQuery ? (
          <a
            css={{
              ...links.blue,
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              cursor: 'pointer',
            }}
            onClick={() => router.back()}
          >
            <ArrowIcon css={{ marginRight: '10px', transform: 'rotate(-90deg)' }} /> Назад
          </a>
        ) : (
          <Link href="/media" passHref>
            <a
              css={{
                ...links.blue,
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <ArrowIcon css={{ marginRight: '10px', transform: 'rotate(-90deg)' }} /> Назад
            </a>
          </Link>
        )}
      </div>

      <div css={{ ...position.center, alignItems: 'start', height: '100%', padding: '60px 0' }}>
        <section css={{ ...pageWrap, maxWidth: '842px', width: '100%' }}>
          <div css={{ ...position.spaceBetween, marginBottom: '8px' }}>
            <div css={{ ...position.center }}>
              <div
                css={{
                  marginRight: '8px',
                  width: '24px',
                  height: '24px',
                }}
              >
                <Image src={media.titleIcon} width="24px" height="24px" alt="media-icon" />
              </div>
              <span>{parseMediaType(media.type)}</span>
            </div>
            <span>{media.date}</span>
          </div>
          <div>
            <h1
              css={{
                ...typography.h1,
                fontSize: '32px',
                lineHeight: '35px',
                marginBottom: '24px',
                [tablet]: { fontSize: '24px', lineHeight: '28px', marginBottom: '16px' },
              }}
            >
              {media.name}
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: media.content }}
            css={{
              a: { ...links.blue },
              [tablet]: { ...typography.txtSm, 'p:not(:last-of-type)': { marginBottom: '16px' } },
            }}
          />
        </section>
      </div>
    </main>
  );
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async (context: { params: { id: string } }) => {
  const {
    params: { id },
  } = context;

  const detailInfo = medias.find(media => media.id === id);
  let media;
  if (detailInfo) {
    media = { ...detailInfo, ...mediasDetails.find(m => m.id === detailInfo.id) };
  }

  return !detailInfo
    ? { notFound: true }
    : {
        props: { media: JSON.parse(JSON.stringify(media)) },
      };
};

export default MediaDetail;
