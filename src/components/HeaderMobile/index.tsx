import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { colors, links, pageWrap, position, typography } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

import { useCommon } from '@context/common';
import phoneIconURL from '@icons/phoneBlueDark.svg';
import crossIconURL from '@icons/cross.svg';
import menuIconURL from '@icons/menu.svg';
import logoIconURL from '@icons/logo.svg';
import logoTextIconURL from '@icons/logoText.svg';
import MenuMobile from '@components/MenuMobile';
import {LOCALES} from "@scripts/enums/indext";
import logoIconEnURL from "@icons/logoEn.svg";
import logoTextIconEnURL from "@icons/logoTextEn.svg";

export const HeaderMobileDataRow: FC<{}> = () => {
  const { data } = useCommon();
  const { tabletLgMin } = useMedia();

  return (
    <div
      css={{
        ...pageWrap,
        ...position.spaceBetween,
        height: '30px',
        backgroundColor: colors.white,
        width: '100%',
        [tabletLgMin]: {
          display: 'none',
        },
      }}
    >
      {data.contactsData.phones.map(phone => (
        <div css={position.center} key={phone.desc}>
          <Link href={`tel:${phone.number}`} passHref>
            <a
              css={{
                display: 'inline-flex',
                alignItems: 'center',
                ...links.blueDark,
              }}
            >
              <Image src={phoneIconURL} width={16} height={16} />
              <span css={{ ...typography.txtExtraSm, marginLeft: '8px' }}>{phone.number}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

const HeaderMobile: FC<{ openFeedback: Function }> = ({ openFeedback }) => {
  const { pathname, query, asPath, push, locales, locale: activeLocale } = useRouter();
  const { tabletLgMin } = useMedia();
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
  const [ruEn, setRuEn] = useState(activeLocale !== locales?.[0]);
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
          [tabletLgMin]: {
            display: 'none',
          },
        }}
      >
        <div css={{ height: '83px', ...pageWrap, ...position.spaceBetween, width: '100%' }}>
          <div
            css={{
              textAlign: 'left',
              width: '50%',
              height: '25px',
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
              {!menuOpen ? (
                <Image src={menuIconURL} width={24} height={24} />
              ) : (
                <Image src={crossIconURL} width={24} height={24} />
              )}
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
                  {
                      activeLocale === LOCALES.DEFAULT ?
                          <Image src={logoIconURL} width="44px" height="57px" />
                          :
                          <Image src={logoIconEnURL} width="44px" height="57px" />
                  }
              </div>
              <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {
                      activeLocale === LOCALES.DEFAULT ?
                          <Image src={logoTextIconURL} width="90px" height="25px" />
                          :
                          <Image src={logoTextIconEnURL} width="100px" height="30px" />
                  }
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
              onClick={() => {
                setRuEn(!ruEn);
                push({ pathname, query }, asPath, { locale: ruEn ? locales?.[0] : locales?.[1] });
              }}
              css={{
                ...typography.txtSm,
                fontWeight: 700,
                border: 'none',
                backgroundColor: 'transparent',
                color: colors.black,
                cursor: 'pointer',
                '&:focus-visible': {
                  outline: `2px solid ${colors.cyan}`,
                },
              }}
            >
              <span css={{ ...(ruEn && { fontWeight: 400 }) }}>RU</span> /{' '}
              <span css={{ ...(!ruEn && { fontWeight: 400 }) }}>EN</span>
            </button>
          </div>
        </div>
        <HeaderMobileDataRow />
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
