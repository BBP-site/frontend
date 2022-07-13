import Link from 'next/link';

import { links, pageWrap } from '@scripts/theme';

import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import Block from '@components/common/Block';

import ArrowIcon from '@icons/arrow.svg';

const Home = () => (
  <main css={{ marginBottom: '32px' }}>
    <h1>Заголовок главной страницы</h1>
    <h4>Заголовок 4 уровня</h4>
    <div css={pageWrap}>
      <Button css={{ marginRight: '32px' }}>Hi! Im new button</Button>
      <Link href="/contacts" passHref>
        <a css={{ ...links.blue, display: 'inline-flex', alignItems: 'center' }}>
          Перейти к контактам <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
        </a>
      </Link>
      <p>Параграф</p>
      <p>
        <i>Параграф2</i>
      </p>
      <Button css={{ marginBottom: '32px' }}>Another button</Button>
      <Carousel
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          900: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <Block key={i} css={{ maxWidth: '628px', height: '239px' }}>{`Slide ${i}`}</Block>
        ))}
      </Carousel>
    </div>
  </main>
);

export default Home;
