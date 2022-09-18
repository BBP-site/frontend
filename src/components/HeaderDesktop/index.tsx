import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCommon } from '@context/common';

import { colors, pageWrap, typography } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

import Button from '@components/common/Button';
import Menu, { MENU_TYPE } from '@components/Menu';

import logoIconURL from '@icons/logo.svg';
import logoTextIconURL from '@icons/logoText.svg';

const HeaderDesktop: FC<{ openFeedback: Function }> = ({ openFeedback }) => {
  const { tabletLg } = useMedia();

  const { data } = useCommon();
  const [ruEn, setRuEn] = useState(false);

  return (
    <div
      css={{
        [tabletLg]: {
          display: 'none',
        },
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
              <div
                css={{
                  marginRight: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
            {data.contactsData.phones.map(phone => (
              <p key={phone.desc} css={{ ...typography.txt, color: colors.black, marginBottom: '4px' }}>
                {phone.number}{' '}
                <span
                  css={{
                    color: colors.gray700,
                    fontSize: '14px',
                    lineHeight: '16px',
                  }}
                >
                  {phone.desc}
                </span>
              </p>
            ))}
          </div>
          <Button
            onClick={() => openFeedback()}
            css={{ backgroundColor: colors.blueDark, width: '235px', paddingLeft: 0, paddingRight: 0 }}
          >
            Связаться с нами
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
      <Menu type={MENU_TYPE.HEADER} />
    </div>
  );
};

export default HeaderDesktop;
