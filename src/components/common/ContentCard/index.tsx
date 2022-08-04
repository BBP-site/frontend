import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CSSObject } from '@emotion/react';

import { colors, links, time, typography } from '@scripts/theme';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

export interface ICardBtn {
  isLink: boolean;
  text: string;
  transform: string;
  url?: string;
}

export interface IContentCardProps {
  content: React.ReactElement;
  title?: React.ReactElement;
  cardBorderRadius?: string;
  cardImg?: string;
  boxShadow?: string;
  btn?: ICardBtn;
  height?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const ContentCard: FC<IContentCardProps> = ({
  content,
  title,
  cardBorderRadius,
  cardImg,
  boxShadow,
  btn,
  height,
  imageWidth,
  imageHeight,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { push } = useRouter();
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
  };

  const onToggle = (): void => {
    if (!btn?.isLink) setIsOpen(!isOpen);
    if (btn?.url) push(`${btn.url}`);
  };

  return (
    <div css={cardCSS}>
      {title}

      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        {cardImg && (
          <div
            css={{
              marginRight: '20px',
              width: '100%',
              height: imageHeight || '64px',
              maxWidth: imageWidth || '64px',
              maxHeight: '191px',
              position: 'relative',
            }}
          >
            <Image src={cardImg} layout="fill" objectFit="cover" alt="practice-icon" />
          </div>
        )}

        <div>
          <div
            css={{
              flexGrow: '1',
              height: !btn?.isLink ? (!isOpen ? height || '150px' : 'auto') : height || '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '15px',
            }}
          >
            {content}
          </div>

          <span
            css={{
              ...links.blue,
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={onToggle}
          >
            {btn?.text}

            <ArrowIcon
              css={{
                marginLeft: '10px',
                transition: `transform ${time}`,
                transform: isOpen ? 'none' : btn?.transform,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
