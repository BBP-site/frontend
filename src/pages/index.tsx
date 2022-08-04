import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { colors, links, pageWrap, pageWrapS, position, typography } from '@scripts/theme';
import { CARD_TYPE } from '@scripts/enums/common/content-card.enum';
import { useMedia } from '@scripts/hooks';

import Banner from '@components/common/Banner';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import ContentSection from '@components/common/contentSection';
import ParticlesMesh from '@components/ParticlesMesh';
import ContentCard from '@components/common/ContentCard';
import Map from '@components/Map';
import FeedbackForm from '@components/FeedbackForm';
import withConfigContentCard, { IContent } from '@components/hoc-helpers/withConfigContentCard';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';
import practice1URL from '@icons/practice1.svg';
import practice2URL from '@icons/practice2.svg';
import practice3URL from '@icons/practice3.svg';
import sumvelURL from '@images/sumvel.webp';
import elenaURL from '@images/elena.webp';
import tatyanaURL from '@images/tatyana.webp';
import alexandraURL from '@images/alexandra.webp';
import olgaURL from '@images/olga.webp';
import mariaURL from '@images/maria.webp';
import kseniaURL from '@images/ksenia.webp';
import rating1URL from '@images/rating1.webp';
import rating2URL from '@images/rating2.webp';
import rating3URL from '@images/rating3.webp';
import barjevskyURL from '@images/barjevsky.webp';
import penToolURL from '@icons/penTool.svg';
import editURL from '@icons/edit.svg';
import archiveURL from '@icons/archive.svg';
import bookOpenURL from '@icons/bookOpen.svg';
import headPhonesURL from '@icons/headPhones.svg';
import playCircleURL from '@icons/playCircle.svg';

