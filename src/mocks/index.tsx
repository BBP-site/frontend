import { CSSObject } from '@emotion/react';
import { useTranslation } from 'next-i18next';
import { IContent, IContentMedia, IContentPractice } from '@components/hoc-helpers/withConfigContentCard';

import barshevskiyURL from '@images/barshevskiy.webp';
import sumvelURL from '@images/sumvel.webp';
import elenaURL from '@images/elena.webp';
import tatyanaURL from '@images/tatyana.webp';
import barkalovaURL from '@images/barkalova.webp';
import alexandraURL from '@images/alexandra.webp';
// import olgaURL from '@images/olga.webp';
import mariaURL from '@images/maria.webp';
import kseniaURL from '@images/ksenia.webp';

import practice1URL, { ReactComponent as Practice1 } from '@icons/practice1.svg';
import practice2URL, { ReactComponent as Practice2 } from '@icons/practice2.svg';
import practice3URL, { ReactComponent as Practice3 } from '@icons/practice3.svg';
import practice4URL, { ReactComponent as Practice4 } from '@icons/practice4.svg';
import practice5URL, { ReactComponent as Practice5 } from '@icons/practice5.svg';
import practice6URL, { ReactComponent as Practice6 } from '@icons/practice6.svg';

// import penToolURL from '@icons/penTool.svg';
// import archiveURL from '@icons/archive.svg';
import globeURL from '@icons/globe.svg';
import bookOpenURL from '@icons/bookOpen.svg';
import editURL from '@icons/edit.svg';
import headPhonesURL from '@icons/headPhones.svg';
import { MEDIA_TYPE } from '@scripts/enums/common/content-card.enum';

export * from './teamDetails';

const teamCSS: CSSObject = {
  p: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '350px',
  },
};

