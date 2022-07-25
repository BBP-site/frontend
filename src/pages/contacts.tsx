import Link from 'next/link';

import Block from '@components/common/Block';

import { links } from '@scripts/theme';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

const Contacts = () => (
  <main css={{ height: '100%', marginBottom: '32px' }}>
    <h1>Страница контактов</h1>
    <span css={{ marginRight: '32px' }}>Я страница контактов 🙃</span>
    <Link href="/" passHref>
      <a css={{ ...links.blue, display: 'inline-flex', alignItems: 'center' }}>
        <ArrowIcon css={{ marginRight: '10px', transform: 'rotate(-90deg)' }} />
        Назад
      </a>
    </Link>
    <div css={{ marginTop: '16px' }}>
      <Block css={{ margin: 'auto', maxWidth: '500px' }}>
        <h3 css={{ marginBottom: '24px' }}>Контент блока</h3>
        <p>Использовать блок очень удобно!</p>
      </Block>
    </div>
  </main>
);

export default Contacts;
