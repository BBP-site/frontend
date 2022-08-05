import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSObject } from '@emotion/react';

import { colors, links, pageWrap, position, typography } from '@scripts/theme';
import { teamDetails } from '@scripts/data';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';
import { ReactComponent as MailIcon } from '@icons/mail.svg';
import Image from 'next/image';

const TeamDetail = () => {
  const { query } = useRouter();
  const id = (query && query.id && +query.id) || 0;
  const detailInfo = useMemo(() => teamDetails.find(detail => detail.id === id) || undefined, [id]);

  const blockCSS: CSSObject = {
    marginBottom: '48px',
    'p:first-of-type': {
      ...typography.h5,
      marginBottom: '24px',
    },
    'p:not(:first-of-type)': {
      ...typography.txt,
      color: colors.gray700,
      marginBottom: '16px',
    },
    ul: {
      margin: 0,
      ...typography.txt,
      color: colors.gray700,
      li: {
        marginBottom: '16px',
        '&::before': {
          content: 'none',
        },
      },
    },
  };

  return (
    <main css={{ ...pageWrap, width: '100%', marginTop: '24px', marginBottom: '72px' }}>
      {detailInfo && (
        <>
          <Link href="/team" passHref>
            <a
              css={{
                ...links.blue,
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginBottom: '32px',
              }}
            >
              <ArrowIcon css={{ marginRight: '10px', transform: 'rotate(-90deg)' }} /> Назад
            </a>
          </Link>
          <div css={{ display: 'flex' }}>
            <div css={{ marginRight: '72px', minWidth: '400px' }}>
              <Image src={detailInfo.img} width={400} height={578} objectFit="cover" />
              <p css={{ ...typography.h5, marginBottom: '4px' }}>{detailInfo.name}</p>
              <p css={{ ...typography.txtMd, color: colors.gray600, marginBottom: 0 }}>{detailInfo.position}</p>
              {detailInfo.degree &&
                detailInfo.degree.map(degree => (
                  <p key={degree} css={{ ...typography.txtMd, color: colors.gray600, marginBottom: 0 }}>
                    {degree}
                  </p>
                ))}
              {detailInfo.email && (
                <div css={{ display: 'flex', alignItems: 'center', marginTop: '32px' }}>
                  <MailIcon css={{ marginRight: '14px' }} />
                  <p css={{ ...typography.txt }}>{detailInfo.email}</p>
                </div>
              )}
              {detailInfo.revardsIcons && (
                <div css={{ marginTop: '48px', ...position.spaceBetween, flexWrap: 'wrap' }}>
                  {detailInfo.revardsIcons.map(iconData => (
                    <Image
                      key={iconData.url}
                      css={{ position: 'relative' }}
                      src={iconData.url}
                      width={iconData.width}
                      height={iconData.height}
                    />
                  ))}
                </div>
              )}
            </div>
            <div>
              {detailInfo.experienceHTML && (
                <div css={blockCSS}>
                  <p>Стаж юридической практики</p>
                  {detailInfo.experienceHTML}
                </div>
              )}
              {detailInfo.revardsHTML && (
                <div css={blockCSS}>
                  <p>Награды</p>
                  {detailInfo.revardsHTML}
                </div>
              )}
              {detailInfo.practicesHTML && (
                <div css={blockCSS}>
                  <p>Специализация (практики)</p>
                  {detailInfo.practicesHTML}
                </div>
              )}
              {detailInfo.mediaHTML && (
                <div css={blockCSS}>
                  <p>Публикации</p>
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

export default TeamDetail;
