import React, {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {colors, links, pageWrap, position, shadows, typography} from '@scripts/theme';
import {useMedia} from '@scripts/hooks';

import {useCommon} from '@context/common';
import {ReactComponent as PhoneIcon} from '@icons/phone.svg';
import {ReactComponent as CrossIcon} from '@icons/cross.svg';
import {ReactComponent as MenuIcon} from '@icons/menu.svg';
import logoIconURL from '@icons/logo.svg';
import logoTextIconURL from '@icons/logoText.svg';
import MenuMobile from '@components/MenuMobile';

export const HeaderMobileTop: FC<{}> = () => {
    const {data} = useCommon();
    const {tabletLgMin} = useMedia();

    return (
        <div
            css={{
                ...pageWrap,
                ...position.spaceBetween,
                height: '30px',
                backgroundColor: colors.gray100,
                width: '100%',
                [tabletLgMin]: {
                    display: 'none',
                },
            }}
        >
            {data.contactsData.phones.map(phone => (
                <div css={position.center}>
                    <Link key={phone.desc} href={`tel:${phone.number}`} passHref>
                        <a
                            css={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                ...links.blueDark
                            }}
                        >
                            <PhoneIcon/>
                            <span css={{...typography.txtExtraSm, marginLeft: '8px'}}>{phone.number}</span>
                        </a>
                    </Link>
                </div>
            ))}
            {/* <Link href={`mailto:${data.contactsData?.email}`} passHref> */}
            {/*  <a css={{ display: 'inline-flex', alignItems: 'center', ...links.blueDark }}> */}
            {/*    <EmailIcon /> */}
            {/*    <span css={{ marginLeft: '8px', ...typography.txtExtraSm }}>{data.contactsData?.email}</span> */}
            {/*  </a> */}
            {/* </Link> */}
        </div>
    );
};

const HeaderMobile: FC<{ openFeedback: Function }> = ({openFeedback}) => {
    const {tabletLgMin} = useMedia();
    const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
    const [ruEn, setRuEn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOffset, setMenuOffset] = useState<number | null>(null);

    useEffect(() => {
        const rect = headerRef?.getBoundingClientRect();
        if (!rect || !menuOpen) return;
        setMenuOffset(rect.top + rect.height);
    }, [headerRef, menuOpen]);

    return (
        <>
            <div
                ref={node => setHeaderRef(node)}
                css={{
                    height: '83px',
                    ...pageWrap,
                    ...position.spaceBetween,
                    ...shadows.bottom,
                    [tabletLgMin]: {
                        display: 'none',
                    },
                }}
            >
                <div
                    css={{
                        textAlign: 'left',
                        width: '50%',
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        css={{
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            '&:focus-visible': {
                                outline: `2px solid ${colors.cyan}`,
                            },
                        }}
                    >
                        {!menuOpen ? <MenuIcon/> : <CrossIcon/>}
                    </button>
                </div>
                <Link href="/" passHref>
                    <a
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: '142px',
                            minHeight: '57px',
                        }}
                    >
                        <div
                            css={{
                                ...position.center,
                                marginRight: '8px',
                            }}
                        >
                            <Image src={logoIconURL} width="44px" height="57px"/>
                        </div>
                        <div css={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Image src={logoTextIconURL} width="90px" height="25px"/>
                        </div>
                    </a>
                </Link>
                <div
                    css={{
                        textAlign: 'right',
                        width: '50%',
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setRuEn(!ruEn)}
                        css={{
                            ...typography.txtSm,
                            fontWeight: 700,
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            '&:focus-visible': {
                                outline: `2px solid ${colors.cyan}`,
                            },
                        }}
                    >
                        <span css={{...(ruEn && {fontWeight: 400})}}>RU</span> /{' '}
                        <span css={{...(!ruEn && {fontWeight: 400})}}>EN</span>
                    </button>
                </div>
                <MenuMobile
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    openFeedback={() => openFeedback()}
                    topOffset={menuOffset}
                />
            </div>
        </>
    );
};

export default HeaderMobile;
