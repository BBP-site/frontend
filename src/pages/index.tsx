import Link from 'next/link';

import { links, typography, pageWrap } from '@scripts/theme';

import Button from '@components/common/Button';

import ArrowIcon from '@icons/arrow.svg';

const Home = () => {
  return (
    <main css={{ marginBottom: '32px' }}>
      <h1 css={{ ...typography.h1 }}>Заголовок главной страницы</h1>
      <h4 css={typography.h4}>Заголовок 4 уровня</h4>
      <div css={pageWrap}>
        <Button css={{ marginRight: '32px' }}>Hi! I'm new button</Button>
        <Link href="/contacts" passHref>
          <a css={{ ...links.blue, display: 'inline-flex', alignItems: 'center' }}>
            Перейти к контактам <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Home;