const practices: IContent[] = [
  {
    id: '1',
    contentHtml: (
      <>
        <h6>ГРАЖДАНСКИЕ И АРБИТРАЖНЫЕ СПОРЫ</h6>
        <p>
          В арбитражных судах и судах общей юрисдикции наши адвокаты и юристы представляют интересы уже более 30 лет,
          порой буквально создавая новую практику, имеющую прецедентное значение.
        </p>

        <p>
          Мы предоставляем комплексную юридическую помощь на всех этапах спора, начиная от анализа ситуации и
          формирования правовой позиции, до окончания исполнения судебного решения.
        </p>

        <b>
          <i>Основные обращения по арбитражной практике:</i>
        </b>

        <ul>
          <li>коммерческие споры;</li>
          <li>споры, связанные с недвижимостью;</li>
          <li>корпоративные споры;</li>
          <li>защита прав интеллектуальной собственности;</li>
          <li>налоговые споры;</li>
          <li>защита деловой репутации;</li>
          <li>
            обжалование решений, действий и бездействия государственных органов (в т.ч. Федеральной антимонопольной
            службы, Таможенной службы, налоговых органов и др.).
          </li>
        </ul>

        <b>
          <i>Основные обращения по разрешению споров в судах общей юрисдикции:</i>
        </b>

        <ul>
          <li>защита прав собственности, в том числе в спорах с государственными органами;</li>
          <li>оспаривание сделок;</li>
          <li>взыскание убытков, а также задолженностей по договорам, в том числе по договорам займа;</li>
          <li>вопросы, связанные с жилищными правоотношениями; </li>
          <li>защита чести, достоинства и деловой репутации;</li>
          <li>трудовые споры;</li>
          <li>семейные споры;</li>
          <li>наследственные дела;</li>
          <li>возмещение вреда;</li>
          <li>иные дела, связанные с гражданско-правовыми отношениями.</li>
        </ul>

        <p>
          Коллегия входит в рейтинг юридических фирм Право-300 по отраслям «Арбитражные споры» и «Разрешение споров в
          судах общей юрисдикции».
        </p>
      </>
    ),
    img: practice1URL,
  },
  {
    id: '2',
    contentHtml: (
      <>
        <h6>УГОЛОВНЫЕ И АДМИНИСТРАТИВНЫЕ ДЕЛА</h6>

        <b>
          <i>Уголовная практика</i>
        </b>
        <p>
          Многие годы наши адвокаты занимают лидирующую позицию по представлению и защите интересов доверителей по
          уголовным делам, преимущественно экономической направленности, как на стороне защиты, так и потерпевшего.
        </p>

        <b>
          <i>Наши услуги по уголовным делам включают:</i>
        </b>
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

        <b>
          <i>Административная практика</i>
        </b>
        <p>
          Мы осуществляем защиту прав граждан, в том числе как должностных лиц, и юридических лиц по следующим
          категориям административных дел: в области защиты персональных данных, нарушения авторских и смежных прав,
          изобретательских и патентных прав, в делах по ДТП, сопряженных с крупным ущербом, в области нарушения
          таможенных правил, нарушений на воздушном, железнодорожном, морском и водном транспорте, в том числе в сфере
          перевозок, сфере рекламы.
        </p>
        <br />
        <b>
          <i>К услугам по административным делам относятся:</i>
        </b>
        <ul>
          <li>консультирование;</li>
          <li>анализ материалов и выработка правовой позиции;</li>
          <li>сбор доказательств;</li>
          <li>подготовка жалоб;</li>
          <li>представление интересов в ходе проверок;</li>
          <li>обжалование постановлений о привлечении к административной ответственности;</li>
          <li>иные услуги, необходимые для защиты прав доверителей.</li>
        </ul>
      </>
    ),
    img: practice2URL,
  },
  {
    id: '3',
    contentHtml: (
      <>
        <h6>СЕМЕЙНЫЕ И НАСЛЕДСТВЕННЫЕ СПОРЫ</h6>
        <p>
          Что характеризует адвоката по семейным и наследственным делам? Наличие чуткости и чувства такта. И это не
          менее важно, чем правовая квалификация. Мы умеем найти индивидуальный подход, ведь каждый человек и каждая
          семья уникальна.
        </p>
        <p>
          Если конфликт не удается разрешить путем переговоров и судебный спор неизбежен, наши адвокаты берутся за
          ведение дел различной сложности, в том числе связанных с разделом многомиллионных активов, акций, долей в
          организациях, исключительных прав и многое другое.
        </p>
        <br />
        <b>
          <i>Основные запросы по семейным спорам:</i>
        </b>
        <ul>
          <li>консультации в области семейных отношений;</li>
          <li>
            подготовка брачных договоров и соглашений о разделе имущества супругов (в том числе сопровождение по
            нотариальному удостоверению этих сделок);
          </li>
          <li>расторжение брака, в том числе заключенного за пределами России и/или с иностранными гражданами;</li>
          <li>
            споры по разделу имущества супругов (включая большое количество активов, акции, доли в организациях,
            исключительные права и многое другое);
          </li>
          <li>определение места жительства детей;</li>
          <li>определение порядка общения с детьми;</li>
          <li>взыскание алиментов, в том числе в твердой денежной сумме;</li>
          <li>установление отцовства, опекунства, усыновления; лишение и восстановление родительских прав.</li>
        </ul>

        <b>
          <i>Основные запросы по наследственным делам:</i>
        </b>
        <ul>
          <li>
            консультации по вопросам о праве на наследование, о завещании (наличие нескольких завещаний, совместное
            завещание супругов и прочее), об обязательной доле в наследстве и другие вопросы;
          </li>
          <li>
            комплексное сопровождение на стадии вступления в наследство (представление интересов наследника у нотариуса,
            переговоры с другими наследниками и прочее);
          </li>
          <li>подготовка соглашений о разделе наследственного имущества;</li>
          <li>наследственные споры в суде, в том числе оспаривание завещания;</li>
          <li>установление факта принятия наследства;</li>
          <li>признание недостойным наследником;</li>
          <li>
            учреждение наследственного фонда (полное сопровождение от консультаций до подготовки устава наследственного
            фонда).
          </li>
        </ul>
      </>
    ),
    img: practice3URL,
  },
];

