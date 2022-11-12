import React, { FC, SVGProps } from 'react';
import { CSSObject } from '@emotion/react';
import Image from 'next/image';

import { CARD_TYPE, MEDIA_TYPE, PROJECT_INDUSTRY } from '@scripts/enums/common/content-card.enum';
import { position, shadows, typography } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

import { ICardBtn, IContentCardProps } from '@components/common/ContentCard';

interface ICardConfig {
  title?: React.ReactElement;
  borderRadius?: string;
  boxShadow?: string;
  btn?: ICardBtn;
  ArrowTransform?: string;
  height?: string;
  heightMobile?: string;
  imageWidth?: string;
  imageHeight?: string;
  mobileImageWidth?: string;
  mobileImageHeight?: string;
  isOpen?: boolean;
  header?: string;
  cssCard?: CSSObject;
  rmRowGap?: boolean;
}

export interface IContent {
  contentHtml: React.ReactElement;
  contentCSS?: CSSObject;
  objectPosition?: string;
  id?: string;
  img?: string;
  url?: string;
  date?: string;
  title?: string;
  titleIcon?: string;
}

export interface IContentPractice extends IContent {
  img: string;
  Img: FC<SVGProps<SVGSVGElement>>;
  title: string;
}

export interface IContentProject extends IContent {
  industry: PROJECT_INDUSTRY;
  header: string;
}

export interface IContentMedia extends IContent {
  id: string;
  date: string;
  type: MEDIA_TYPE;
}

const withConfigContentCard = (
  WrappedComponent: FC<IContentCardProps>,
  content: IContent,
  cardType: CARD_TYPE,
  isOpen?: boolean,
  header?: string
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { tabletLg, mobileLg } = useMedia();
  const cardConfig: ICardConfig = {};

  const projectTitle: React.ReactElement = (
    <div
      className="card-title"
      css={{
        ...position.start,
        marginBottom: '20px',
      }}
    >
      <span>{content.title}</span>
    </div>
  );

  const mediaTitle: React.ReactElement = (
    <div
      className="card-title"
      css={{
        ...position.spaceBetween,
        ...(cardType !== CARD_TYPE.MEDIA_MAIN && { flexWrap: 'wrap' }),
        width: '100%',
        marginBottom: '20px',
      }}
    >
      <div
        css={{
          ...position.center,
        }}
      >
        {content.titleIcon && (
          <div css={{ minWidth: '24px', width: '24px', height: '24px', position: 'relative', marginRight: '8px' }}>
            <Image
              css={{
                marginRight: '10px',
              }}
              layout="fill"
              src={content.titleIcon}
              alt="titleIcon"
            />
          </div>
        )}

        <span css={{ marginRight: '8px' }}>{content.title}</span>
      </div>

      <span css={{ ...(cardType !== CARD_TYPE.MEDIA_MAIN && { marginLeft: '32px' }), [mobileLg]: { marginLeft: 0 } }}>
        {content.date}
      </span>
    </div>
  );

  switch (cardType) {
    case CARD_TYPE.PRACTICE:
      cardConfig.isOpen = isOpen;
      cardConfig.borderRadius = '16px';
      cardConfig.boxShadow = shadows.around.boxShadow;
      cardConfig.btn = {
        isLink: false,
        text: 'Показать полностью',
        textCLose: 'Скрыть',
        transform: 'rotate(180deg)',
      };
      cardConfig.cssCard = {
        [tabletLg]: {
          paddingLeft: '12px',
          paddingRight: '12px',
        },
      };
      break;
    case CARD_TYPE.TEAM:
      cardConfig.borderRadius = '4px';
      cardConfig.boxShadow = shadows.around.boxShadow;
      cardConfig.imageWidth = '170px';
      cardConfig.imageHeight = '191px';
      cardConfig.mobileImageWidth = '266px';
      cardConfig.mobileImageHeight = '299px';
      cardConfig.btn = {
        isLink: true,
        url: `team/${content.id}`,
        text: 'Подробнее',
        transform: 'rotate(90deg)',
      };
      break;
    case CARD_TYPE.PROJECTS:
      cardConfig.isOpen = isOpen;
      cardConfig.borderRadius = '8px';
      cardConfig.btn = {
        isLink: false,
        text: 'Показать полностью',
        textCLose: 'Скрыть',
        transform: 'rotate(180deg)',
      };
      cardConfig.title = projectTitle;
      cardConfig.height = '0';
      cardConfig.header = header;
      cardConfig.cssCard = {
        [tabletLg]: {
          p: {
            fontSize: '16px',
          },
          '& > div': {
            marginBottom: '8px',
            fontSize: '18px',
          },
          h3: {
            fontSize: '16px',
            lineHeight: '22px',
            marginBottom: '8px',
          },
        },
        h2: {
          ...typography.h5,
          [tabletLg]: { fontSize: '18px', lineHeight: '27px', marginBottom: '16px' },
        },
      };
      break;
    case CARD_TYPE.PROJECTS_MAIN:
      cardConfig.borderRadius = '16px';
      cardConfig.boxShadow = shadows.around.boxShadow;
      cardConfig.btn = {
        isLink: true,
        url: `/projects#${content.id}`,
        text: 'Подробнее',
        transform: 'rotate(90deg)',
      };
      cardConfig.heightMobile = '60px';
      cardConfig.rmRowGap = true;
      break;
    case CARD_TYPE.MEDIA:
    case CARD_TYPE.MEDIA_MAIN:
      cardConfig.title = mediaTitle;
      cardConfig.borderRadius = '8px';
      cardConfig.btn = {
        isLink: true,
        url: `/media/${content.id}`,
        text: 'Подробнее',
        transform: 'rotate(90deg)',
      };
      cardConfig.height = '100px';
      cardConfig.heightMobile = cardType !== CARD_TYPE.MEDIA_MAIN ? 'auto' : '';
      cardConfig.rmRowGap = true;
      cardConfig.cssCard = {
        height: '100%',
      };
      break;
    default:
  }

  return () => (
    <WrappedComponent
      title={cardConfig.title}
      header={cardConfig.header}
      cardBorderRadius={cardConfig.borderRadius}
      boxShadow={cardConfig.boxShadow}
      cardImg={content.img}
      content={content.contentHtml}
      contentCSS={content.contentCSS}
      btn={cardConfig.btn}
      height={cardConfig.height}
      heightMobile={cardConfig.heightMobile}
      imageWidth={cardConfig.imageWidth}
      imageHeight={cardConfig.imageHeight}
      mobileImageWidth={cardConfig.mobileImageWidth}
      mobileImageHeight={cardConfig.mobileImageHeight}
      defaultOpen={cardConfig.isOpen}
      objectPosition={content.objectPosition}
      cssCard={cardConfig.cssCard}
      rmRowGap={cardConfig.rmRowGap}
    />
  );
};

export default withConfigContentCard;
