import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CSSObject } from '@emotion/react';

import { colors, links, position, time, typography } from '@scripts/theme';

import arrowIconURL from '@icons/arrowBlue.svg';
import { useMedia } from '@scripts/hooks';

export interface ICardBtn {
  isLink: boolean;
  text: string;
  textCLose?: string;
  transform: string;
  url?: string;
}

export interface IContentCardProps {
  content: React.ReactElement;
  contentCSS?: CSSObject;
  title?: React.ReactElement;
  header?: string;
  cardBorderRadius?: string;
  cardImg?: string;
  boxShadow?: string;
  btn?: ICardBtn;
  height?: string;
  heightMobile?: string;
  imageWidth?: string;
  imageHeight?: string;
  mobileImageWidth?: string;
  mobileImageHeight?: string;
  defaultOpen?: boolean;
  objectPosition?: string;
  cssCard?: CSSObject;
}

const ContentCard: FC<IContentCardProps> = ({
  content,
  contentCSS,
  title,
  header,
  cardBorderRadius,
  cardImg,
  boxShadow,
  btn,
  height,
  heightMobile,
  imageWidth,
  imageHeight,
  mobileImageWidth,
  mobileImageHeight,
  defaultOpen = false,
  objectPosition,
  cssCard,
}) => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const { desktopLg, mobile, mobileLg } = useMedia();

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const cardCSS: CSSObject = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: '24px',
    boxShadow,
    borderRadius: cardBorderRadius,
    ...typography.txt,
    ...cssCard,
  };

  const onToggle = (): void => {
    if (!btn?.isLink) setIsOpen(!isOpen);
    if (btn?.url) push(`${btn.url}`);
  };

  return (
    <div css={cardCSS}>
      {title}
      {header && <h2>{header}</h2>}
      <div
        css={{
          zIndex: 1,
          display: 'grid',
          gridTemplate: '1fr / auto 1fr',
          width: '100%',
          [desktopLg]: { gridTemplate: 'auto 1fr / 1fr', ...(!header && { rowGap: '20px' }) },
          [mobile]: {
            display: 'block',
          },
        }}
      >
        {cardImg && (
          <div
            css={{
              width: '100%',
              display: 'grid',
              justifyContent: 'start',
              marginBottom: '20px',
              [mobile]: {
                width: '76vw',
                justifyContent: mobileImageWidth ? 'center' : 'start',
              },
            }}
          >
            <div
              css={{
                marginRight: '20px',
                width: imageWidth || '64px',
                height: imageHeight || '64px',
                maxWidth: '266px',
                maxHeight: '299px',
                position: 'relative',
                [desktopLg]: {
                  margin: '0',
                  width: mobileImageWidth || '64px',
                  height: mobileImageHeight || '64px',
                },
              }}
            >
              <Image
                src={cardImg}
                layout="fill"
                objectFit="cover"
                objectPosition={objectPosition || 'top'}
                alt="practice-icon"
              />
            </div>
          </div>
        )}

        <div>
          <div
            css={[
              {
                flexGrow: '1',
                height: !btn?.isLink ? (!isOpen ? height || '150px' : 'auto !important') : height || '150px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                ...(!header && { marginBottom: '15px' }),
                [mobileLg]: {
                  height: !btn?.isLink
                    ? !isOpen
                      ? height || '140px'
                      : 'auto !important'
                    : height || heightMobile || '140px',
                },
              },
              {
                ...contentCSS,
              },
            ]}
          >
            {content}
          </div>

          <span
            css={{
              ...links.blue,
              cursor: 'pointer',
              ...position.start,
              ...(isOpen && header && { marginTop: '15px' }),
            }}
            onClick={onToggle}
          >
            {isOpen ? btn?.textCLose : btn?.text}

            {!btn?.isLink && (
              <div
                css={{
                  ...position.center,
                  marginLeft: '10px',
                  transition: `transform ${time}`,
                  transform: isOpen ? 'none' : btn?.transform,
                }}
              >
                <Image src={arrowIconURL} width={14} height={8} />
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