const team: IContent[] = [
  {
    id: '1',
    contentHtml: (
      <>
        <h5>Караханян Самвел Гургенович</h5>
        <p>Президент, Адвокат, Доктор юридических наук</p>
        <div className="line" />
      </>
    ),
    img: sumvelURL.src,
  },
  {
    id: '2',
    contentHtml: (
      <>
        <h5>Михалевич Елена Владимировна</h5>
        <p>Управляющий партнер, Адвокат</p>
        <div className="line" />
      </>
    ),
    img: elenaURL.src,
  },
  {
    id: '3',
    contentHtml: (
      <>
        <h5>Сперанская Татьяна Владимировна</h5>
        <p>Партнёр, Адвокат</p>
        <div className="line" />
      </>
    ),
    img: tatyanaURL.src,
  },
  {
    id: '4',
    contentHtml: (
      <>
        <h5>Вдовина Александра Олеговна</h5>
        <p>Адвокат</p>
        <div className="line" />
      </>
    ),
    img: alexandraURL.src,
  },
  {
    id: '5',
    contentHtml: (
      <>
        <h5>Лапина Ольга Владимировна</h5>
        <p>Адвокат</p>
        <div className="line" />
      </>
    ),
    img: olgaURL.src,
  },
  {
    id: '6',
    contentHtml: (
      <>
        <h5>Пухова Мария Михайловна </h5>
        <p>Старший юрист</p>
        <div className="line" />
      </>
    ),
    img: mariaURL.src,
  },
  {
    id: '7',
    contentHtml: (
      <>
        <h5>Апарина Ксения Васильевна</h5>
        <p>Юрист</p>
        <div className="line" />
      </>
    ),
    img: kseniaURL.src,
  },
];

const projects: IContent[] = [
  {
    id: '1',
    contentHtml: (
      <>
        <h5>Об установлении порядка общения родителя с ребенком</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: '2',
    contentHtml: (
      <>
        <h5>О добровольном оформлении отцовства</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: '3',
    contentHtml: (
      <>
        <h5>Об одновременном инициировании расторжения брака в двух странах</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: '4',
    contentHtml: (
      <>
        <h5>О разделе наследства</h5>
      </>
    ),
    date: '20.12.21',
  },
];

const medias: IContent[] = [
  {
    id: '1',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский специализируется на защите...</p>
      </>
    ),
    titleIcon: penToolURL,
    title: 'Публикации',
    date: '20.12.21',
  },
  {
    id: '2',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский</p>
      </>
    ),
    titleIcon: editURL,
    title: 'Статьи',
    date: '20.12.21',
  },
  {
    id: '3',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский</p>
      </>
    ),
    titleIcon: archiveURL,
    title: 'События',
    date: '20.12.21',
  },
  {
    id: '4',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский специализируется на защите...</p>
      </>
    ),
    titleIcon: bookOpenURL,
    title: 'Книги',
    date: '20.12.21',
  },
  {
    id: '5',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский</p>
      </>
    ),
    titleIcon: headPhonesURL,
    title: 'Аудио',
    date: '20.12.21',
  },
  {
    id: '6',
    contentHtml: (
      <>
        <p>Партнёр КА г. Москвы «Барщевский и Партнёры» Михаил Вощинский</p>
      </>
    ),
    titleIcon: playCircleURL,
    title: 'Видео',
    date: '20.12.21',
  },
];

