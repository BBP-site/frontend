import React from 'react';
import {CSSObject} from '@emotion/react';
import {colors, links, pageWrap, position, typography} from '@scripts/theme';
import Link from 'next/link';
import {useCommon} from '@context/common';
import {useMedia} from '@scripts/hooks';
import whatsappURL from "@icons/whatsapp.svg";
import Image from "next/image";

export enum MENU_TYPE {
    HEADER = 'header',
    FOOTER = 'footer',
}

interface IMenuProps {
    type: MENU_TYPE;
    css?: CSSObject;
    className?: string;
    onClose?: Function;
    openFeedback?: Function;
}

const Menu = ({type, css, className, openFeedback, onClose}: IMenuProps) => {
    const {data} = useCommon();
    const {tabletLg} = useMedia();

    const menuCSS: CSSObject = {
        width: '100%',
        color: type === MENU_TYPE.FOOTER ? colors.white : 'none',
        justifyContent: type === MENU_TYPE.FOOTER ? 'space-between' : 'start',
        a: {
            ...(type === MENU_TYPE.FOOTER ? {...links.white} : {...links.black}),
            padding: '16px 30px',
            '&:first-of-type': {
                padding: '16px 30px 16px 0',
            },
        },
        [tabletLg]: {
            a: {
                padding: '10px 30px',
                paddingLeft: 0,
                '&:first-of-type': {
                    padding: '10px 30px',
                    paddingLeft: 0,
                },
            },
        },
        ...typography.txt,
        ...css,
    };

    const pageWrapCSS: CSSObject = type === MENU_TYPE.FOOTER ? {} : pageWrap;

    return (
        <nav css={{...menuCSS, ...pageWrapCSS, display: 'flex'}} className={className}>
            <Link href={`${data.pages.home}`} passHref>
                <a>Главная</a>
            </Link>

            <Link href={`${data.pages.collegium}`} passHref>
                <a>О Коллегии</a>
            </Link>

            <Link href={`${data.pages.practices}`} passHref>
                <a>Практики</a>
            </Link>

            <Link href={`${data.pages.team}`} passHref>
                <a>Команда</a>
            </Link>

            <Link href={`${data.pages.projects}`} passHref>
                <a>Проекты</a>
            </Link>

            <Link href={`${data.pages.media}`} passHref>
                <a>Медиа</a>
            </Link>

            <Link href={`${data.pages.contacts}`} passHref>
                <a>Контакты</a>
            </Link>

            <div css={{
                marginTop: '100px',
                display: 'none',
                [tabletLg]: {display: type === MENU_TYPE.FOOTER ? 'none' : 'block'}
            }}>
                <Link href={`${data.pages.media}`} passHref>
                    <a
                        onClick={() => {
                            if (onClose && openFeedback) {
                                onClose();
                                setTimeout(() => openFeedback(), 200);
                            }
                        }}
                    >
                        Связаться с нами
                    </a>
                </Link>

                <Link href="#" passHref>
                    <a css={position.start}>
                        <span css={{marginRight: '5px'}}>WhatsApp</span>

                        <Image src={whatsappURL} width={16} height={16}/>
                    </a>
                </Link>
            </div>

        </nav>
    );
};

export default Menu;
