import React, {FC} from 'react';
import Image from 'next/image';

import {CARD_TYPE} from '@scripts/enums/common/content-card.enum';
import {position, shadows} from '@scripts/theme';

import {ICardBtn, IContentCardProps} from '@components/common/ContentCard';
import {CSSObject} from "@emotion/react";

interface ICardConfig {
  title?: React.ReactElement;
  borderRadius?: string;
  boxShadow?: string;
  btn?: ICardBtn;
  ArrowTransform?: string;
  height?: string;
  imageWidth?: string;
  imageHeight?: string;
}

export interface IContent {
    contentHtml: React.ReactElement;
    contentCSS?: CSSObject;
    id?: string;
    img?: string;
    url?: string;
    date?: string;
    title?: string;
    titleIcon?: string;
}

const withConfigContentCard = (WrappedComponent: FC<IContentCardProps>, content: IContent, cardType: CARD_TYPE) => {
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

    const projectMainTitle: React.ReactElement = (
        <div
            className="card-title"
            css={{
                ...position.start,
                marginBottom: '20px',
            }}
        >
            <span>{content.date}</span>
        </div>
    );

    const mediaTitle: React.ReactElement = (
        <div
            className="card-title"
            css={{
                ...position.spaceBetween,
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
                    <div css={{width: '24px', height: '24px', position: 'relative', marginRight: '8px'}}>
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

                <span>{content.title}</span>
            </div>

            <span>{content.date}</span>
        </div>
    );

    switch (cardType) {
        case CARD_TYPE.PRACTICE:
            cardConfig.borderRadius = '16px';
            cardConfig.boxShadow = shadows.around.boxShadow;
            cardConfig.btn = {
                isLink: false,
                text: 'Показать полностью',
                transform: 'rotate(180deg)',
            };
            break;
        case CARD_TYPE.TEAM:
            cardConfig.borderRadius = '4px';
            cardConfig.boxShadow = shadows.around.boxShadow;
            cardConfig.imageWidth = '170px';
            cardConfig.imageHeight = '191px';
            cardConfig.btn = {
                isLink: true,
                url: `team/${content.id}`,
                text: 'Подробнее',
                transform: 'rotate(90deg)',
            };
            break;
        case CARD_TYPE.PROJECTS:
            cardConfig.borderRadius = '8px';
            cardConfig.boxShadow = shadows.around.boxShadow;
            cardConfig.btn = {
                isLink: false,
                url: `projects/${content.id}`,
                text: 'Показать полностью',
                transform: 'rotate(180deg)',
            };
            cardConfig.title = projectTitle;
            cardConfig.height = '35px';
            break;
        case CARD_TYPE.PROJECTS_MAIN:
            cardConfig.title = projectMainTitle;
            cardConfig.btn = {
                isLink: true,
                url: `projects/${content.id}`,
                text: 'Подробнее',
                transform: 'rotate(90deg)',
            };
            break;
        case CARD_TYPE.MEDIA:
            cardConfig.title = mediaTitle;
            cardConfig.borderRadius = '8px';
            cardConfig.btn = {
                isLink: true,
                url: `medias/${content.id}`,
                text: 'Подробнее',
                transform: 'rotate(90deg)',
            };
            cardConfig.height = '100px';
            break;
        default:
    }

    return () => (
        <WrappedComponent
            title={cardConfig.title}
            cardBorderRadius={cardConfig.borderRadius}
            boxShadow={cardConfig.boxShadow}
            cardImg={content.img}
            content={content.contentHtml}
            contentCSS={content.contentCSS}
            btn={cardConfig.btn}
            height={cardConfig.height}
            imageWidth={cardConfig.imageWidth}
            imageHeight={cardConfig.imageHeight}
        />
    );
};

export default withConfigContentCard;