const Home = () => {
  const { push } = useRouter();
  const { tabletLg } = useMedia();

  const practicesCards = practices.map(practice => withConfigContentCard(ContentCard, practice, CARD_TYPE.PRACTICE));
  const teamCards = team.map(teamObj => withConfigContentCard(ContentCard, teamObj, CARD_TYPE.TEAM));
  const projectsCards = projects.map(project => withConfigContentCard(ContentCard, project, CARD_TYPE.PROJECTS_MAIN));
  const mediasCards = medias.map(media => withConfigContentCard(ContentCard, media, CARD_TYPE.MEDIA));

  return (
    <main>
      <Banner css={{ marginTop: '11px' }} />

      <section
        css={{
          ...pageWrap,
          paddingBottom: '48px',
          paddingTop: '88px',
          paddingRight: 0,
          display: 'flex',
        }}
      >
        <div
          css={{
            ...position.center,
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <h2 css={{ marginBottom: '8px' }}>Практики</h2>
          <Link href="/practices" passHref>
            <a
              css={{
                ...links.blue,
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              Перейти к разделу <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
            </a>
          </Link>
          <div css={{ maxWidth: '1057px' }}>
            {practicesCards.map((card, index) => (
              <div key={practices[index].id} css={{ marginBottom: '24px' }}>
                {card()}
              </div>
            ))}
          </div>
          <Button theme="empty" onClick={() => push('/practices')} css={{ alignSelf: 'center' }}>
            Показать ещё
          </Button>
        </div>
        <div
          css={{
            paddingTop: '270px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            flexGrow: 1,
            marginLeft: '68px',
          }}
        >
          <div css={{ display: 'flex', alignItems: 'center', marginBottom: '69px' }}>
            <ParticlesMesh
              width={7}
              height={4}
              particlesCSS={{ backgroundColor: colors.blueDark }}
              css={{ marginRight: '43px' }}
            />
            <div css={{ width: '26px', height: '112px', backgroundColor: colors.blue }} />
          </div>
          <div css={{ width: '225px', height: '28px', backgroundColor: colors.cyan }} />
        </div>
      </section>

      <section css={{ ...pageWrap, paddingBottom: '48px', paddingTop: '88px' }}>
        <h2 css={{ marginBottom: '8px', alignSelf: 'flex-start' }}>Команда</h2>
        <Link href="/team" passHref>
          <a
            css={{
              ...links.blue,
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginBottom: '8px',
            }}
          >
            Перейти к разделу <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
          </a>
        </Link>
        <p>
          Мы чтим традиции адвокатуры, постоянно совершенствуем свои теоретические знания, что позволяет нам много лет
          успешно оказывать квалифицированную юридическую помощь. В этом разделе представлены основные члены команды
          Коллегии.
        </p>
        <Carousel
          css={{ marginTop: '32px' }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            900: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          {teamCards.map((card, index) => (
            <div key={team[index].id} css={{ marginBottom: '24px' }}>
              {card()}
            </div>
          ))}
        </Carousel>
      </section>

      <ContentSection
        title="Наши результаты"
        titleLvl={2}
        cssTitle={{ marginBottom: '8px', color: colors.white }}
        css={{ backgroundColor: colors.blueDark, padding: '88px 0', color: colors.white, position: 'relative' }}
      >
        <p>Каждый год мы стремимся к прогрессу и к его достижению</p>
        <div css={{ marginTop: '40px', ...position.spaceBetween, alignItems: 'flex-start' }}>
          <div>
            <p css={{ fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px' }}>31</p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p>лет на рынке</p>
          </div>
          <div>
            <p css={{ fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px' }}>1000+</p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p>
              более 1000
              <br /> завершенных дел
            </p>
          </div>
          <div>
            <p css={{ fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px' }}>500+</p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p>
              более 500
              <br /> дел ежегодно
            </p>
          </div>
          <div>
            <p css={{ fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px' }}>486</p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p>абонентов</p>
          </div>
          <div>
            <p css={{ fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px' }}>456</p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p>обращений</p>
          </div>
        </div>
        <div css={{ ...pageWrap, position: 'absolute', top: 0, left: 0, right: 0 }}>
          <div
            css={{
              width: '254px',
              height: '29px',
              backgroundColor: colors.blueDark,
              position: 'absolute',
              right: 0,
              top: '-28px',
            }}
          />
          <div css={{ display: 'flex', position: 'absolute', top: 0, right: '48px' }}>
            <div css={{ width: '550px', height: '28px', backgroundColor: colors.blue, marginRight: '45px' }} />
            <ParticlesMesh width={4} height={2} css={{ marginTop: '6px' }} />
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Рейтинги"
        titleLvl={2}
        cssTitle={{ marginBottom: '4px' }}
        css={{ backgroundColor: colors.gray100, padding: '92px 0' }}
      >
        <p>Наш профессионализм ежегодно подтверждают международными и российскими рейтинговыми агентствами</p>
        <div css={{ ...position.spaceBetween, alignItems: 'flex-start', marginTop: '40px' }}>
          <div css={{ width: '368px', marginRight: '24px' }}>
            <Image src={rating1URL} width={368} height={192} />
            <p css={{ ...typography.txt, marginTop: '16px' }}>
              Вошли в рейтинг лучших юридических компаний в номинациях &quot;Уголовное право и процесс&quot;,
              &quot;Арбитражное судопроизводство&quot;, &quot;Разрешение споров&quot;
            </p>
          </div>
          <div css={{ width: '368px', marginRight: '24px' }}>
            <Image src={rating2URL} width={368} height={192} />
            <p css={{ ...typography.txt, marginTop: '16px' }}>
              За эффективное взаимодействие с органами государственной власти
            </p>
          </div>
          <div css={{ width: '368px' }}>
            <Image src={rating3URL} width={368} height={192} />
            <p css={{ ...typography.txt, marginTop: '16px' }}>
              Адвокаты Коллегии признаны одними из лучших юристов по версии старейшего юридического агентства Best
              Lawyers.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection isWrapS>
        <div
          css={{
            width: '100%',
            height: '570px',
            position: 'relative',
          }}
        >
          <div
            css={{
              background: `url(${barjevskyURL.src}) center no-repeat`,
              backgroundSize: 'auto 100%',
              width: '100%',
              height: '100%',
              '&::after': {
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(32, 32, 32, 0.5)',
              },
            }}
          />
          <div
            css={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              ...position.center,
              flexDirection: 'column',
              color: colors.white,
            }}
          >
            <h2
              css={{
                marginBottom: '24px',
                padding: '0 16px',
                color: colors.white,
                textAlign: 'center',
              }}
            >
              “Вы найдете дешевле,
              <br />
              но Вы не найдете лучше”
            </h2>
            <p css={{ ...typography.h5 }}>М. Барщевский</p>
          </div>
        </div>
      </ContentSection>

      <section css={{ ...pageWrapS, backgroundColor: colors.white }}>
        <div css={{ display: 'flex' }}>
          <div css={{ backgroundColor: colors.blueDark, width: '33.5%', position: 'relative' }}>
            <div css={{ ...pageWrap, paddingTop: '80px' }}>
              <h2 css={{ color: colors.white }}>Проекты</h2>
              <Link href="/projects" passHref>
                <a
                  css={{
                    ...links.white,
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    marginBottom: '32px',
                  }}
                >
                  Перейти к разделу <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
                </a>
              </Link>
            </div>
            <div css={{ position: 'absolute', left: 0, top: '72px' }}>
              <div
                css={{
                  width: '24px',
                  height: '300px',
                  backgroundColor: colors.cyan,
                }}
              />
              <ParticlesMesh width={10} height={6} css={{ marginTop: '48px' }} />
            </div>
          </div>
          <div
            css={{
              backgroundColor: colors.white,
              paddingTop: '48px',
              paddingBottom: '48px',
              paddingRight: pageWrap.paddingRight,
              paddingLeft: '24px',
              width: '66.5%',
            }}
          >
            <div
              css={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gridTemplateColumns: 'auto auto',
                rowGap: '24px',
              }}
            >
              {projectsCards.map((card, index) => (
                <div key={projects[index].id}>{card()}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="Медиа"
        titleLvl={2}
        cssTitle={{ marginBottom: '8px' }}
        css={{ backgroundColor: colors.gray100, padding: '72px 0' }}
      >
        <Link href="/media" passHref>
          <a
            css={{
              ...links.blue,
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginBottom: '32px',
            }}
          >
            Перейти к разделу <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
          </a>
        </Link>
        <div
          css={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridTemplateColumns: 'auto auto auto',
            rowGap: '16px',
            columnGap: '25px',
          }}
        >
          {mediasCards.map((card, index) => (
            <div key={medias[index].id}>{card()}</div>
          ))}
        </div>
      </ContentSection>

      <section css={{ ...pageWrapS, display: 'flex', [tabletLg]: { display: 'block' } }}>
        <Map css={{ width: '60%', [tabletLg]: { width: 'auto', height: '700px' } }} fullInfo />
        <FeedbackForm css={{ width: '40%', [tabletLg]: { width: 'auto' } }} />
      </section>
    </main>
  );
};

export default Home;
