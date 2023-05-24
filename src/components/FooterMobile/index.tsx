import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { useMedia } from '@scripts/hooks';
import { colors, links, pageWrap, position, typography } from '@scripts/theme';

import Menu, { MENU_TYPE } from '@components/Menu';

import { useCommon } from '@context/common';

import logoIconURL from '@icons/whiteLogo.svg';
import logoTextIconURL from '@icons/whiteLogoText.svg';
import logoIconEnURL from '@icons/whiteLogoEn.svg';
import logoTextIconEnURL from '@icons/whiteLogoTextEn.svg';
import locationURL from '@icons/location.svg';
import phoneURL from '@icons/phone.svg';
import emailURL from '@icons/email.svg';
import fpaURL from '@images/fpa.webp';
import agURL from '@images/ag.webp';
import ofURL from '@images/of.webp';
import {LOCALES} from "@scripts/enums/indext";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const FooterMobile: FC<{}> = () => {
  const { t } = useTranslation();
  const { data } = useCommon();
  const { tabletLgMin } = useMedia();
  const { t } = useTranslation();
  const { locale: activeLocale } = useRouter();

  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        [tabletLgMin]: {
          display: 'none',
        },
      }}
    >
      <div css={{ ...pageWrap, marginLeft: '0', marginRight: '0', width: '100%' }}>
        <Menu
          type={MENU_TYPE.FOOTER}
          css={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: '16px' }}
        />

        <div css={{ display: 'flex', alignItems: 'center', marginBottom: '36px' }}>
          <Link href="/" passHref>
            <a
              css={{
                display: 'flex',
                alignItems: 'center',
                borderRight: `1px solid ${colors.gray400}`,
                minWidth: '159px',
                minHeight: '57px',
                boxSizing: 'content-box',
              }}
            >
              <div
                css={{
                  marginRight: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
          <span css={{ marginLeft: '16px', ...typography.txtSm }}>{t('Коллегия адвокатов города Москвы')}</span>
        </div>

        <div css={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Link href="/contacts" passHref>
            <a css={{ marginBottom: '8px', color: colors.white, ...typography.txtSm }}>
              <Image src={locationURL} width="16px" height="16px" />
              <span css={{ marginLeft: '8px' }}>{data.contactsData?.address}</span>
            </a>
          </Link>
          {data.contactsData.phones.map(phone => (
            <Link href={`tel:${phone.number}`} passHref key={phone.number}>
              <a css={{ marginBottom: '8px', color: colors.white, ...typography.txtSm }}>
                <Image src={phoneURL} width="16px" height="16px" />
                <span key={phone.desc} css={{ marginLeft: '8px' }}>
                  {phone.number}
                </span>
              </a>
            </Link>
          ))}
          <Link href={`mailto:${data.contactsData?.email}`} passHref>
            <a css={{ marginBottom: '8px', color: colors.white, ...typography.txtSm }}>
              <Image src={emailURL} width="16px" height="16px" />
              <span css={{ marginLeft: '8px' }}>{data.contactsData?.email}</span>
            </a>
          </Link>
        </div>
      </div>

      <div css={{ ...pageWrap, margin: '30px 0' }}>
        <div
          css={{
            ...position.start,
            gridColumnGap: '50px',
          }}
        >
          <Link href="https://fparf.ru/">
            <a target="_blank">
              <Image src={fpaURL} />
            </a>
          </Link>

          <Link href="https://www.advokatymoscow.ru/" passHref>
            <a target="_blank">
              <Image src={ofURL} />
            </a>
          </Link>

          <Link href="https://www.advgazeta.ru/" passHref>
            <a target="_blank">
              <Image src={agURL} />
            </a>
          </Link>
        </div>
      </div>

      <div
        css={{
          ...pageWrap,
          ...typography.txtExtraSm,
          width: '100%',
          backgroundColor: colors.blueSuperDark,
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <Link href={`${data.pages.politics}`} passHref>
          <a>
            <span
              css={{
                ...typography.txtExtraSm,
                ...links.white,
              }}
            >
              {t('Политика обработки персональных данных')}
            </span>
          </a>
        </Link>
        <p
          css={{
            ...typography.txtExtraSm,
            ...position.start,
            alignItems: 'start',
            flexDirection: 'column',
            marginTop: '16px',
          }}
        >
          <span> © 2003—2022 {t('Коллегия адвокатов города Москвы «Барщевский и Партнеры». Все права защищены.')}</span>
          <span>{t('Официальный сайт.')}</span>
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
