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

import best18 from '@images/2018.webp';
import best19 from '@images/2019.webp';
import best22 from '@images/2022.webp';

import { links } from '@scripts/theme';
import { CSSObject } from '@emotion/react';
import { useTranslation } from 'next-i18next';

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

export const teamDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    {
      id: 'barshevskiy',
      img: barshevskiyDetail.src,
      name: t('Барщевский Михаил Юрьевич'),
      position: t('Основатель Коллегии'),
      degree: [t('Заслуженный юрист РФ'), t('доктор юридических наук, профессор')],
      experienceHTML: (
        <>
          <p>
            {t(
              'В настоящее время полномочный представитель Правительства Российской Федерации в Конституционном Суде Российской Федерации и Верховном Суде Российской Федерации, действительный государственный советник 1 класса.'
            )}
          </p>

          <p>
            {t(
              'Михаил Барщевский автор многочисленных книг и публикаций, в числе которых и художественные произведения, а также один из старейших участников Клуба знатоков «Что? Где? Когда?».'
            )}
          </p>
        </>
      ),
    },
    {
      id: 'karahanyan',
      img: sumvelDetail.src,
      name: t('Караханян Самвел Гургенович'),
      position: t('Президент Коллегии'),
      degree: [t('адвокат, медиатор'), t('доктор юридических наук')],
      email: 'karakhanian@bbp.ru',
      revardsIcons: [
        { url: best18.src, width: 56, height: 51 },
        { url: best19.src, width: 56, height: 51 },
        { url: best22.src, width: 56, height: 51 },
      ],
      experienceHTML: (
        <>
          <p>{t('Общий стаж юридической практики более 30 лет. Стаж работы адвокатом более 20 лет.')}</p>
        </>
      ),
      practicesHTML: (
        <>
          <ul>
            <li>{t('Налоговое право')}</li>
            <li>{t('Корпоративное право')}</li>
            <li>{t('Законодательство о ценных бумагах')}</li>
            <li>{t('Валютное регулирование')}</li>
            <li>{t('Авторское и патентное право, защита интеллектуальной собственности')}</li>
            <li>{t('Защита по уголовным делам в сфере экономической деятельности')}</li>
            <li>{t('Представительство в арбитражных судах')}</li>
          </ul>
        </>
      ),
      mediaHTML: (
        <>
          <p>
            {t(
              'Караханян С.Г. имеет многочисленные статьи, в том числе монографии в области налогового, уголовного права, различных судебных споров, а также о профессиональной деятельности адвоката.'
            )}
          </p>

          <p>
            {t(
              'Караханян С.Г. О деятельности адвоката по защите налогоплательщиков в уголовном судопроизводстве: Проблемы доказывания монография. - М.: Изд-во «Интеллект-Центр», 2003.'
            )}
          </p>

          <p>{t('Караханян С.Г. Адвокатура: Этюды о профессии. Монография. - М.: Издательство «ОВЛ», 2005.')}</p>

          <p>
            {t(
              'Караханян С.Г. Информационный компонент профессиональной компетентности адвоката. - М.: Издательство «ОВЛ», 2007.'
            )}
          </p>

          <p>
            {t(
              'П.Баренбойм, С. Караханян, Д. Кравченко «Психологическая пытка в России и за рубежом» - М.: ЛУМ, 2016.'
            )}
          </p>

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
      name: t('Баркалова Ольга Имануиловна'),
      position: t('Старший партнер, адвокат'),
      degree: [t('кандидат филологических наук'), t('доктор исторических наук, профессор РАН')],
      experienceHTML: (
        <>
          <p>{t('Стаж юридической практики с 1983 года.')}</p>
        </>
      ),
      practicesHTML: (
        <>
          <ul>
            <li>{t('Наследственное право')}</li>
            <li>{t('Семейное право')}</li>
          </ul>
        </>
      ),
      mediaHTML: (
        <>
          <p>
            {t(
              'Баркалова О.И. «Интеллигенция и власть: советский опыт (вторая половина ХХ века)» - М.: Типография «Новости», 2007.'
            )}
          </p>
        </>
      ),
    },
    {
      id: 'mihalevich',
      img: mihalevichDetail.src,
      name: t('Михалевич Елена Владимировна'),
      position: t('Управляющий партнер'),
      degree: [t('адвокат, медиатор')],
      email: 'mikhalevich@bbp.ru',
      experienceHTML: (
        <>
          <p>{t('Стаж юридической практики 17 лет. В Коллегии с 2015 года.')}</p>

          <p>
            {t(
              'Отмечена в личном рейтинге Право.ру ТОП-300 как рекомендованные юристы в отрасли «Разрешение споров в судах общей юрисдикции», «Семейное и наследственное право».'
            )}
          </p>
        </>
      ),
      practicesHTML: (
        <>
          <ul>
            <li>{t('Гражданское право')}</li>
            <li>{t('Семейное право')}</li>
            <li>{t('Трудовое право')}</li>
            <li>{t('Дела по защите чести, достоинства и деловой репутации')}</li>
            <li>{t('Наследственное право')}</li>
            <li>{t('Договорное право')}</li>
          </ul>
        </>
      ),
      mediaHTML: (
        <>
          <p>
            {t(
              'Автор книг «Обработка персональных данных: анализ законодательства и судебной практики» и «Как сохранить коммерческую тайну: анализ законодательства и практические рекомендации» издательства «Редакция «Российской газеты».'
            )}
          </p>
          <p>
            {t(
              'Имеет ряд научно-практических публикаций в профессиональных изданиях по вопросам защиты чести, достоинства и деловой репутации, в области трудовых отношений и защите персональных данных.'
            )}
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
          <p>Стаж юридической практики 25 лет.</p>
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
          <p>Стаж юридической практики 8 лет. В Коллегии с 2014 года </p>
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
      position: 'Старший юрист',
      experienceHTML: (
        <>
          <p>Общий стаж юридической практики 3 года.</p>
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
    // {
    //   id: 'smirnov',
    //   img: smirnovDetail.src,
    //   name: 'Смирнов Владимир Евгеньевич',
    //   position: 'Юрист',
    //   practicesHTML: (
    //     <>
    //       <ul>
    //         <li>Уголовное право</li>
    //         <li>Уголовное судопроизводство</li>
    //         <li>Административное право</li>
    //       </ul>
    //     </>
    //   ),
    //   mediaHTML: (
    //     <>
    //       <p>
    //         Автор ряда научных статей, посвященных уголовным и уголовно-процессуальным аспектам выявления и расследования
    //         преступлений в сфере информационно-телекоммуникационных технологий.
    //       </p>
    //     </>
    //   ),
    // },
  ];
};
