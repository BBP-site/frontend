import { ReactElement } from 'react';
import Link from 'next/link';

import sumvelDetail from '@images/sumvelDetail.webp';
import aparinaDetail from '@images/aparinaDetail.webp';
import barshevskiyDetail from '@images/barshevskiyDetail.webp';
import puhovaDetail from '@images/puhovaDetail.webp';
import speranskayaDetail from '@images/speranskayaDetail.webp';
import mihalevichDetail from '@images/mihalevichDetail.webp';
import vdovinaDetail from '@images/vdovinaDetail.webp';
import barkalovaDetail from '@images/barkalovaDetail.webp';
import khavkinDetail from '@images/khavkinDetail.webp';

import best18 from '@images/2018.webp';
import best19 from '@images/2019.webp';
import best22 from '@images/2022.webp';

import { links } from '@scripts/theme';
import { CSSObject } from '@emotion/react';

interface ITeamDetail {
  id: string;
  img: string;
  name: string;
  position: string;
  degree?: string[];
  degreeCSS?: CSSObject;
  email?: string;
  revardsIcons?: { url: string; width: number; height: number }[];
  experienceHTML?: ReactElement;
  revardsHTML?: ReactElement;
  practicesHTML?: ReactElement;
  mediaHTML?: ReactElement;
}

