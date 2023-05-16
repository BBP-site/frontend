import React from 'react';
import { CSSObject } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import { colors, links, pageWrap, position, typography } from '@scripts/theme';
import Link from 'next/link';
import { useCommon } from '@context/common';
import { useMedia } from '@scripts/hooks';
import whatsappURL from '@icons/whatsapp.svg';
import Image from 'next/image';

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

const Menu = ({ type, css, className, openFeedback, onClose }: IMenuProps) => {
  const { data } = useCommon();
  const { tabletLg, tabletLgMin } = useMedia();
  const { t } = useTranslation('');

  const menuCSS: CSSObject = {
    width: '100%',
    color: type === MENU_TYPE.FOOTER ? colors.white : 'none',
    justifyContent: type === MENU_TYPE.FOOTER ? 'space-between' : 'start',
    a: {
      ...(type === MENU_TYPE.FOOTER ? { ...links.white } : { ...links.black }),
      padding: '16px 30px',
      '&:first-of-type': {
        padding: '16px 30px 16px 0',
      },
      [tabletLg]: {
        width: '100%',
        padding: '16px 0',
        ...(type === MENU_TYPE.HEADER && {
          ...pageWrap,
          paddingTop: '12px',
          paddingBottom: '12px',
          ...typography.txtSm,
        }),
        '&:first-of-type': {
          width: '100%',
          padding: '16px 0',
          ...(type === MENU_TYPE.HEADER && { ...pageWrap, paddingTop: '12px', paddingBottom: '12px' }),
        },
        '&:active': {
          backgroundColor: colors.blueDark,
          color: colors.white,
        },
      },
    },
    ...typography.txt,
    ...css,
  };

  const pageWrapCSS: CSSObject = type === MENU_TYPE.FOOTER ? {} : pageWrap;

  return (
    <nav css={{ ...menuCSS, display: 'flex', [tabletLgMin]: { ...pageWrapCSS } }} className={className}>
      <Link href={`${data.pages.home}`} passHref>
        <a>{t('menu.home')}</a>
      </Link>

      <Link href={`${data.pages.collegium}`} passHref>
        <a>{t('О Коллегии')}</a>
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

      <div
        css={{
          marginTop: '8px',
          display: 'none',
          [tabletLg]: { display: type === MENU_TYPE.FOOTER ? 'none' : 'block' },
        }}
      >
        <a
          css={{ display: 'inline-flex', cursor: 'pointer' }}
          onClick={() => {
            if (onClose && openFeedback) {
              onClose();
              setTimeout(() => openFeedback(), 200);
            }
          }}
        >
          Связаться с нами
        </a>

        <Link href={data.contactsData.whatsapp} passHref>
          <a css={position.start}>
            <span css={{ marginRight: '5px' }}>WhatsApp</span>
            <Image src={whatsappURL} width={16} height={16} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
