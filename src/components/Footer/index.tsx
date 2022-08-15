import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";

import {useCommon} from '@context/common';

import {colors, links, pageWrap, position, typography} from '@scripts/theme';
import {CSSObject} from "@emotion/react";

import logoIconURL from "@icons/whiteLogo.svg";
import logoTextIconURL from "@icons/whiteLogoText.svg";
import locationURL from "@icons/location.svg";
import phoneURL from "@icons/phone.svg";
import emailURL from "@icons/email.svg";


const footerCss: CSSObject = {
    ...position.center,
    ...typography.txt,
    height: '120px',
    backgroundColor: colors.blueDark,
    color: colors.white,
    width: '100%',
    flexDirection: 'column',
};

const mainBlockCSS: CSSObject = {
    ...position.spaceBetween,
    ...pageWrap,
    marginLeft: '0',
    marginRight: '0',
    width: '100%',
}

const rightsCSS: CSSObject = {
    ...position.center,
    ...typography.txt,
    width: '100%',
    height: '32px',
    backgroundColor: colors.blueSuperDark,
};

const Footer: FC = () => {
    const {data} = useCommon();

    return (
        <footer css={footerCss}>
            <div css={mainBlockCSS}>
                <div css={{display: 'flex', alignItems: 'center'}}>
                    <Link href="/" passHref>
                        <a
                            css={{
                                paddingRight: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                borderRight: `1px solid ${colors.gray400}`,
                            }}
                        >
                            <div css={{
                                marginRight: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image src={logoIconURL} width="44px" height="57px"/>
                            </div>

                            <div css={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Image src={logoTextIconURL} width="90px" height="25px"/>
                            </div>
                        </a>
                    </Link>

                    <span css={{marginLeft: '16px'}}>
                        Коллегия адвокатов города Москвы
                    </span>
                </div>

                <div css={{
                    ...position.end,
                    ...typography.txt,
                    flexDirection: 'row',
                    'a': {
                        ...position.center,
                        marginRight: '25px',
                        cursor: 'pointer',
                        color: colors.white,
                    },

                    'a:last-of-type': {
                        marginRight: '0px'
                    }
                }}>
                    <Link href="/contacts" passHref>
                        <a>
                            <Image src={locationURL} width="16px" height="16px"/>
                            <span css={{marginLeft: '8px'}}>{data.contactsData?.address}</span>
                        </a>
                    </Link>

                    <Link href={`tel:${data.contactsData?.phones[0]?.number}`} passHref>
                        <a>
                            <Image src={phoneURL} width="16px" height="16px"/>
                            <div css={{marginLeft: '8px'}}>
                                {data.contactsData.phones.map(phone => (
                                    <p key={phone.desc}
                                       css={{...typography.txt, marginBottom: '4px'}}>
                                        {phone.number}
                                    </p>
                                ))}
                            </div>
                        </a>
                    </Link>

                    <Link href={`mailto:${data.contactsData?.email}`} passHref>
                        <a>
                            <Image src={emailURL} width="16px" height="16px"/>
                            <span css={{marginLeft: '8px'}}>{data.contactsData?.email}</span>
                        </a>
                    </Link>
                </div>
            </div>

            <div css={rightsCSS}>
                <span
                    css={{
                        ...position.spaceBetween,
                        ...pageWrap,
                        margin: 'none',
                        padding: '0 80px',
                        width: '100%'
                    }}
                >
                    <Link href='#' passHref>
                        <a>
                            <span
                                css={{
                                    ...links.white,
                                    marginLeft: '8px',
                                    fontSize: '18px'
                                }}
                            >
                                Политика обработки персональных данных
                            </span>
                        </a>
                    </Link>

                    © 2003—2022 Коллегия адвокатов города Москвы  «Барщевский и Партнеры». Все права защищены.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