export const team = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    {
      id: 'barshevskiy',
      contentHtml: (
        <>
          <h6>{t('Барщевский Михаил Юрьевич')}</h6>
          <p>
            {t('Основатель Коллегии')},
            <br /> {t('Заслуженный юрист РФ, д.ю.н.')}
          </p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: barshevskiyURL.src,
    },
    {
      id: 'karahanyan',
      contentHtml: (
        <>
          <h6>{t('Караханян Самвел Гургенович')}</h6>
          <p>
            {t('Президент Коллегии')},
            <br />
            {t('адвокат, д.ю.н.')}
          </p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: sumvelURL.src,
    },
    {
      id: 'mihalevich',
      contentHtml: (
        <>
          <h6>{t('Михалевич Елена Владимировна')}</h6>
          <p>
            {t('Управляющий партнер')},
            <br /> {t('адвокат, медиатор')}
          </p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: elenaURL.src,
    },
    {
      id: 'barkalova',
      contentHtml: (
        <>
          <h6>{t('Баркалова Ольга Имануиловна')}</h6>
          <p>
            {t('Старший партнер, адвокат')}, <br />
            {t('доктор исторических наук')}
          </p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: barkalovaURL.src,
    },
    {
      id: 'speranskaya',
      contentHtml: (
        <>
          <h6>{t('Сперанская Татьяна Владимировна')}</h6>
          <p>{t('Партнер, адвокат')}</p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: tatyanaURL.src,
    },
    {
      id: 'vdovina',
      contentHtml: (
        <>
          <h6>{t('Вдовина Александра Олеговна')}</h6>
          <p>{t('Адвокат, медиатор')}</p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: alexandraURL.src,
      objectPosition: '0px -5px',
    },
    // ушла из Коллегии
    // {
    //   id: 'lapina',
    //   contentHtml: (
    //     <>
    //       <h6>Лапина Ольга Владимировна</h6>
    //       <p>Адвокат</p>
    //       <div className="line" />
    //     </>
    //   ),
    //   contentCSS: teamCSS,
    //   img: olgaURL.src,
    // },
    {
      id: 'puhova',
      contentHtml: (
        <>
          <h6>{t('Пухова Мария Михайловна')} </h6>
          <p>{t('Старший юрист')}</p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: mariaURL.src,
      objectPosition: '0px -5px',
    },
    {
      id: 'aparina',
      contentHtml: (
        <>
          <h6>{t('Апарина Ксения Васильевна')}</h6>
          <p>{t('Юрист')}</p>
          <div className="line" />
        </>
      ),
      contentCSS: teamCSS,
      img: kseniaURL.src,
      objectPosition: '0px -8px',
    },
    // {
    //     id: 'smirnov',
    //     contentHtml: (
    //         <>
    //             <h6>Смирнов Владимир Евгеньевич</h6>
    //             <p>Юрист</p>
    //             <div className="line"/>
    //         </>
    //     ),
    //     contentCSS: teamCSS,
    //     img: smirnovURL.src,
    //     objectPosition: '0px -5px'
    // },
  ];
};
export const practicesMain = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    {
      id: 'civil-arbit',
      title: t('Гражданские и арбитражные споры'),
      contentHtml: (
        <>
          <h6>{t('ГРАЖДАНСКИЕ И АРБИТРАЖНЫЕ СПОРЫ')}</h6>
          <p>
            {t(
              'В арбитражных судах и судах общей юрисдикции наши адвокаты и юристы представляют интересы уже более 30 лет, порой буквально создавая новую практику, имеющую прецедентное значение.'
            )}
          </p>

          <p>
            {t(
              'Мы предоставляем комплексную юридическую помощь на всех этапах спора, начиная от анализа ситуации и формирования правовой позиции, до окончания исполнения судебного решения.'
            )}
          </p>

          <b>{t('Основные обращения по арбитражной практике:')}</b>

          <ul>
            <li>{t('коммерческие споры;')}</li>
            <li>{t('споры, связанные с недвижимостью;')}</li>
            <li>{t('корпоративные споры;')}</li>
            <li>{t('защита прав интеллектуальной собственности;')}</li>
            <li>{t('налоговые споры;')}</li>
            <li>{t('защита деловой репутации;')}</li>
            <li>
              {t(
                'обжалование решений, действий и бездействия государственных органов (в т.ч. Федеральной антимонопольной службы, Таможенной службы, налоговых органов и др.).'
              )}
            </li>
          </ul>

          <b>{t('Основные обращения по разрешению споров в судах общей юрисдикции:')}</b>

          <ul>
            <li>{t('защита прав собственности, в том числе в спорах с государственными органами;')}</li>
            <li>{t('оспаривание сделок;')}</li>
            <li>{t('взыскание убытков, а также задолженностей по договорам, в том числе по договорам займа;')}</li>
            <li>{t('вопросы, связанные с жилищными правоотношениями;')}</li>
            <li>{t('защита чести, достоинства и деловой репутации;')}</li>
            <li>{t('трудовые споры;')}</li>
            <li>{t('семейные споры;')}</li>
            <li>{t('наследственные дела;')}</li>
            <li>{t('возмещение вреда;')}</li>
            <li>{t('иные дела, связанные с гражданско-правовыми отношениями.')}</li>
          </ul>

          <p>
            {t(
              'Коллегия входит в рейтинг юридических фирм Право-300 по отраслям «Арбитражные споры» и «Разрешение споров в судах общей юрисдикции».'
            )}
          </p>
        </>
      ),
      img: practice1URL,
      Img: Practice1,
    },
    {
      id: 'crime-adm',
      title: t('Уголовные и административные дела'),
      contentHtml: (
        <>
          <h6>{t('УГОЛОВНЫЕ И АДМИНИСТРАТИВНЫЕ ДЕЛА')}</h6>

          <p>
            {t(
              'Многие годы наши адвокаты занимают лидирующую позицию по представлению и защите интересов доверителей по уголовным делам, преимущественно экономической направленности. как на стороне защиты, так и потерпевшего.'
            )}
          </p>

          <p>
            {t(
              'Мы осуществляем защиту прав юридических лиц и граждан, в том числе должностных лиц по административным делам различных категорий (в частности, в области персональных данных, интеллектуальных прав, нарушений таможенных правил, на транспорте, в сфере рекламы и др.).'
            )}
          </p>

          <b>{t('Наши услуги по уголовным делам включают:')}</b>
          <ul>
            <li>{t('консультирование по вопросам уголовного права;')}</li>
            <li>
              {t(
                'представление интересов доверителя на всех стадиях уголовного процесса (построение линии защиты на различных стадиях, сопровождение на стадии предварительного следствия, участие в деле в судах первой, апелляционной и кассационной инстанции);'
              )}
            </li>
            <li>{t('участие при проведении допросов, обысков и иных следственных мероприятий;')}</li>
            <li>{t('сбор и предоставление доказательств;')}</li>
            <li>{t('представление интересов доверителя при рассмотрении гражданского иска в уголовном деле.')}</li>
          </ul>

          <p>
            {t(
              'Ведение уголовного дела адвокатами Коллегии – это не только проработка правовой позиции, но и выстраивание верной линии поведения доверителя перед представителями правоохранительных органов, судом и прессой, оказание круглосуточной поддержки доверителю и его близким, сотрудничество с экспертными, оценочными организациями.'
            )}
          </p>
          <br />

          <b>{t('К услугам по административным делам относятся:')}</b>
          <ul>
            <li>{t('консультирование;')}</li>
            <li>{t('анализ материалов и выработка правовой позиции;')}</li>
            <li>{t('сбор доказательств;')}</li>
            <li>{t('подготовка жалоб;')}</li>
            <li>{t('представление интересов в ходе проверок;')}</li>
            <li>{t('обжалование постановлений о привлечении к административной ответственности;')}</li>
            <li>{t('иные услуги, необходимые для защиты прав доверителей.')}</li>
          </ul>
        </>
      ),
      img: practice2URL,
      Img: Practice2,
    },
    {
      id: 'family',
      title: t('Семейные и наследственные споры'),
      contentHtml: (
        <>
          <h6>{t('СЕМЕЙНЫЕ И НАСЛЕДСТВЕННЫЕ СПОРЫ')}</h6>
          <p>
            {t(
              'Что характеризует адвоката по семейным и наследственным делам? Наличие чуткости и чувства такта. И это не менее важно, чем правовая квалификация. Мы умеем найти индивидуальный подход, ведь каждый человек и каждая семья уникальна.'
            )}
          </p>
          <p>
            {t(
              'Если конфликт не удается разрешить путем переговоров и судебный спор неизбежен, наши адвокаты берутся за ведение дел различной сложности, в том числе связанных с разделом многомиллионных активов, акций, долей в организациях, исключительных прав и многое другое.'
            )}
          </p>
          <br />

          <b>{t('Основные запросы по семейным спорам:')}</b>
          <ul>
            <li>{t('консультации в области семейных отношений;')}</li>
            <li>
              {t(
                'подготовка брачных договоров и соглашений о разделе имущества супругов (в том числе сопровождение по нотариальному удостоверению этих сделок);'
              )}
            </li>
            <li>
              {t('расторжение брака, в том числе заключенного за пределами России и/или с иностранными гражданами;')}
            </li>
            <li>
              {t(
                'споры по разделу имущества супругов (включая большое количество активов, акции, доли в организациях, исключительные права и многое другое);'
              )}
            </li>
            <li>{t('определение места жительства детей;')}</li>
            <li>{t('определение порядка общения с детьми;')}</li>
            <li>{t('взыскание алиментов, в том числе в твердой денежной сумме;')}</li>
            <li>{t('установление отцовства, опекунства, усыновления; лишение и восстановление родительских прав.')}</li>
          </ul>

          <b>{t('Основные запросы по наследственным делам:')}</b>
          <ul>
            <li>
              {t(
                'консультации по вопросам о праве на наследование, о завещании (наличие нескольких завещаний, совместное завещание супругов и прочее), об обязательной доле в наследстве и другие вопросы;'
              )}
            </li>
            <li>
              {t(
                'комплексное сопровождение на стадии вступления в наследство (представление интересов наследника у нотариуса, переговоры с другими наследниками и прочее);'
              )}
            </li>
            <li>{t('подготовка соглашений о разделе наследственного имущества;')}</li>
            <li>{t('наследственные споры в суде, в том числе оспаривание завещания;')}</li>
            <li>{t('установление факта принятия наследства;')}</li>
            <li>{t('признание недостойным наследником;')}</li>
            <li>
              {t(
                'учреждение наследственного фонда (полное сопровождение от консультаций до подготовки устава наследственного фонда).'
              )}
            </li>
          </ul>
        </>
      ),
      img: practice3URL,
      Img: Practice3,
    },
  ];
};

export const practices = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    ...practicesMain(),
    {
      id: 'labor-law',
      title: t('Трудовое право'),
      contentHtml: (
        <>
          <h6>{t('ТРУДОВОЕ ПРАВО')}</h6>
          <p>
            {t(
              'Конфликты между работником и работодателем в наше время не редкость. Мы представляем сторон трудовых отношений в спорах, связанных с дисциплинарными взысканиями (в т.ч. увольнением), с восстановлением на работе, о возмещении вреда, а также по защите коммерческой тайны и персональных данных и др.'
            )}
          </p>
          <p>
            {t(
              'Большой блок нашей работы посвящен сотрудничеству с организациями по вопросам правовой поддержки в области трудовых правоотношений с учетом отраслевых и корпоративных особенностей, поскольку принятие превентивных мер позволит выстроить эффективное взаимодействие сторон трудовых отношений и минимизировать наступление судебных тяжб.'
            )}
          </p>
          <br />

          <b>{t('Основные направления в области трудового права:')}</b>
          <ul>
            <li>{t('устные и письменные консультации по вопросам трудового законодательства;')}</li>
            <li>
              {t(
                'правовая экспертиза и разработка локальных нормативных правовых актов (правил внутреннего трудового распорядка, документов по обработке персональных данных, защите коммерческой тайны, должностных инструкций, положения о структурных подразделениях и иные документы);'
              )}
            </li>
            <li>{t('разработка шаблонов трудовых договоров, договоров гражданско-правового характера;')}</li>
            <li>{t('сопровождение переговоров;')}</li>
            <li>{t('досудебное урегулирование;')}</li>
            <li>{t('представление интересов работодателей и работников в суде.')}</li>
          </ul>

          <p>
            {t('Адвокаты нашей Коллегии являются авторами')}{' '}
            <a href="#">{t('книг, связанных с трудовыми отношениями')}</a>.
          </p>
        </>
      ),
      img: practice4URL,
      Img: Practice4,
    },
    {
      id: 'subs-service',
      title: t('Абонентское обслуживание и семейный адвокат'),
      contentHtml: (
        <>
          <h6>{t('АБОНЕНТСКОЕ ОБСЛУЖИВАНИЕ И СЕМЕЙНЫЙ АДВОКАТ')}</h6>
          <p>
            {t(
              'Многие клиенты признавались, что жить становиться значительно проще, когда знаешь, что в любой спорной ситуации можно обратиться к «своему адвокату». В Коллегии уже многие годы осуществляется абонентское обслуживание как компаний, так и граждан, а некоторые доверители являются нашими абонентами с 1993 года.'
            )}
          </p>
          <p>
            {t(
              'Раньше услугой абонентского сопровождения преимущественно пользовались крупные юридические лица, но в последнее время увеличилось число частных клиентов - топ-менеджеров фирм, руководителей государственных органов, политических деятелей и деятеле культуры, делающих выбор в пользу «семейного адвоката».'
            )}
          </p>
          <p>
            {t(
              'Среди наших клиентов компании в сфере авиаперевозок, IT-технологий, ритейла, образования, энергетики, продажи и обслуживания транспортных средств, медицины.'
            )}
          </p>
          <p>
            {t('В рамках')} <b>{t('абонентского обслуживания')}</b>{' '}
            {t(
              'клиенты получают комплексное сопровождение бизнеса, в частности, правовые разъяснения в области корпоративного, договорного, трудового права, оценку рисков по сделкам и судебным спорам и по другим вопросам.'
            )}
          </p>
          <p>
            {t('Плюсы')} <b>{t('«семейного адвоката»')}</b>{' '}
            {t(
              '- такой адвокат уже знаком с доверителем, членами его семьи или контрагентами многие годы, сопровождал его при принятии многих юридически значимых решений. При возникновении вопросов адвокат может приступить к оказанию качественной юридической помощи незамедлительно, не тратя время на выяснение ситуации «с нуля».'
            )}
          </p>
        </>
      ),
      img: practice5URL,
      Img: Practice5,
    },
    {
      id: 'mediation',
      title: t('Медиация'),
      contentHtml: (
        <>
          <h6>{t('МЕДИАЦИЯ')}</h6>
          <p>
            {t(
              'Мирное урегулирование конфликта, как правило, является наилучшим способом разрешения спора. Если после вынесения судебного решения, сохранение продуктивного сотрудничества спорящих сторон представляется уже маловероятным, то в рамках процедуры медиации стороны могут восстановить дружеские отношения, прийти к пониманию, выстроить совместные долгосрочные планы по ведению бизнеса, воспитанию детей и т.п., а также обнаружить новые взаимовыгодные решения.'
            )}
          </p>
          <p>
            {t(
              'Адвокаты Коллегии, прошедшие специальное обучение в сфере медиации, окажут максимальное содействие примирению спорящих сторон путем подготовки и проведения процедуры медиации. Адвокаты Коллегии могут выступить как в роли представителя спорящей стороны, так и непосредственно в качестве медиатора – независимого лица.'
            )}
          </p>
        </>
      ),
      img: practice6URL,
      Img: Practice6,
    },
  ];
};

export const projects: IContent[] = [
  {
    id: 'ob_ustanovlenii_poryadka_obshcheniya_roditelya_s_rebenkom',
    contentHtml: (
      <>
        <h5>Об установлении порядка общения родителя с ребенком</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: 'o_dobrovolnom_oformlenii_ottsovstva',
    contentHtml: (
      <>
        <h5>О добровольном оформлении отцовства</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: 'ob_odnovremennom_initsiirovanii_rastorzheniya_braka_v_dvukh_stranakh',
    contentHtml: (
      <>
        <h5>Об одновременном инициировании расторжения брака в двух странах</h5>
      </>
    ),
    date: '20.12.21',
  },
  {
    id: 'o_razdele_nasledstva',
    contentHtml: (
      <>
        <h5>О разделе наследства</h5>
      </>
    ),
    date: '20.12.21',
  },
];

const projectsMobileCSS: CSSObject = {
  h6: {
    display: '-webkit-box',
    width: '78vw',
    height: '58px',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
};

export const projectsMobile: IContent[] = [
  {
    id: '1',
    contentHtml: (
      <>
        <h6>Об установлении порядка общения родителя с ребенком</h6>
      </>
    ),
    contentCSS: projectsMobileCSS,
    date: '20.12.21',
  },
  {
    id: '2',
    contentHtml: (
      <>
        <h6>О добровольном оформлении отцовства</h6>
      </>
    ),
    contentCSS: projectsMobileCSS,
    date: '20.12.21',
  },
  {
    id: '3',
    contentHtml: (
      <>
        <h6>Об одновременном инициировании расторжения брака в двух странах</h6>
      </>
    ),
    contentCSS: projectsMobileCSS,
    date: '20.12.21',
  },
];

export const medias: IContentMedia[] = [
  {
    id: '156',
    name: 'Эпизод 13. Курортный роман.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '21.06.21',
  },
  {
    id: '155',
    name: 'Эпизод 12. Нескромный ремонт.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '14.06.21',
  },
  {
    id: '154',
    name: 'Эпизод 11. Семейная реликвия.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '07.06.21',
  },
  {
    id: '153',
    name: 'Эпизод 10. Былая роскошь.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '31.05.21',
  },
  {
    id: '152',
    name: 'Эпизод 9. Цирк в суде.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '24.05.21',
  },
  {
    id: '151',
    name: 'Эпизод 8. Три срока подряд – это законно.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '17.05.21',
  },
  {
    id: '150',
    name: 'Эпизод 7. Как случайно обидеть судью.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '10.05.21',
  },
  {
    id: '149',
    name: 'Эпизод 6. Заботливый регистратор.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '03.05.21',
  },
  {
    id: '148',
    name: 'Эпизод 5. На защите чести и достоинства.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '26.04.21',
  },
  {
    id: '147',
    name: 'Эпизод 4. Нежелательное отцовство.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '19.04.21',
  },
  {
    id: '146',
    name: 'Эпизод 3. Сладкое правосудие.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '12.04.21',
  },
  {
    id: '145',
    name: 'Эпизод 2. Отгадайте, кто врет.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '05.04.21',
  },
  {
    id: '144',
    name: 'Барщевский и Партнеры. Адвокатские истории. Эпизод 1. Кормящая бортпроводница.',
    contentHtml: <></>,
    titleIcon: headPhonesURL,
    type: MEDIA_TYPE.PODCAST,
    date: '28.03.21',
  },
  {
    id: '143',
    name: 'Президент Самвел Караханян вошел в список лучших юристов России по версии международного справочника Best Lawyers (рейтинг опубликован в газете "Ведомости")',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '22.04.14',
  },
  {
    id: '142',
    name: 'Коллегия адвокатов города Москвы "Барщевский и Партнеры" стала лауреатом премии "Компания года-2014/Best.ru"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '04.06.14',
  },
  {
    id: '141',
    name: 'Самвел Караханян примет участие в XII ежегодном деловом форуме газеты "Ведомости" "Юридический форум России"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '14.03.16',
  },
  {
    id: '140',
    name: 'Самвел Караханян стал лауреатом ежегодной премии публичной активности "Лучшие в России/Best.ru"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '25.11.14',
  },
  {
    id: '139',
    name: '"Право.ru-300": Коллегия адвокатов "Барщевский и Партнеры" вошла в рейтинг лучших юридических компаний в номинациях "Уголовное право и процесс", "Арбитражное судопроизводство", "Разрешение споров"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '06.12.16',
  },
  {
    id: '138',
    name: 'Коллегия адвокатов города Москвы "Барщевский и Партнеры" наградила победителя конкурса "Лучшие юридические департаменты России - 2017"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '22.05.17',
  },
  {
    id: '137',
    name: 'Опубликованы результаты 9-го рейтинга лучших юристов России по версии Best Lawyers. Президент Самвел Караханян вновь признан одним из лучших юристов России в категории "Арбитраж и Медиация"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '16.06.17',
  },
  {
    id: '136',
    name: 'Адвокат Коллегии добился освобождения клиента из-под домашнего ареста прямо в зале суда',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '30.08.17',
  },
  {
    id: '135',
    name:
      'Адвокаты Самвел Караханян выиграл судебный процесс, по итогам которого вынесено нестандартное для юридической практики решение\n' +
      'Победа за нами!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '29.06.17',
  },
  {
    id: '134',
    name: 'Количество уголовных дел в предпринимательской сфере растет, а количество преступлений – нет',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '14.03.18',
  },
  {
    id: '133',
    name: '"Право.ru-300": Коллегия адвокатов "Барщевский и Партнеры" вошла в рейтинг лучших юридических компаний в номинациях "Уголовное право и процесс" и "Разрешение споров"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '07.12.17',
  },
  {
    id: '132',
    name: 'Экспертное мнение Президента Коллегии Самвела Караханяна. Среднестатистический показатель правовой грамотности в крупных городах России такой же, как в Европе',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '11.04.18',
  },
  {
    id: '131',
    name: '26 марта. Коллегия Адвокатов города Москвы «Барщевский и Партнеры» вошла в рейтинг газеты «Коммерсант».',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '26.03.18',
  },
  {
    id: '130',
    name: 'Президент Коллегии адвокатов Самвел Караханян принял участие в праздновании 100-летия Республики Армения.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '25.05.18',
  },
  {
    id: '129',
    name: 'В многоквартирном доме усложнят процесс перевода жилого помещения в нежилое',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '17.10.18',
  },
  {
    id: '128',
    name: 'Всемирный Парамузыкальный фестиваль 2018.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '10.12.18',
  },
  {
    id: '127',
    name: 'Best Lawyers. Лучшие из лучших.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '25.05.19',
  },
  {
    id: '126',
    name: '25 мая 2019 года в стенах Президиума Российской Академии Наук прошел V Юридический турнир «Servus Legis» в формате интеллектуальной игры «Что? Где? Когда?»',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '28.05.19',
  },
  {
    id: '125',
    name: '4 июля 2019 года в рамках интеллектуального клуба RURSUS XXV прошел турнир «Что? Где? Когда?»',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '04.07.19',
  },
  {
    id: '124',
    name: 'Одно из недавно завершившихся «громких» дел Коллегии',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '03.02.20',
  },
  {
    id: '123',
    name: 'Адвокаты Коллегии продолжают предпринимать меры для отстаивания прав и законных интересов',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '02.03.20',
  },
  {
    id: '122',
    name: 'Адвокат Коллегии признан одними из лучших юристов по версии старейшего юридического агентства Best Lawyers.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '04.06.20',
  },
  {
    id: '121',
    name: 'Адвокаты коллегии адвокатов г. Москвы «Барщевский и Партнеры» сочетают обширную юридическую практику с научной и публицистической деятельностью.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '31.07.20',
  },
  {
    id: '120',
    name: '"В очередь!". Комментарий управляющего партнера Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '02.03.02',
  },
  {
    id: '119',
    name: '"Государство потеряло акции КБ". Комментарий Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '11.07.03',
  },
  {
    id: '118',
    name: '"Адвокаты предлагают установить контроль за Генпрокуратурой". Комментарий адвоката Самвела Караханяна для РБК',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '20.11.03',
  },
  {
    id: '117',
    name: '"У российских судей вскоре может появиться "Кодекс судейской этики". Комментарий адвоката Самвела Караханяна для РБК',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '25.11.03',
  },
  {
    id: '116',
    name: '"JTI должен 2,4 млрд руб.". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '29.06.05',
  },
  {
    id: '115',
    name: '"Самвел Караханян: Решения суда иногда толкуются слишком широко". Интервью президента Коллегии журналу "Консультант"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '14.07.05',
  },
  {
    id: '114',
    name: '"АСВ просит доплатить". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '31.10.05',
  },
  {
    id: '113',
    name: '"Прокуроры недовольны Центробанком". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '02.02.06',
  },
  {
    id: '112',
    name: '"Экономный ВТБ". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '29.03.06',
  },
  {
    id: '111',
    name: '"Центробанк не указ". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '05.04.06',
  },
  {
    id: '110',
    name: '"Высокий уровень пиратства обусловлен отсутствием уважения к интеллектуальному труду в целом". Интервью президента Самвела Караханяна газете "Коммерсантъ"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '22.06.06',
  },
  {
    id: '109',
    name: '"Не все переводы одинаковы". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.06.06',
  },
  {
    id: '108',
    name: '"Без штрафов и комиссий". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '04.09.06',
  },
  {
    id: '107',
    name: 'Президент Самвел Караханян принял участие в пресс-конференции на тему "Эволюция рейдера в условиях вечной коррупции"',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '19.09.06',
  },
  {
    id: '106',
    name: '"Роад-шоу для Путина". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '19.12.06',
  },
  {
    id: '105',
    name: '"МГТС проиграла". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.05.07',
  },
  {
    id: '104',
    name: '"Что теряет Ultra". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.09.07',
  },
  {
    id: '103',
    name: '"Слишком много отказов". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '02.10.07',
  },
  {
    id: '102',
    name: '"Платить не нужно". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.11.07',
  },
  {
    id: '101',
    name: '"Трудная судьба долга Алжира". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.11.07',
  },
  {
    id: '100',
    name: '"В арбитражных спорах в РФ каждый платит сам за себя". Комментарий президента Самвела Караханяна для РБК',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.11.07',
  },
  {
    id: '99',
    name: '«Тайна на $181 млн". Комментарий президента Самвела Караханяна для газеты "Ведомости»',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '24.12.07',
  },
  {
    id: '98',
    name: '"Дело Кукеса". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '30.05.08',
  },
  {
    id: '97',
    name: '"Избрание совета директоров ТНК-Би-Пи Холдинга - неправомерно". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.07.08',
  },
  {
    id: '96',
    name: '"Роберт Дадли перестал быть нелегалом". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '03.07.08',
  },
  {
    id: '95',
    name: '"Иностранные сотрудники могут встать ТНК-ВР еще дороже". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '09.07.08',
  },
  {
    id: '94',
    name: '"Сегодня в Лондоне продолжится судебное заседание по иску компании Шалвы Чигиринского "Сибирь-Энерджи" против "Милхауз Кэпитал". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '21.07.08',
  },
  {
    id: '93',
    name: '"Русал" и "Интерос" продолжают спорить за власть в "Норникеле". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '09.07.08',
  },
  {
    id: '92',
    name: '"Очередной разворот событий вокруг ТНК-ВР". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '23.07.08',
  },
  {
    id: '91',
    name: '"Отъезд Дадли может способствовать разрешению конфликта между акционерами ТНК-ВР". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '25.07.08',
  },
  {
    id: '90',
    name: '"АС Тюменской области признал незаконным формирование списка кандидатов в совет директоров ТНК-ВР". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '31.07.08',
  },
  {
    id: '89',
    name: '"BP готовит иск в арбитраж". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.07.08',
  },
  {
    id: '86',
    name: '"Главу ТНК-ВР Роберта Дадли вновь привлекают к суду". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '03.03.08',
  },
  {
    id: '85',
    name: '"7 лет за бесчестную игру". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '09.02.09',
  },
  {
    id: '84',
    name: '"Сегодня соберется совет директоров швейцарской компании Зульцер". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '08.04.09',
  },
  {
    id: '83',
    name: '"Защита Дерипаски". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.05.09',
  },
  {
    id: '82',
    name: '"Банки облегчат себе преследование заемщиков". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.07.09',
  },
  {
    id: '81',
    name: '"Юридические компании меняют ориентиры". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '04.05.09',
  },
  {
    id: '80',
    name: '"Без лишнего пункта". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.09.09',
  },
  {
    id: '79',
    name: '"Полномочия судьи, которая вела дела ЮКОСа и Дмитрия Довгия прекращены досрочно". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '09.09.09',
  },
  {
    id: '78',
    name: '"ФНС: сперва - налоги, потом - зарплата". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '23.09.09',
  },
  {
    id: '77',
    name: '"СТС-Медиа обвинил своего бывшего президента в работе на конкурентов". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '10.11.09',
  },
  {
    id: '76',
    name: '"Ущерб репутации "СУ-155" суд оценил в 10 млн руб.". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '23.12.09',
  },
  {
    id: '75',
    name: '"ТНК-ВР требует вернуть излишки". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '18.01.10',
  },
  {
    id: '74',
    name: '"Жители "Речника" требуют от Лужкова 100 млрд рублей". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '04.02.10',
  },
  {
    id: '73',
    name: '"ТНК-ВР хочет рассчитаться с ФТС". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '18.01.10',
  },
  {
    id: '72',
    name: '"Березовский остался без квартиры". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.01.10',
  },
  {
    id: '71',
    name: '"Российские власти хотят выдавать email как паспорт". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '09.02.10',
  },
  {
    id: '70',
    name: '"Защититься от вкладчика". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '14.05.10',
  },
  {
    id: '69',
    name: '"Для экс-коллег Чичваркина выбирают присяжных". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.08.10',
  },
  {
    id: '68',
    name: '"Судебные приставы заставят платить по долгам". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.10.10',
  },
  {
    id: '67',
    name: '"Альфа-банк поможет Номос-банку взыскать залог с владельца ПИКа Юрия Жукова". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.05.10',
  },
  {
    id: '66',
    name: '"Роспотребнадзор оставил коллекторские агентства вне закона". Комментарий президента Самвела Караханяна для "Вести ФМ"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '30.08.10',
  },
  {
    id: '65',
    name: '"Здание российского тогрпредства в Швеции отбирают за долги". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.10.10',
  },
  {
    id: '64',
    name: '"Как определить стоимость судостроительных активов Сергея Пугачева". Комментарий президента Самвела Караханяна для газеты "Ведомости"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '29.10.10',
  },
  {
    id: '63',
    name: '"Суд присяжных оправдал экс-сотрудников "Евросети". Комментарии президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '18.11.10',
  },
  {
    id: '62',
    name: 'Президент Самвел Караханян в программе "Сфера интересов" на телеканале РБК. Тема программы: "Микрофинансовые организации"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '30.01.11',
  },
  {
    id: '61',
    name: '"Новый мэр Москвы не отдыхает". Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '01.11.10',
  },
  {
    id: '60',
    name: '"Виктор Бут встретится сегодня с женой". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '24.01.11',
  },
  {
    id: '59',
    name: '"Война ведомств". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '18.02.11',
  },
  {
    id: '58',
    name: '"Российским компаниям предложили "антикоррупционные оговорки". Комментарий президента Самвела Караханяна для "Вести ФМ"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '08.07.11',
  },
  {
    id: '57',
    name: '"Владельцев офшорного бизнеса попросят "открыть личико". Комментарий президента Самвела Караханяна для "Вести ФМ"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '20.07.11',
  },
  {
    id: '56',
    name: '"Лондонский суд продлил допрос Романа Абрамовича". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '07.11.11',
  },
  {
    id: '55',
    name: '"Фирмы-однодневки попали под прицел". Комментарий президента Самвела Караханяна для "Вести ФМ"',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '13.10.11',
  },
  {
    id: '54',
    name: '"Orkla развязала шоколадную войну". Комментарий президента Самвела Караханяна для РБК daily',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.11.12',
  },
  {
    id: '53',
    name: '"Замерзать-то вам, что за непонятный гуманизм в этой ситуации". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '11.04.14',
  },
  {
    id: '52',
    name: '"Украина намерена судиться с "Газпромом". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.04.14',
  },
  {
    id: '51',
    name: '"Франция хочет оставить Россию без "Мистралей". МИД РФ: "Хорошо, де Голль не видит". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '04.09.14',
  },
  {
    id: '50',
    name: '"Продолжение переговоров по газу: представители Украины едут в Европу". Комментарий президента Самвела Караханяна для Business FM',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '17.06.14',
  },
  {
    id: '49',
    name: 'Повлияет ли дело главы МЭР на приватизацию пакета "Роснефти"? Комментарий президента Самвела Караханяна для BFM.ru',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '16.11.16',
  },
  {
    id: '48',
    name: 'Самвел Караханян, Президент коллегии «Барщевский и партнеры», дал комментарий для делового издания Business FM.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '05.03.18',
  },
  {
    id: '47',
    name: 'Судебная переквалификация не нарушает принцип свободы договора.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.03.18',
  },
  {
    id: '46',
    name: 'Когда мигранта не депортируют за нарушения. Адвокат Елена Михалевич комментирует кейсы, предоставленные изданием Право ру.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '14.06.18',
  },
  {
    id: '45',
    name: 'Президент Коллегии адвокатов города Москвы «Барщевский и партнеры» Самвел Караханян рассуждает по поводу состояния современной российской судебной системы.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '02.07.18',
  },
  {
    id: '44',
    name: 'Адвокат Коллегии Елена Михалевич рассуждает о том, как отразится на кредиторах законопроект об оставлении должникам прожиточного минимума при взыскании долгов.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '03.07.18',
  },
  {
    id: '43',
    name: 'Государственные и муниципальные органы не любят проигрывать в судах. Варианты развития событий разъясняет адвокат Елена Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.08.18',
  },
  {
    id: '42',
    name: 'Адвокат Коллеги адвокатов города Москвы «Барщевский и Партнеры» Елена Михалевич комментирует самые интересные кейсы ВС за последнее время.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.08.18',
  },
  {
    id: '41',
    name: 'Как получить в собственность чужое и бесхозяйное имущество? Свои комментарии для Право ру по этому поводу дает юрист Коллегии Александра Диденко.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '12.09.18',
  },
  {
    id: '40',
    name: 'Налоги на имущество граждан за прошлый год рассчитали по-новому. Президент Коллегии Самвел Караханян поясняет для газеты «Ведомости» некоторые из нюансов новой инициативы налоговых органов.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '26.10.18',
  },
  {
    id: '39',
    name: 'Как получить налоговый вычет жителям Московской области? Куда обращаться жителям Подмосковья за налоговым вычетом и какие документы нужно собрать. Объясняет юрист Коллегии Александра Вдовина.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '30.11.18',
  },
  {
    id: '38',
    name: 'Право на забвение. Как оно работает в рунете. Елена Михалевич, адвокат Коллегии, считает, что законодатель всё-таки обязал поисковики самостоятельно проверять предоставленные заявителем сведения.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '11.12.18',
  },
  {
    id: '37',
    name: 'Как фрилансерам накопить на пенсию? Какие периоды включает в себя трудовой стаж? Разъяснения дает адвокат Коллегии Елена Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '07.02.19',
  },
  {
    id: '36',
    name: 'Трудовые споры. Как призвать работодателя к ответу? Ситуацию разбирает юрист Коллегии Александра Вдовина.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '22.03.19',
  },
  {
    id: '35',
    name: 'Можно ли что-то менять в протоколе о направлении на медицинское освидетельствование? Отвечает юрист Коллегии Александра Вдовина.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '27.03.19',
  },
  {
    id: '34',
    name: 'Какие права есть у сотрудников предприятий-банкротов, «АиФ» предлагает обзор проблемы. Комментирует Елена Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.06.19',
  },
  {
    id: '33',
    name: 'Блоггер-миллионник... Зачастую его страничка популярнее некоторых СМИ. Однако, он ни за что не отвечает, распространяя информацию... Благо это или зло?',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.05.19',
  },
  {
    id: '32',
    name: 'Самые интересные законопроекты июня: комментирует адвокат Коллегии Елена Михалевич',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '12.07.19',
  },
  {
    id: '31',
    name: 'Какие права есть у сотрудников предприятий-банкротов, «АиФ» предлагает обзор проблемы. Комментирует Елена Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '28.06.19',
  },
  {
    id: '30',
    name: 'С международным женским днем!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '08.03.22',
  },
  {
    id: '29',
    name: 'С Днем защитника Отечества!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '23.02.22',
  },
  {
    id: '28',
    name: 'Управляющий партнер и адвокат Коллегии Елена Михалевич в рейтинге Право-300.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '14.02.22',
  },
  {
    id: '27',
    name: 'Поздравляем с новым 2022 годом!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '31.12.21',
  },
  {
    id: '26',
    name: 'Коллегия в очередном рейтинге Право-300.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '03.12.21',
  },
  {
    id: '25',
    name: 'Комментарий Управляющего партнера, адвоката Коллегии Елены Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '18.11.21',
  },
  {
    id: '24',
    name: 'Комментарий Управляющего партнера, адвоката Коллегии Елены Михалевич.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '19.03.21',
  },
  {
    id: '23',
    name: 'Президент и адвокат Коллегии Самвел Караханян в международном рейтинге Best Lawyers.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '11.06.21',
  },
  {
    id: '22',
    name: 'Публикация Управляющего партнера, адвоката Коллегии Елены Михалевич.',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '11.05.21',
  },
  {
    id: '21',
    name: 'Коллегия запустила подкасты.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '31.03.21',
  },
  {
    id: '20',
    name: 'Комментарий адвоката Коллегии Александры Вдовиной.',
    contentHtml: <></>,
    titleIcon: editURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '19.03.21',
  },
  {
    id: '19',
    name: 'Поздравляем с 23 февраля!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '23.02.21',
  },
  {
    id: '18',
    name: 'Публикация адвоката Коллегии Александра Гетманова в Адвокатской газете.',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '05.02.21',
  },
  {
    id: '17',
    name: 'Коллегия поздравляет с наступающим 2021 годом!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '31.12.20',
  },
  {
    id: '16',
    name: 'Михаил Юрьевич, с Днем Рождения!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '27.12.20',
  },
  {
    id: '15',
    name: 'Коллегия в рейтинге Право-300',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '14.12.20',
  },
  {
    id: '14',
    name: 'С Днем Конституции!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '12.12.20',
  },
  {
    id: '13',
    name: 'Поздравляем с днем юриста!',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '03.12.20',
  },
  {
    id: '12',
    name: 'Коллегии адвокатов «Барщевский и Партнеры» - 30 лет.',
    contentHtml: <></>,
    titleIcon: globeURL,
    type: MEDIA_TYPE.NEWS_EVENT,
    date: '02.12.20',
  },
  {
    id: '11',
    name: 'Вышла в свет вторая книга партнера Коллегии Елены Михалевич «Как сохранить коммерческую тайну: анализ законодательства и практические рекомендации».',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '11.08.20',
  },
  {
    id: '10',
    name: 'В свет вышла первая книга адвоката Коллегии адвокатов города Москвы "Барщевский и Партнеры" Елены Михалевич. «Обработка персональных данных: анализ законодательства и судебной практики»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '27.09.19',
  },
  {
    id: '9',
    name: '«Уволили сотрудника за прогулы и запои? Не дайте ему вернуться». Статья адвоката Елены Михалевич для журнала «Генеральный директор»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '22.02.17',
  },
  {
    id: '8',
    name: '«Чем заемщику грозит нотариус. Какие подводные камни таит новая внесудебная процедура взыскания банками долгов с граждан». Статья президента Самвела Караханяна для газеты «Ведомости»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '23.12.16',
  },
  {
    id: '7',
    name: 'Интервью президента Самвела Караханяна Национальному банковскому журналу (NBJ)',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.COMMENT_MEDIA,
    date: '15.06.16',
  },
  {
    id: '6',
    name: 'Интервью президента Коллегии Самвела Караханяна журналу «АЭРОФЛОТ PREMIUM»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '07.03.16',
  },
  {
    id: '5',
    name: 'В январе 2016 года в свет вышла книга «Психологическая пытка в России и за рубежом»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '13.01.16',
  },
  {
    id: '4',
    name: '«Взаимодействие с ФАС: современные правовые реалии». Статья президента Самвела Караханяна для журнала «Рынок ценных бумаг»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '10.11.08',
  },
  {
    id: '3',
    name: '«Картельные соглашения в условиях российского рынка». Статья президента Самвела Караханяна для журнала «Рынок ценных бумаг»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '01.10.08',
  },
  {
    id: '2',
    name: '«Трансфертное ценообразование и современные налоговые реалии». Статья президента Самвела Караханяна для журнала «Рынок ценных бумаг»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '01.10.08',
  },
  {
    id: '1',
    name: '«Инициатива государства по организации биржевой торговли газом: текущая ситуация, проблемы и перспективы». Статья президента Самвела Караханяна для журнала «Рынок ценных бумаг»',
    contentHtml: <></>,
    titleIcon: bookOpenURL,
    type: MEDIA_TYPE.PUBLICATION,
    date: '01.09.08',
  },
];
