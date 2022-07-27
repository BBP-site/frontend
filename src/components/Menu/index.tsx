import React from 'react';
import {CSSObject} from "@emotion/react";
import {colors, links, pageWrap, typography} from "@scripts/theme";
import Link from "next/link";

export enum MENU_TYPE {
    HEADER = 'header',
    FOOTER = 'footer',
}

interface IMenuProps {
    type: MENU_TYPE;
}

const Menu = ({type}: IMenuProps) => {
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
        <nav css={{ ...menuCSS, ...pageWrapCSS, display: 'flex' }}>
            <Link href="/" passHref>
                <a>Главная</a>
            </Link>

            <Link href="/about" passHref>
                <a>О Коллегии</a>
            </Link>

            <Link href="/practices" passHref>
                <a>Практики</a>
            </Link>

            <Link href="/team" passHref>
                <a>Команда</a>
            </Link>

            <Link href="/projects" passHref>
                <a>Проекты</a>
            </Link>

            <Link href="/media" passHref>
                <a>Медиа</a>
            </Link>

            <Link href="/contacts" passHref>
                <a>Контакты</a>
            </Link>
        </nav>
    )
}

export default Menu;
