import { FC } from 'react';
import { useCommon } from '@context/common';
import {colors, pageWrap, position, typography} from '@scripts/theme';
import {CSSObject} from "@emotion/react";
import Menu, {MENU_TYPE} from "@components/Menu";
import Link from "next/link";
import Image from "next/image";
import logoIconURL from "@icons/whiteLogo.svg";
import logoTextIconURL from "@icons/whiteLogoText.svg";
import locationURL from "@icons/location.svg";
import phoneURL from "@icons/phone.svg";
import emailURL from "@icons/email.svg";


const footerCss: CSSObject = {
    ...position.center,
    ...typography.txt,
    height: '184px',
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
    ...typography.txtSm,
    width: '100%',
    height: '32px',
    backgroundColor: colors.blueSuperDark,
};

const Footer: FC = () => {
    const { contactsData } = useCommon();

    return (
        <footer css={footerCss}>
            <div css={{...pageWrap, margin: 'none', width: '100%'}}>
                <Menu type={MENU_TYPE.FOOTER} />
            </div>

            <div css={mainBlockCSS}>
                <div css={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/" passHref>
                        <a
                            css={{
                                paddingRight: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                borderRight: `1px solid ${colors.gray400}`,
                            }}
                        >
                            <div css={{ marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={logoIconURL} width="44px" height="57px" />
                            </div>

                            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={logoTextIconURL} width="90px" height="25px" />
                            </div>
                        </a>
                    </Link>

                    <span css={{ ...typography.txtSm, marginLeft: '16px' }}>
                Коллегия адвокатов города Москвы
            </span>
                </div>

                <div css={{
                    ...position.end,
                    ...typography.txtSm,
                    flexDirection: 'row',
                    'a': {
                        ...position.center,
                        marginRight: '25px',
                        cursor: 'pointer',
                        color: colors.white,
                    }
                }}>
                    <a href='https://yandex.ru/maps/-/CCURIXeRWC'>
                        <Image src={locationURL} width="16px" height="16px" />
                        <span css={{marginLeft: '8px'}}>{contactsData?.address}</span>
                    </a>

                    <a href={`tel:${contactsData?.phones[0]?.number}`}>
                        <Image src={phoneURL} width="16px" height="16px" />
                        <span css={{marginLeft: '8px'}}>{contactsData?.phones[0]?.number}</span>
                    </a>

                    <a href={`mailto:${contactsData?.email}`}>
                        <Image src={emailURL} width="16px" height="16px" />
                        <span css={{marginLeft: '8px'}}>{contactsData?.email}</span>
                    </a>
                </div>
            </div>

            <div css={rightsCSS}>
                <span
                    css={{
                        ...position.start,
                        ...pageWrap,
                        margin: 'none',
                        padding: '0 80px',
                        width: '100%'
                }}
                >Все права защищены, Коллегия адвокатов города Москвы  «БАРЩЕВСКИЙ И ПАРТНЕРЫ»  2003—2022 ©
                </span>
            </div>
        </footer>
    );
};

export default Footer;
