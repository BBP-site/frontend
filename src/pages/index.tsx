import Link from 'next/link';

import { links, pageWrap } from '@scripts/theme';
import { CARD_TYPE } from '@scripts/enums/common/content-card.enum';

import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import Block from '@components/common/Block';
import ContentCard from '@components/common/ContentCard';
import withConfigContentCard, { IContent } from '@components/hoc-helpers/withConfigContentCard';

import ArrowIcon from '@icons/arrow.svg';

const practiceServerData: IContent = {
  contentHtml: (
    <>
      <h6>Уголовная практика</h6>
      <p>
        Многие годы наши адвокаты занимают лидирующую позицию по представлению и защите интересов доверителей по
        уголовным делам, преимущественно экономической направленности, как на стороне защиты, так и потерпевшего.
      </p>

      <span>Наши услуги по уголовным делам включают:</span>

      <ul>
        <li>консультирование по вопросам уголовного права;</li>
        <li>
          представление интересов доверителя на всех стадиях уголовного процесса (построение линии защиты на различных
          стадиях, сопровождение на стадии предварительного следствия, участие в деле в судах первой, апелляционной и
          кассационной инстанции);
        </li>
        <li>участие при проведении допросов, обысков и иных следственных мероприятий;</li>
        <li>сбор и предоставление доказательств;</li>
        <li>представление интересов доверителя при рассмотрении гражданского иска в уголовном деле.</li>
      </ul>

      <p>
        Ведение уголовного дела адвокатами Коллегии – это не только проработка правовой позиции, но и выстраивание
        верной линии поведения доверителя перед представителями правоохранительных органов, судом и прессой, оказание
        круглосуточной поддержки доверителю и его близким, сотрудничество с экспертными, оценочными организациями.
      </p>
    </>
  ),
  img: '/disputes.png',
};

const teamServerData: IContent = {
  contentHtml: (
    <>
      <h5>Караханян Самвел Гургенович</h5>
      <p>Президент коллегии, Адвокат</p>
      <div className="line" />
    </>
  ),
  img: '/chel.jpg',
};

const mediaServerData: IContent = {
  contentHtml: (
    <>
      <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский специализируется на защите</p>
    </>
  ),
  titleIcon: '/publications.svg',
  title: 'Публикации',
  date: '20.12.21',
};

const projectMainServerData: IContent = {
  contentHtml: (
    <>
      <h5>Дело о включении в реестр кредиторов заведомо...</h5>
      <p>
        Долго совещаясь, коллегия судей согласилась с позицией адвокатов и отменила состоявшиеся судебные акты о
        включении требований в
      </p>
    </>
  ),
  date: '20.12.21',
};

const projectServerData: IContent = {
  contentHtml: (
    <>
      <h6>Спор о краже акций</h6>

      <p>
        <strong>Город</strong> Москва
      </p>

      <p>
        <strong>Клиент</strong> Физическое лицо
      </p>

      <p>
        <strong>Ответчик</strong> Физическое лицо
      </p>
    </>
  ),
  title: 'Уголовное право',
};

const Home = () => {
  const practiceCard = withConfigContentCard(ContentCard, practiceServerData, CARD_TYPE.PRACTICE);
  const teamCard = withConfigContentCard(ContentCard, teamServerData, CARD_TYPE.TEAM);
  const mediaCard = withConfigContentCard(ContentCard, mediaServerData, CARD_TYPE.MEDIA);
  const projectMainCard = withConfigContentCard(ContentCard, projectMainServerData, CARD_TYPE.PROJECTS_MAIN);
  const projectCard = withConfigContentCard(ContentCard, projectServerData, CARD_TYPE.PROJECTS);

  return (
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

        <div css={{ marginBottom: '32px' }}>{practiceCard()}</div>

        <div css={{ marginBottom: '32px' }}>{teamCard()}</div>
        <div css={{ marginBottom: '32px' }}>{mediaCard()}</div>
        <div css={{ marginBottom: '32px' }}>{projectMainCard()}</div>
        <div css={{ marginBottom: '32px' }}>{projectCard()}</div>
      </div>
    </main>
  );
};

export default Home;
