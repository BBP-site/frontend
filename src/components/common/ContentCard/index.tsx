import React, { FC, useState } from 'react';
import { CSSObject } from '@emotion/react';

import { colors, links, typography } from '@scripts/theme';
import ArrowIcon from "@icons/arrow.svg";

export interface ICardBtn {
    isLink: boolean;
    text: string;
    transform: string;
}

export interface IContentCardProps {
    content: React.ReactElement;
    title?: React.ReactElement;
    cardBorderRadius?: string;
    cardImg?: string;
    boxShadow?: string;
    btn?: ICardBtn;
    height?: string;
}

const ContentCard: FC<IContentCardProps> = ({
    content,
    title,
    cardBorderRadius,
    cardImg,
    boxShadow,
    btn,
    height,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
    }

    const onToggle = (): void => {
        if (!btn?.isLink) setIsOpen(!isOpen);
    }

    return (
        <div css={cardCSS}>
            { title }

            <div
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {
                    cardImg && (
                        <div css={{marginRight: '20px', maxHeight: '190px'}}>
                            <img src={cardImg} alt="practice-icon" />
                        </div>
                    )
                }

                <div>
                    <div
                        css={{
                            flexGrow: '1',
                            height: !btn?.isLink ?
                                !isOpen ?
                                    height || '150px'
                                    : 'auto'
                                : height || '150px',
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
                            cursor: 'pointer'
                        }}
                        onClick={onToggle}
                    >
                        {btn?.text}

                        <ArrowIcon
                            css={{
                                marginLeft: '10px',
                                transition: 'transform 500ms',
                                transform: isOpen ? 'none' : btn?.transform
                            }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContentCard;
