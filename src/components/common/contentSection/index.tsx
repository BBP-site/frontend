import React, {FC, ReactNode} from 'react';
import {CSSObject} from "@emotion/react";
import {pageWrap, pageWrapS, position} from "@scripts/theme";

interface IContentSectionProps {
    title?: string;
    children?: ReactNode;
    padding?: string;
    backgroundColor?: string;
    titleLvl?: number;
    isWrapS?: boolean;
}

const ContentSection: FC<IContentSectionProps> = (
    {
        title,
        children,
        padding,
        backgroundColor,
        titleLvl,
        isWrapS,
    }
) => {
    const ContentSectionCSS: CSSObject = {
        ...position.start,
        backgroundColor,
        width: '100%',
        padding,
    }

    const getTitle = (): React.ReactElement => {
        switch (titleLvl) {
            case 1:
                return (
                    <h1>{title}</h1>
                )
            case 2:
                return (
                    <h2>{title}</h2>
                )
            case 3:
                return (
                    <h3>{title}</h3>
                )
            case 4:
                return (
                    <h4>{title}</h4>
                )
            case 5:
                return (
                    <h5>{title}</h5>
                )
            case 6:
                return (
                    <h6>{title}</h6>
                )
            default:
                return (
                    <h3>{title}</h3>
                );
        }
    }

    return (
        <section css={{...ContentSectionCSS}}>
            <div css={isWrapS ? {...pageWrapS, width: '100%'} : {...pageWrap, width: '100%'}}>
                {getTitle()}

                {children}
            </div>
        </section>
    )
}

export default ContentSection;
