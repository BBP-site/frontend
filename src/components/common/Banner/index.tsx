import React, {FC} from 'react';

import Button from "@components/common/Button";

import {CSSObject} from "@emotion/react";
import {colors, pageWrap, pageWrapS, position} from "@scripts/theme";

import bannerURL from '@images/banner.jpg';

const Banner: FC = () => {
    const bannerCSS: CSSObject = {
        ...pageWrapS,
        ...position.start,
        padding: '0',
        height: '600px',
        backgroundImage: `url(${bannerURL.src})`,
    }

    const bannerContentCSS: CSSObject = {
        width: '50%',
        minWidth: '510px',
        height: '100%',
        padding: '50px 0 50px 0',
        backgroundColor: colors.bannerContent,
        color: colors.white,
    }

    return (
        <div css={bannerCSS}>
            <div css={bannerContentCSS}>
                <div css={{
                    ...pageWrap,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    flexDirection: 'column',
                    height: '100%',
                }}>
                    <h6 css={{color: colors.white, margin: '0'}}>Коллегия адвокатов города Москвы</h6>

                    <h3>БАРЩЕВСКИЙ И ПАРТНЕРЫ</h3>

                    <p css={{marginTop: '32px'}}>
                        Наша задача - быть рядом, когда возникают правовые проблемы,
                        всегда помогать и находить выход из любых ситуаций.
                    </p>

                    <Button css={{marginTop: '32px'}}>Запись на консультацию</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
