import React from 'react';
import PageTitle from '@components/PageTitle';
import {colors, links, pageWrapS, typography} from '@scripts/theme';

import ContentSection from '@components/common/contentSection';
import Link from 'next/link';
import ParticlesMesh from '@components/ParticlesMesh';
import {useMedia} from "@scripts/hooks";

const Collegium = () => {
    const {tabletLg} = useMedia();

    return (
        <main css={{width: '100%', ...typography.txt}}>
            <PageTitle title="О Коллегии">
                <p>Мы отвечаем за свою работу и придерживаемся традиций и ценностей классической российской
                    адвокатуры.</p>
            </PageTitle>

            <ContentSection css={{padding: '20px 0 48px 0', position: 'relative'}}>
                <div css={{...pageWrapS, position: 'absolute', top: '27px', left: 0, right: 0, pointerEvents: 'none'}}>
                    <ParticlesMesh
                        width={2}
                        height={5}
                        css={{position: 'absolute', top: 0, right: '50px', [tabletLg]: {display: 'none'}}}
                        particlesCSS={{backgroundColor: colors.blueDark}}
                    />
                </div>
                <div css={{
                    ...pageWrapS,
                    position: 'absolute',
                    top: '110px',
                    left: 0,
                    right: 0,
                    pointerEvents: 'none',
                    [tabletLg]: {display: 'none'}
                }}>
                    <div css={{width: '24px', height: '58px', backgroundColor: colors.blue}}/>
                </div>
                <div
                    css={{
                        ...pageWrapS,
                        position: 'absolute',
                        bottom: '240px',
                        left: 0,
                        right: 0,
                        pointerEvents: 'none',
                    }}
                >
                    <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '24px'}}>
                        <div
                            css={{
                                width: '24px',
                                height: '132px',
                                backgroundColor: colors.cyan,
                                marginBottom: '21px',
                                [tabletLg]: {display: 'none'}
                            }}/>
                        <ParticlesMesh width={1} height={5} particlesCSS={{backgroundColor: colors.blueDark}}
                                       css={{[tabletLg]: {display: 'none'}}}/>
                    </div>
                </div>
                <div css={{
                    ...pageWrapS,
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    pointerEvents: 'none'
                }}>
                    <div css={{position: 'relative', float: 'right', [tabletLg]: {display: 'none'}}}>
                        <div css={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <ParticlesMesh
                                    width={2}
                                    height={3}
                                    particlesCSS={{backgroundColor: colors.cyan}}
                                    css={{marginBottom: '11px'}}
                                />
                                <div css={{width: '52px', height: '147px', backgroundColor: colors.cyan}}/>
                            </div>
                            <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <ParticlesMesh
                                    width={2}
                                    height={3}
                                    particlesCSS={{backgroundColor: colors.blue}}
                                    css={{marginBottom: '11px'}}
                                />
                                <div css={{width: '45px', height: '237px', backgroundColor: colors.blue}}/>
                            </div>
                        </div>
                        <div
                            css={{
                                width: '161px',
                                height: '47px',
                                backgroundColor: colors.blueDark,
                                position: 'relative'
                            }}/>
                    </div>
                </div>

                <div css={{maxWidth: '1145px', paddingRight: '40px'}}>
                    <p>
                        Коллегия была основана в 1990 году адвокатом Михаилом Барщевским и членами Московской городской
                        коллегии
                        адвокатов, став первой в СССР частной адвокатской юридической фирмой. С 1993 года фирма носит
                        имя
                        «Барщевский
                        и Партнеры».
                    </p>

                    <p>
                        Уже более 30 лет Коллегия оказывает юридическую помощь и занимает достойное место среди ведущих
                        адвокатских
                        фирм России. Сегодня «Барщевский и Партнеры» - это профессиональная команда практикующих
                        адвокатов и
                        юристов,
                        в числе которых и адвокаты с многолетним опытом и молодые амбициозные юристы.
                    </p>

                    <p>Наши принципы:</p>
                    <ul
                        css={{
                            ...typography.ulDot,
                            'li::marker': {
                                color: colors.blue,
                            },
                        }}
                    >
                        <li>честность;</li>
                        <li>неподкупность;</li>
                        <li>профессионализм;</li>
                        <li>строжайшее сохранение адвокатской тайны;</li>
                        <li>готовность сопереживать проблемам наших доверителей.</li>
                    </ul>

                    <p>
                        Мы специализируемся на защите по уголовным делам, связанным с экономическими преступлениями, на
                        гражданско-правовых спорах, в том числе в сфере корпоративного, семейного, наследственного,
                        трудового права,
                        права интеллектуальной собственности, представляем интересы по налоговым спорам и делам об
                        административных
                        правонарушениях.
                    </p>

                    <p>
                        Много лет одним из основных наших направлений является комплексное сопровождение бизнеса и
                        абонентское
                        обслуживание, в числе постоянных клиентов по этим направлениям компании в сфере авиаперевозок,
                        IT-технологий,
                        ритейла, образования, энергетики, продажи и обслуживания автомобилей, здравоохранения. В
                        последние
                        годы все
                        чаще за абонентским обслуживанием обращаются частные лица – топ- менеджеры крупных компаний,
                        руководители
                        государственных органов, политические деятели и деятели культуры.
                    </p>

                    <p>
                        Строжайший отбор сотрудников и сочетание научной и практической компетенции (членами нашей
                        Коллегии
                        опубликовано десятки
                        <Link href="/media" passHref>
                            <a css={{...links.blue, marginLeft: '5px'}}>научных трудов</a>
                        </Link>
                        ) явилось результатом положительного исхода подавляющего большинства обращений.
                    </p>

                    <p>
                        Постоянное совершенствование теоретических и практических знаний, научная деятельность – все это
                        неотъемлемые
                        части жизни наших сотрудников. В нашей деятельности нам помогает взаимодействие со многими
                        ведущими
                        научными
                        центрами и консультантами из числа виднейших российских правоведов, а также вышедших в отставку
                        судей с
                        многолетним опытом работы. Все это позволяет оказывать действительно высококвалифицированную
                        юридическую
                        помощь.
                    </p>

                    <p>
                        Многолетний накопленный практический опыт и научный потенциал позволяют находить подход к
                        каждому
                        клиенту будь
                        то коммерческие или некоммерческие организации, государственные ведомства, публичные и частные
                        лица.
                    </p>

                    <p css={{padding: '12px 16px 0px 16px', marginBottom: 0, backgroundColor: colors.blueLight}}>
                        Профессионализм Коллегии регулярно подтверждается независимыми российскими и международными
                        рейтингами, такими
                        как Право-300 в номинациях «уголовное право и процесс», «арбитражное судопроизводство»,
                        «разрешение
                        споров в
                        судах общей юрисдикции», «семейное и наследственное право», The Legal 500 за эффективное
                        взаимодействие с
                        органами государственной власти и др.
                    </p>

                    <p css={{padding: '0px 16px 12px 16px', backgroundColor: colors.blueLight}}>
                        Коллегия адвокатов города Москвы «Барщевский и Партнеры» признавалась компанией года в 2004 и
                        2014
                        годах по
                        версии ежегодной бизнес - премии «Лучшие в России - компании и персоны года» в номинациях «За
                        вклад
                        в развитие
                        правовой защиты российского бизнеса» и «Юридические услуги» Адвокаты Коллегии неоднократно
                        отмечены
                        рейтингом
                        Best Lawyers и в индивидуальном рейтинге рекомендованных юристов Право-300.
                    </p>

                    <p>
                        Согласно этическим стандартам адвокатской деятельности наша Коллегия не использует рекламу в
                        средствах
                        массовой информации.
                    </p>
                </div>
            </ContentSection>
        </main>
    );
}

export default Collegium;
