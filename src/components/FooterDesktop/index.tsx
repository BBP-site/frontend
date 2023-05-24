import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CSSObject } from '@emotion/react';
import { useTranslation } from 'next-i18next';

import { useCommon } from '@context/common';

import { useMedia } from '@scripts/hooks';
import { colors, links, pageWrap, position, typography } from '@scripts/theme';

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
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {LOCALES} from "@scripts/enums/indext";

const footerCss: CSSObject = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const mainBlockCSS: CSSObject = {
  ...position.spaceBetween,
  height: '84px',
  marginLeft: '0',
  marginRight: '0',
  width: '100%',
};

const rightsCSS: CSSObject = {
  ...position.center,
  ...typography.txt,
  width: '100%',
  padding: '5px 0px',
  height: 'auto',
  backgroundColor: colors.blueSuperDark,
};

const FooterDesktop: FC = () => {
  const { t } = useTranslation();
  const { data } = useCommon();
  const { tabletLg } = useMedia();
  const { t } = useTranslation();
  const { locale: activeLocale } = useRouter();

  return (
    <div
      css={{
        ...footerCss,
        [tabletLg]: {
          display: 'none',
        },
      }}
    >
      <div
        css={{
          ...pageWrap,
          margin: '0',
          width: '100%',
        }}
      >
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

            <span css={{ marginLeft: '16px' }}>{t('Коллегия адвокатов города Москвы')}</span>
          </div>

          <div
            css={{
              ...position.end,
              ...typography.txtSm,
              flexDirection: 'row',
              a: {
                ...position.center,
                marginRight: '25px',
                cursor: 'pointer',
                color: colors.white,
              },

              'a:last-of-type': {
                marginRight: '0px',
              },
            }}
          >
            <Link href="/contacts" passHref>
              <a>
                <div css={{ minWidth: '16px' }}>
                  <Image src={locationURL} width="16px" height="16px" />
                </div>

                <span css={{ marginLeft: '8px' }}>{data.contactsData?.address}</span>
              </a>
            </Link>

            <Link href={`tel:${data.contactsData?.phones[0]?.number}`} passHref>
              <a css={{ minWidth: '161px' }}>
                <Image src={phoneURL} width="16px" height="16px" />
                <div css={{ marginLeft: '8px' }}>
                  {data.contactsData.phones.map(phone => (
                    <p key={phone.desc} css={{ ...typography.txtSm, marginBottom: '4px' }}>
                      {phone.number}
                    </p>
                  ))}
                </div>
              </a>
            </Link>

            <Link href={`mailto:${data.contactsData?.email}`} passHref>
              <a css={{ minWidth: '120px' }}>
                <Image src={emailURL} width="16px" height="16px" />
                <span css={{ marginLeft: '8px' }}>{data.contactsData?.email}</span>
              </a>
            </Link>
          </div>
        </div>

        <div css={{ margin: '30px 0' }}>
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
      </div>

      <div css={rightsCSS}>
        <span
          css={{
            ...position.spaceBetween,
            ...pageWrap,
            margin: 0,
            padding: '0 80px',
            width: '100%',
          }}
        >
          <Link href={`${data.pages.politics}`} passHref>
            <a>
              <span
                css={{
                  ...links.white,
                  marginLeft: '8px',
                  fontSize: '18px',
                }}
              >
                {t('Политика обработки персональных данных')}
              </span>
            </a>
          </Link>
          <div css={{ ...position.start, alignItems: 'start', flexDirection: 'column' }}>
            <span>
              {' '}
              © 2003—2022 {t('Коллегия адвокатов города Москвы «Барщевский и Партнеры». Все права защищены.')}
            </span>
            <span>{t('Официальный сайт.')}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default FooterDesktop;
