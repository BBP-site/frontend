import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IContentMedia } from '@components/hoc-helpers/withConfigContentCard';

import { links, pageWrap, position, typography } from '@scripts/theme';
import { parseMediaType } from '@scripts/helpers';
import { useMedia } from '@scripts/hooks';

import { medias } from '@mocks/index';
import { IMediaDetail, mediasDetails } from '@mocks/mediasDetail';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

interface IMediaDetailItem extends IContentMedia, IMediaDetail {}

const MediaDetail = ({ media }: { media: IMediaDetailItem }) => {
  const { tablet } = useMedia();

  return (
    <main
      css={{
        height: '100%',
        paddingTop: '16px',
        paddingBottom: '40px',
        width: '100%',
      }}
    >
      <div css={{ ...pageWrap, marginBottom: '16px' }}>
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
      </div>

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
