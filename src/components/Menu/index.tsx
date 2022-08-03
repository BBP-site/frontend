import React from 'react';
import {CSSObject} from "@emotion/react";
import {colors, links, pageWrap, typography} from "@scripts/theme";
import Link from "next/link";
import {useCommon} from "@context/common";

export enum MENU_TYPE {
    HEADER = 'header',
    FOOTER = 'footer',
}

interface IMenuProps {
    type: MENU_TYPE;
}

const Menu = ({type}: IMenuProps) => {
    const {data} = useCommon();
    
    const menuCSS: CSSObject = {
        width: '100%',
        color: type === MENU_TYPE.FOOTER ? colors.white : 'none',
        justifyContent: type === MENU_TYPE.FOOTER ? 'space-between' : 'start',
        'a': {
            ...type === MENU_TYPE.FOOTER ? {...links.white} : {...links.black},
            padding: '16px 30px'
        },
        'a:first-of-type': {
            padding: '16px 30px 16px 0'
        },
        ...typography.txt
    }

    const pageWrapCSS: CSSObject = type === MENU_TYPE.FOOTER ? {} : pageWrap;

    return (
        <nav css={{...menuCSS, ...pageWrapCSS, display: 'flex'}}>
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
        </nav>
    )
}

export default Menu;
