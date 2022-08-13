import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';

import {colors, links, pageWrap, pageWrapS, position, typography} from '@scripts/theme';
import {CARD_TYPE} from '@scripts/enums/common/content-card.enum';
import {useMedia} from '@scripts/hooks';

import Banner from '@components/common/Banner';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import ContentSection from '@components/common/contentSection';
import ParticlesMesh from '@components/ParticlesMesh';
import ContentCard from '@components/common/ContentCard';
import Map from '@components/Map';
import FeedbackForm from '@components/FeedbackForm';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';

import {ReactComponent as ArrowIcon} from '@icons/arrow.svg';
import barjevskyURL from '@images/barjevsky.webp';

import {achievements} from "@mocks/achievements";
import React from "react";
import {medias, practicesMain, projects, team} from '../mocks';

const Home = () => {
    const {push} = useRouter();
    const {tabletLg} = useMedia();

    const practicesCards = practicesMain.map(practice => withConfigContentCard(ContentCard, practice, CARD_TYPE.PRACTICE));
    const teamCards = team.map(teamObj => withConfigContentCard(ContentCard, teamObj, CARD_TYPE.TEAM));
    const projectsCards = projects.map(project => withConfigContentCard(ContentCard, project, CARD_TYPE.PROJECTS_MAIN));
    const mediasCards = medias.map(media => withConfigContentCard(ContentCard, media, CARD_TYPE.MEDIA));

    return (
        <main>
            <Banner css={{marginTop: '11px'}}/>

            <section
                css={{
                    ...pageWrap,
                    paddingBottom: '48px',
                    paddingTop: '15px',
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
                    <h2 css={{marginBottom: '8px'}}>Практики</h2>
                    <Link href="/practices" passHref>
                        <a
                            css={{
                                ...links.blue,
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginBottom: '32px',
                            }}
                        >
                            Перейти к разделу <ArrowIcon css={{marginLeft: '10px', transform: 'rotate(90deg)'}}/>
                        </a>
                    </Link>
                    <div css={{maxWidth: '1057px'}}>
                        {practicesCards.map((card, index) => (
                            <div key={practicesMain[index].id} css={{marginBottom: '24px'}}>
                                {card()}
                            </div>
                        ))}
                    </div>
                    <Button theme="empty" onClick={() => push('/practices')} css={{alignSelf: 'center'}}>
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
                    <div css={{display: 'flex', alignItems: 'center', marginBottom: '69px'}}>
                        <ParticlesMesh
                            width={7}
                            height={4}
                            particlesCSS={{backgroundColor: colors.blueDark}}
                            css={{marginRight: '43px'}}
                        />
                        <div css={{width: '26px', height: '112px', backgroundColor: colors.blue}}/>
                    </div>
                    <div css={{width: '225px', height: '28px', backgroundColor: colors.cyan}}/>
                </div>
            </section>

            <section css={{...pageWrap, paddingBottom: '48px', paddingTop: '15px'}}>
                <h2 css={{marginBottom: '8px', alignSelf: 'flex-start'}}>Команда</h2>
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
                        Перейти к разделу <ArrowIcon css={{marginLeft: '10px', transform: 'rotate(90deg)'}}/>
                    </a>
                </Link>
                <p>
                    Мы чтим традиции адвокатуры, постоянно совершенствуем свои теоретические знания, что позволяет нам
                    много лет
                    успешно оказывать квалифицированную юридическую помощь. В этом разделе представлены основные члены
                    команды
                    Коллегии.
                </p>
                <Carousel
                    css={{marginTop: '32px'}}
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
                        <div key={team[index].id} css={{marginBottom: '24px'}}>
                            {card()}
                        </div>
                    ))}
                </Carousel>
            </section>

            <ContentSection
                title="Наши результаты"
                titleLvl={2}
                cssTitle={{marginBottom: '8px', color: colors.white}}
                css={{backgroundColor: colors.blueDark, padding: '37px 0', color: colors.white, position: 'relative'}}
            >
                <p>Каждый год мы стремимся к прогрессу и к его достижению</p>
                <div css={{
                    marginTop: '40px', ...position.spaceBetween, alignItems: 'flex-start', 'div': {
                        maxWidth: '202px'
                    }
                }}>
                    <div>
                        <p css={{fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px'}}>32+</p>
                        <div css={{width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px'}}/>
                        <p>года мы оказываем профессиональную юридическую помощь</p>
                    </div>

                    <div>
                        <p css={{fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px'}}>1000+</p>
                        <div css={{width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px'}}/>
                        <p>
                            клиентов
                        </p>
                    </div>

                    <div>
                        <p css={{fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px'}}>50+</p>
                        <div css={{width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px'}}/>
                        <p>абонентских клиентов, <br/> 7 из которых более 30 лет</p>
                    </div>

                    <div>
                        <p css={{fontWeight: 700, fontSize: '72px', lineHeight: '93px', marginBottom: '4px'}}>85%</p>
                        <div css={{width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px'}}/>
                        <p>клиентов обращаются с новыми вопросами или рекомендуют Коллегию партнерам</p>
                    </div>
                </div>
                <div css={{...pageWrap, position: 'absolute', top: 0, left: 0, right: 0}}>
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
                    <div css={{display: 'flex', position: 'absolute', top: 0, right: '48px'}}>
                        <div css={{width: '550px', height: '28px', backgroundColor: colors.blue, marginRight: '45px'}}/>
                        <ParticlesMesh width={4} height={2} css={{marginTop: '6px'}}/>
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                title="Рейтинги и награды"
                titleLvl={2}
                cssTitle={{marginBottom: '4px'}}
                css={{backgroundColor: colors.gray100, padding: '20px 0'}}
            >
                <p>
                    Наш профессионализм ежегодно подтверждается российскими и
                    международными рейтинговыми агентствами, а также отмечается наградами в области
                    права.
                </p>
                <Carousel slidesPerView={3}>
                    {achievements.map(el => (
                        <div css={{...position.center, height: '290px', width: '340px'}}>
                            {el.isHaveSize ?
                                <Image key={el.id} src={el.img.src} width={el.width} height={el.height}/>
                                :
                                <Image key={el.id} src={el.img}/>
                            }
                        </div>
                    ))}
                </Carousel>
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
                            <br/>
                            но Вы не найдете лучше”
                        </h2>
                        <p css={{...typography.h5}}>М. Барщевский</p>
                    </div>
                </div>
            </ContentSection>

            <section css={{...pageWrapS, backgroundColor: colors.white}}>
                <div css={{display: 'flex'}}>
                    <div css={{backgroundColor: colors.blueDark, width: '33.5%', position: 'relative'}}>
                        <div css={{...pageWrap, paddingTop: '30px'}}>
                            <h2 css={{color: colors.white}}>Проекты</h2>
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
                                    Перейти к разделу <ArrowIcon
                                    css={{marginLeft: '10px', transform: 'rotate(90deg)'}}/>
                                </a>
                            </Link>
                        </div>
                        <div css={{position: 'absolute', left: 0, top: '72px'}}>
                            <div
                                css={{
                                    width: '24px',
                                    height: '250px',
                                    backgroundColor: colors.cyan,
                                }}
                            />
                            <ParticlesMesh width={10} height={6} css={{marginTop: '48px'}}/>
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
                                gap: '24px',
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
                cssTitle={{marginBottom: '8px'}}
                css={{backgroundColor: colors.gray100, padding: '15px 0'}}
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
                        Перейти к разделу <ArrowIcon css={{marginLeft: '10px', transform: 'rotate(90deg)'}}/>
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
            <section
                id="consultation"
                css={{...pageWrapS, display: 'flex', [tabletLg]: {display: 'block'}}}
            >
                <Map css={{width: '60%', [tabletLg]: {width: 'auto', height: '700px'}}} fullInfo/>
                <FeedbackForm css={{width: '40%', [tabletLg]: {width: 'auto'}}}/>
            </section>
        </main>
    );
};

export default Home;