export const teamDetails: ITeamDetail[] = [
  {
    id: 'barshevskiy',
    img: barshevskiyDetail.src,
    name: 'Барщевский Михаил Юрьевич',
    position: 'Основатель Коллегии',
    degree: ['Заслуженный юрист РФ', 'доктор юридических наук, профессор'],
    experienceHTML: (
      <>
        <p>
          В настоящее время полномочный представитель Правительства Российской Федерации в Конституционном Суде
          Российской Федерации и Верховном Суде Российской Федерации, действительный государственный советник 1 класса.
        </p>

        <p>
          Михаил Барщевский автор многочисленных книг и публикаций, в числе которых и художественные произведения, а
          также один из старейших участников Клуба знатоков «Что? Где? Когда?».
        </p>
      </>
    ),
  },
  {
    id: 'karahanyan',
    img: sumvelDetail.src,
    name: 'Караханян Самвел Гургенович',
    position: 'Президент Коллегии',
    degree: ['адвокат, медиатор', 'доктор юридических наук'],
    email: 'karakhanian@bbp.ru',
    revardsIcons: [
      { url: best18.src, width: 56, height: 51 },
      { url: best19.src, width: 56, height: 51 },
      { url: best22.src, width: 56, height: 51 },
    ],
    experienceHTML: (
      <>
        <p>Общий стаж юридической практики более 30 лет. Стаж работы адвокатом более 20 лет.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Налоговое право</li>
          <li>Корпоративное право</li>
          <li>Законодательство о ценных бумагах</li>
          <li>Валютное регулирование</li>
          <li>Авторское и патентное право, защита интеллектуальной собственности</li>
          <li>Защита по уголовным делам в сфере экономической деятельности</li>
          <li>Представительство в арбитражных судах</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          Караханян С.Г. имеет многочисленные статьи, в том числе монографии в области налогового, уголовного права,
          различных судебных споров, а также о профессиональной деятельности адвоката.
        </p>

        <p>
          Караханян С.Г. О деятельности адвоката по защите налогоплательщиков в уголовном судопроизводстве: Проблемы
          доказывания монография. - М.: Изд-во «Интеллект-Центр», 2003.
        </p>

        <p>Караханян С.Г. Адвокатура: Этюды о профессии. Монография. - М.: Издательство «ОВЛ», 2005.</p>

        <p>
          Караханян С.Г. Информационный компонент профессиональной компетентности адвоката. - М.: Издательство «ОВЛ»,
          2007.
        </p>

        <p>П. Баренбойм, С. Караханян, Д. Кравченко «Психологическая пытка в России и за рубежом» - М.: ЛУМ, 2016.</p>

        <p>
          и{' '}
          <Link href="/media" passHref>
            <a css={links.blue}>другие</a>
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'barkalova',
    img: barkalovaDetail.src,
    name: 'Баркалова Ольга Имануиловна',
    position: 'Старший партнер, адвокат',
    degree: ['кандидат филологических наук', 'доктор исторических наук, профессор РАН'],
    experienceHTML: (
      <>
        <p>Стаж юридической практики с 1983 года.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Наследственное право</li>
          <li>Семейное право</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          Баркалова О.И. «Интеллигенция и власть: советский опыт (вторая половина ХХ века)» - М.: Типография «Новости»,
          2007.
        </p>
      </>
    ),
  },
  {
    id: 'mihalevich',
    img: mihalevichDetail.src,
    name: 'Михалевич Елена Владимировна',
    position: 'Управляющий партнер',
    degree: ['адвокат, медиатор'],
    email: 'mikhalevich@bbp.ru',
    experienceHTML: (
      <>
        <p>Стаж юридической практики с 2005 года.</p>

        <p>
          Отмечена в личном рейтинге Право.ру ТОП-300 как рекомендованные юристы в отрасли «Разрешение споров в судах
          общей юрисдикции», «Семейное и наследственное право».
        </p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Гражданское право</li>
          <li>Семейное право</li>
          <li>Трудовое право</li>
          <li>Дела по защите чести, достоинства и деловой репутации</li>
          <li>Наследственное право</li>
          <li>Договорное право</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          Автор книг «Обработка персональных данных: анализ законодательства и судебной практики» и «Как сохранить
          коммерческую тайну: анализ законодательства и практические рекомендации» издательства «Редакция «Российской
          газеты».
        </p>
        <p>
          Имеет ряд научно-практических публикаций в профессиональных изданиях по вопросам защиты чести, достоинства и
          деловой репутации, в области трудовых отношений и защите персональных данных.
        </p>
      </>
    ),
  },
  {
    id: 'speranskaya',
    img: speranskayaDetail.src,
    name: 'Сперанская Татьяна Владимировна',
    position: 'Партнер, адвокат',
    degree: [],
    email: 'speranskaya@bbp.ru',
    experienceHTML: (
      <>
        <p>Стаж юридической практики более 25 лет.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Защита по уголовным делам на всех стадиях уголовного преследования</li>
          <li>Судебные процессы с участием присяжных заседателей</li>
          <li>Представление интересов потерпевших в уголовном процессе</li>
        </ul>

        <p>Имеет Благодарность Ивановской областной думы за добросовестный труд в области защиты прав граждан.</p>
      </>
    ),
  },
  {
    id: 'vdovina',
    img: vdovinaDetail.src,
    name: 'Вдовина Александра Олеговна',
    position: 'Адвокат, медиатор',
    degree: [],
    email: 'vdovina@bbp.ru',
    experienceHTML: (
      <>
        <p>Стаж юридической практики с 2014 года.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Корпоративное право</li>
          <li>Представительство в арбитражных судах</li>
          <li>Защита интеллектуальной собственности</li>
          <li>Земельное право</li>
          <li>Семейное право</li>
        </ul>
      </>
    ),
  },
  {
    id: 'puhova',
    img: puhovaDetail.src,
    name: 'Пухова Мария Михайловна',
    position: 'Адвокат',
    experienceHTML: (
      <>
        <p>Общий стаж юридической практики с 2019 года.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Гражданское право</li>
          <li>Корпоративное право</li>
          <li>Представительство в арбитражных судах, судах общей юрисдикции</li>
        </ul>
        <p>
          Автор и ведущая подкастов «Барщевский и Партнеры. Адвокатские истории». Соавтор просветительского
          онлайн-проекта Femida.project.
        </p>
      </>
    ),
  },
  {
    id: 'aparina',
    img: aparinaDetail.src,
    name: 'Апарина Ксения Васильевна',
    position: 'Юрист',
    experienceHTML: (
      <>
        <p>Общий стаж юридической практики с 2020 года.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Уголовное право</li>
          <li>Уголовное судопроизводство</li>
          <li>Административное право</li>
        </ul>
      </>
    ),
  },
  {
    id: 'khavkin',
    img: khavkinDetail.src,
    name: 'Хавкин Павел Витальевич',
    position: 'Адвокат',
    experienceHTML: (
      <>
        <p>Юридический стаж с 2004 года, в статусе адвоката – с 2006 года.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>корпоративное и банковское право</li>
          <li>банкротство</li>
          <li>строительные и земельные споры</li>
          <li>защита по уголовным делам в сфере экономических преступлений</li>
        </ul>
      </>
    ),
  },
];

export const teamDetailsEn: ITeamDetail[] = [
  {
    id: 'barshevskiy',
    img: barshevskiyDetail.src,
    name: 'Mikhail Barshchevsky',
    position: 'Founder of the Association',
    degree: ['Honored Lawyer of the Russian Federation', 'Doctor of Law, Professor'],
    experienceHTML: (
      <>
        <p>
          At the present time, a plenipotentiary representative of the Government of the Russian Federation in the
          Constitutional Court of the Russian Federation and the Supreme Court of the Russian Federation, Full State
          Counsellor of 1st Class.
        </p>

        <p>
          Mikhail Barshchevsky is the author of numerous books and publications, including works of fiction, and one of
          the oldest members of What? Where? When? Experts.
        </p>
      </>
    ),
  },
  {
    id: 'karahanyan',
    img: sumvelDetail.src,
    name: 'Samvel Karakhanyan',
    position: 'President of the Association',
    degree: ['attorney, mediator', 'doctor of law'],
    email: 'karakhanian@bbp.ru',
    revardsIcons: [
      { url: best18.src, width: 56, height: 51 },
      { url: best19.src, width: 56, height: 51 },
      { url: best22.src, width: 56, height: 51 },
    ],
    experienceHTML: (
      <>
        <p>Total experience of practicing law for over 30 years. 20 years of experience as a lawyer.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Tax law</li>
          <li>Corporate law</li>
          <li>Securities laws</li>
          <li>Currency regulation</li>
          <li>Copyright and patent law, protection of intellectual property</li>
          <li>Defense in criminal cases in the field of economic activity</li>
          <li>Representation in arbitration courts</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          S.G. Karakhanyan has numerous articles, including monographs on tax law, criminal law, various court disputes,
          and on the professional activities of a lawyer.
        </p>

        <p>
          Karakhanyan S.G. On the activity of a lawyer for the protection of taxpayers in criminal proceedings: Problems
          of proof monograph. - M.: Publishing house Intellect-Center, 2003.
        </p>

        <p>Karakhanyan S.G. Advocacy: Etudes on the Profession. Monograph. - M: Publishing House OVL, 2005.</p>

        <p>
          Karakhanyan S.G. Information component of the professional competence of a lawyer. - M: Publishing house OVL,
          2007.
        </p>

        <p>P. Barenboim, S. Karakhanyan, D. Kravchenko, Psychological Torture in Russia and Abroad - M: LUM, 2016.</p>

        <p>
          <Link href="/media" passHref>
            <a css={links.blue}>etc.</a>
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'barkalova',
    img: barkalovaDetail.src,
    name: 'Olga Barkalova',
    position: 'Senior partner, attorney',
    degree: [
      'candidate of Philological Sciences',
      'Doctor of Historical Sciences, professor of the Russian Academy of Sciences',
    ],
    experienceHTML: (
      <>
        <p>Experience of practicing law since 1983.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Inheritance law</li>
          <li>Family law</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          O.I. Barkalova "Intellectuals and Power: The Soviet Experience (Second Half of the 20th Century). - M:
          Publishing house Novosti, 2007.
        </p>
      </>
    ),
  },
  {
    id: 'mihalevich',
    img: mihalevichDetail.src,
    name: 'Elena Mikhalevich',
    position: 'Managing partner',
    degree: ['attorney, mediator'],
    email: 'mikhalevich@bbp.ru',
    experienceHTML: (
      <>
        <p>Experience of practicing law since 2005. In the Association since 2015.</p>

        <p>
          Noted in the personal rating of Pravo.ru TOP-300 as the recommended lawyers in the field of "Dispute
          Resolution in Courts of General Jurisdiction", "Family and Inheritance Law".
        </p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Civil law</li>
          <li>Family law</li>
          <li>Labor law</li>
          <li>Cases for the protection of honor, dignity and business reputation</li>
          <li>Inheritance law</li>
          <li>Contract law</li>
        </ul>
      </>
    ),
    mediaHTML: (
      <>
        <p>
          Author of the books "Processing of Personal Data: analysis of legislation and court practice" and "How to Keep
          Trade Secrets: analysis of legislation and practical recommendations” published by the “Editorial Board of
          Rossiyskaya Gazeta”.
        </p>
        <p>
          Elena has a number of scientific and practical publications in professional publications on the protection of
          honor, dignity and business reputation, in the field of labor relations and personal data protection.
        </p>
      </>
    ),
  },
  {
    id: 'speranskaya',
    img: speranskayaDetail.src,
    name: 'Tatiana Speranskaia',
    position: 'Partner, attorney',
    degree: [],
    email: 'speranskaya@bbp.ru',
    experienceHTML: (
      <>
        <p>Experience of practicing law for more than 25 years.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Criminal defense at all stages of criminal proceedings</li>
          <li>At-trial procedure nisi prius</li>
          <li>Representation of victims in criminal proceedings</li>
        </ul>

        <p>
          She has a commendation from the Ivanovo Regional Duma for her diligent work in the protection of citizens'
          rights.
        </p>
      </>
    ),
  },
  {
    id: 'vdovina',
    img: vdovinaDetail.src,
    name: 'Alexandra Vdovina',
    position: 'Attorney, mediator',
    degree: [],
    email: 'vdovina@bbp.ru',
    experienceHTML: (
      <>
        <p>Experience of practicing law since 2014.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Corporate law</li>
          <li>Representation in arbitration courts</li>
          <li>Intellectual property protection</li>
          <li>Land law</li>
          <li>Family law</li>
        </ul>
      </>
    ),
  },
  {
    id: 'puhova',
    img: puhovaDetail.src,
    name: 'Maria Pukhova',
    position: 'Attorney',
    experienceHTML: (
      <>
        <p>Total legal practice experience - since 2019.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>Civil law</li>
          <li>Corporate law</li>
          <li>Representation in arbitration courts, courts of general jurisdiction</li>
        </ul>
        <p>
          Author and host of podcasts "Barshchevsky & Partners. Lawyer Stories". Co-author of the online educational
          project Femida.project.
        </p>
      </>
    ),
  },
  {
    id: 'aparina',
    img: aparinaDetail.src,
    name: 'Ksenia Aparina',
    position: 'Lawyer',
    practicesHTML: (
      <>
        <ul>
          <li>Criminal law</li>
          <li>Criminal procedure</li>
          <li>Administrative law</li>
        </ul>
      </>
    ),
  },
  {
    id: 'khavkin',
    img: khavkinDetail.src,
    name: 'Pavel Khavkin',
    position: 'Attorney',
    experienceHTML: (
      <>
        <p>Experience of practicing law since 2004. As an attorney since 2006.</p>
      </>
    ),
    practicesHTML: (
      <>
        <ul>
          <li>civil and corporate law</li>
          <li>litigation</li>
          <li>dispute resolution and insolvency (bancruptcy)</li>
          <li>construction and real estate disputes</li>
          <li>criminal law, including economic crime</li>
        </ul>
      </>
    ),
  },
];
