import {ReactElement} from 'react';
import Link from 'next/link';

import sumvelDetail from '@images/sumvelDetail.webp';
import aparinaDetail from '@images/aparinaDetail.webp';
import barshevskiyDetail from '@images/barshevskiyDetail.webp';
import lapinaDetail from '@images/lapinaDetail.webp';
import puhovaDetail from '@images/puhovaDetail.webp';
import speranskayaDetail from '@images/speranskayaDetail.webp';
import mihalevichDetail from '@images/mihalevichDetail.webp';
import smirnovDetail from '@images/smirnovDetail.webp';
import vdovinaDetail from '@images/vdovinaDetail.webp';
import barkalovaDetail from '@images/barkalovaDetail.webp';

import bestLawyer from '@images/bestLawyer.webp';
import globalLawExperts from '@images/globalLawExperts.webp';
import {links} from "@scripts/theme";

interface ITeamDetail {
    id: string;
    img: string;
    name: string;
    position: string;
    degree?: string[];
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
        degree: ['Заслуженный юрист РФ', 'действительный государственный советник 1 класса', 'доктор юридических наук, профессор'],
        experienceHTML: (
            <>
                <p>
                    В настоящее время полномочный представитель Правительства Российской Федерации в
                    Конституционном Суде Российской Федерации и Верховном Суде Российской
                    Федерации.
                </p>

                <p>
                    Михаил Барщевский автор многочисленных книг и публикаций, в числе которых и
                    художественные произведения, а также один из старейших участников Клуба знатоков
                    «Что? Где? Когда?».
                </p>
            </>
        ),
    },
    {
        id: 'karahanyan',
        img: sumvelDetail.src,
        name: 'Караханян Самвел Гургенович',
        position: 'Президент, адвокат',
        degree: ['Доктор юридических наук'],
        email: 'karakhanian@bbp.ru',
        revardsIcons: [
            {url: bestLawyer.src, width: 96, height: 91},
            {url: bestLawyer.src, width: 96, height: 91},
            {url: bestLawyer.src, width: 96, height: 91},
            {url: bestLawyer.src, width: 96, height: 91},
            {url: bestLawyer.src, width: 96, height: 91},
            {url: globalLawExperts.src, width: 266, height: 37},
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
                    Караханян С.Г. имеет многочисленные статьи, в том числе монографии в области
                    налогового, уголовного права, различных судебных споров, а также о профессиональной
                    деятельности адвоката.
                </p>

                <p>
                    Караханян С.Г. О деятельности адвоката по защите налогоплательщиков в уголовном
                    судопроизводстве: Проблемы доказывания монография. - М.: Изд-во «Интеллект-Центр»,
                    2003.
                </p>

                <p>
                    Караханян С.Г. Адвокатура: Этюды о профессии. Монография. - М.: Издательство
                    «ОВЛ», 2005.
                </p>

                <p>
                    Караханян С.Г. Информационный компонент профессиональной компетентности
                    адвоката. - М.: Издательство «ОВЛ», 2007.
                </p>

                <p>
                    П. Баренбойм, С. Караханян, Д. Кравченко «Психологическая пытка в России и за
                    рубежом» - М.: ЛУМ, 2016.
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
        name: 'Баркалова Ольга Имануиловна',
        position: 'Старший партнер, адвокат',
        degree: ['Кандидат филологических наук', 'Доктор исторических наук, профессор РАН'],
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
                    Баркалова О.И. «Интеллигенция и власть: советский опыт (вторая половина ХХ века)» - М.: Типография
                    «Новости»,
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
                <p>
                    Стаж юридической практики 17 лет. В Коллегии с 2015 года.
                    Отмечена в личном рейтинге Право.ру ТОП-300 как рекомендованные юристы в отрасли
                    «Разрешение споров в судах общей юрисдикции», «Семейное и наследственное право».
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
                    Автор книг «Обработка персональных данных: анализ законодательства и судебной
                    практики» и «Как сохранить коммерческую тайну: анализ законодательства и
                    практические рекомендации» издательства «Редакция «Российской газеты».
                </p>
                <p>
                    Имеет ряд научно-практических публикаций в профессиональных изданиях по вопросам
                    защиты чести, достоинства и деловой репутации, в области трудовых отношений и защите
                    персональных данных.
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

                <p>
                    Имеет Благодарность Ивановской областной думы за добросовестный труд в области
                    защиты прав граждан.
                </p>
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
        id: 'lapina',
        img: lapinaDetail.src,
        name: 'Лапина Ольга Владимировна',
        position: 'Адвокат',
        experienceHTML: (
            <>
                <p>Стаж юридической практики 12 лет. Имеет опыт преподавательской деятельности.</p>
            </>
        ),
        practicesHTML: (
            <>
                <ul>
                    <li>Защита по уголовным делам на всех стадиях уголовного преследования</li>
                    <li>Представление интересов потерпевших в уголовном процессе</li>
                </ul>
            </>
        ),
    },
    {
        id: 'puhova',
        img: puhovaDetail.src,
        name: 'Мария Михайловна Пухова',
        position: 'Старший юрист',
        experienceHTML: (
            <>
                <p>Общий стаж юридической практики – 3 года.</p>
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
    {
        id: 'smirnov',
        img: smirnovDetail.src,
        name: 'Смирнов Владимир Евгеньевич',
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
        mediaHTML: (
            <>
                <p>
                    Автор ряда научных статей, посвященных уголовным и уголовно-процессуальным
                    аспектам выявления и расследования преступлений в сфере информационно-телекоммуникационных
                    технологий.
                </p>
            </>
        ),
    },
];
