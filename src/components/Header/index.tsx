import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCommon } from '@context/common';

import { colors, pageWrap, typography, links, shadows } from '@scripts/theme';

import Button from '@components/common/Button';

import logoIconURL from '@icons/logo.svg';
import logoTextIconURL from '@icons/logoText.svg';

const Header: FC<{}> = () => {
  const { contactsData } = useCommon();
  const [ruEn, setRuEn] = useState(false);

  return (
    <header
      css={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: colors.white,
        ...shadows.bottom,
      }}
    >
      <div
        css={{
          ...pageWrap,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '12px',
          paddingBottom: '12px',
        }}
      >
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
          <span css={{ ...typography.txt, color: colors.black, marginLeft: '16px' }}>
            Коллегия адвокатов города Москвы
          </span>
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div css={{ marginRight: '32px' }}>
            {contactsData.phones.map(phone => (
              <p key={phone.desc} css={{ ...typography.txt, color: colors.black, marginBottom: '4px' }}>
                {phone.number}{' '}
                <span css={{ color: colors.gray700, fontSize: '12px', lineHeight: '16px' }}>{phone.desc}</span>
              </p>
            ))}
          </div>
          <Button css={{ backgroundColor: colors.blueDark, width: '235px', paddingLeft: 0, paddingRight: 0 }}>
            Обратная связь
          </Button>
          <button
            type="button"
            onClick={() => setRuEn(!ruEn)}
            css={{
              ...typography.txtSm,
              fontWeight: 700,
              marginLeft: '32px',
              border: 'none',
              backgroundColor: 'transparent',
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
      <hr css={{ border: `0.5px solid ${colors.gray300}` }} />
      <nav css={{ ...pageWrap, ...typography.txt, display: 'flex' }}>
        <Link href="/about" passHref>
          <a css={{ ...links.black, padding: '16px 30px 16px 0' }}>О Коллегии</a>
        </Link>
        <Link href="/practics" passHref>
          <a css={{ ...links.black, padding: '16px 30px' }}>Практики</a>
        </Link>
        <Link href="/team" passHref>
          <a css={{ ...links.black, padding: '16px 30px' }}>Команда</a>
        </Link>
        <Link href="/projects" passHref>
          <a css={{ ...links.black, padding: '16px 30px' }}>Проекты</a>
        </Link>
        <Link href="/media" passHref>
          <a css={{ ...links.black, padding: '16px 30px' }}>Медиа</a>
        </Link>
        <Link href="/contacts" passHref>
          <a css={{ ...links.black, padding: '16px 0 16px 30px' }}>Контакты</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
