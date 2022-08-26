import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { colors, links, pageWrap, pageWrapS, position, shadows, typography } from '@scripts/theme';
import { CARD_TYPE } from '@scripts/enums/common/content-card.enum';
import { useMedia } from '@scripts/hooks';

import { useCommon } from '@context/common';

import Banner from '@components/common/Banner';
import Carousel from '@components/common/Carousel';
import ContentSection from '@components/common/contentSection';
import Block from '@components/common/Block';
import ParticlesMesh from '@components/ParticlesMesh';
import ContentCard from '@components/common/ContentCard';
import Map from '@components/Map';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';

import { achievements } from '@mocks/achievements';
import { medias, practices, projects, team } from '@mocks/index';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';
import barjevskyURL from '@images/barjevsky.webp';
import pinURL from '@icons/pin.svg';
import phoneCallURL from '@icons/phoneCall.svg';
import mailURL from '@icons/mail.svg';

const Home = () => {
  const { tabletLg, desktop } = useMedia();
  const { data } = useCommon();

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
          paddingTop: '15px',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div
          css={{
            ...position.center,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2 css={{ marginBottom: '8px' }}>Практики</h2>
          <Link href="/practices" passHref>
            <a
              css={{
                ...links.blue,
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              Перейти к разделу <ArrowIcon css={{ marginLeft: '10px', transform: 'rotate(90deg)' }} />
            </a>
          </Link>
          <p>
            Вы можете обратиться к нам практически с любой правовой проблемой, т.к. наша Коллегия является универсальной
            и не ограничивается представленными в этом разделе направлениями.
          </p>
          <p>
            Мы придерживаемся командного подхода и в рассмотрении вопроса клиента, как правило, принимает участие
            несколько специалистов, что позволяет находить нестандартные пути решения даже тогда, когда на первый взгляд
            нет выхода.
          </p>
          <div
            css={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateRows: 'auto auto',
              gridColumnGap: '16px',
              gridRowGap: '24px',
            }}
          >
            {practices.map(({ Img, ...practice }) => (
              <Block
                key={practice.id}
                css={{
                  padding: 0,
                  borderRadius: '16px',
                  ...shadows.around,
                  '&:hover': {
                    backgroundColor: colors.blue,
                    p: { color: colors.white },
                    svg: {
                      path: { fill: colors.white },
                    },
                  },
                }}
              >
                <Link href={`/practices/#${practice.id}`} passHref>
                  <a css={{ display: 'flex', padding: '24px' }}>
                    <Img css={{ minWidth: '64px', minHeight: '64px' }} />
                    <p css={{ marginLeft: '34px', ...typography.h6 }}>{practice.title}</p>
                  </a>
                </Link>
              </Block>
            ))}
          </div>
        </div>
        <div
          css={{ position: 'absolute', right: 0, top: 0, width: '225px', height: '28px', backgroundColor: colors.cyan }}
        />
      </section>

      <section css={{ ...pageWrap, paddingBottom: '48px', paddingTop: '15px' }}>
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
          slidesPerView="auto"
          spaceBetween={16}
          loop
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
                cssTitle={{marginBottom: '8px', color: colors.white}}
                css={{backgroundColor: colors.blueDark, padding: '37px 0', color: colors.white, position: 'relative'}}
            >
                <p>Каждый год мы стремимся к прогрессу и к его достижению</p>
                <div
                    css={{
                    marginTop: '40px',
                    ...position.spaceBetween,
                    alignItems: 'flex-start',
                    'div': {
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
                        <p>абонентских клиентов, <br/> 7 из которых более <br/> 30 лет</p>
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
        cssTitle={{ marginBottom: '4px' }}
        css={{ backgroundColor: colors.gray100, padding: '20px 0' }}
      >
        <p>
          Наш профессионализм ежегодно подтверждается российскими и международными рейтинговыми агентствами, а также
          отмечается наградами в области права.
        </p>
        <Carousel slidesPerView={3}>
          {achievements.map(el => (
            <div key={el.id} css={{ ...position.center, height: '290px', width: '340px' }}>
              {el.isHaveSize ? <Image src={el.img.src} width={el.width} height={el.height} /> : <Image src={el.img} />}
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
            <div css={{ ...pageWrap, paddingTop: '30px' }}>
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
                  height: '250px',
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
        cssTitle={{ marginBottom: '8px' }}
        css={{ backgroundColor: colors.gray100, padding: '32px 0 16px' }}
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
        <Carousel
          slidesPerView="auto"
          spaceBetween={16}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {mediasCards.map((card, index) => (
            <div key={medias[index].id}>{card()}</div>
          ))}
        </Carousel>
      </ContentSection>

      <section id="consultation" css={{ ...pageWrapS, position: 'relative', paddingTop: '32px' }}>
        <h2 css={{ ...pageWrap, marginBottom: '32px', alignSelf: 'flex-start' }}>Контакты</h2>
        <div css={{ display: 'flex', [tabletLg]: { display: 'block' } }}>
          <Map css={{ width: '50%', [tabletLg]: { width: 'auto', height: '700px' } }} info={false} />
          <div
            css={[
              {
                [desktop]: { paddingLeft: '40px', paddingRight: '40px' },
              },
              {
                ...pageWrap,
                paddingTop: '32px',
                paddingBottom: '48px',
                width: '50%',
                [tabletLg]: { width: 'auto' },
              },
            ]}
          >
            <div css={{ display: 'flex', marginBottom: '52px' }}>
              <div
                css={{
                  ...position.center,
                  backgroundColor: colors.blueLight,
                  borderRadius: '50%',
                  width: '52px',
                  height: '52px',
                  marginRight: '24px',
                }}
              >
                <Image src={pinURL} width={32} height={32} />
              </div>
              <div css={{ marginRight: '32px' }}>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>Адрес</p>
                <p css={{ ...typography.txt, color: colors.gray700 }}>{data.contactsData.address}</p>
              </div>
            </div>
            <div css={{ display: 'flex', marginBottom: '52px' }}>
              <div
                css={{
                  ...position.center,
                  backgroundColor: colors.blueLight,
                  borderRadius: '50%',
                  width: '52px',
                  height: '52px',
                  marginRight: '24px',
                }}
              >
                <Image src={phoneCallURL} width={32} height={32} />
              </div>
              <div css={{ marginRight: '32px' }}>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>Телефон</p>
                {data.contactsData.phones.map(phone => (
                  <p key={phone.desc} css={{ ...typography.txt, color: colors.gray700, marginBottom: 0 }}>
                    {phone.number} <span css={{ whiteSpace: 'nowrap' }}>{phone.desc}</span>
                  </p>
                ))}
              </div>
            </div>
            <div css={{ display: 'flex', marginBottom: '52px' }}>
              <div
                css={{
                  ...position.center,
                  backgroundColor: colors.blueLight,
                  borderRadius: '50%',
                  width: '52px',
                  height: '52px',
                  marginRight: '24px',
                }}
              >
                <Image src={mailURL} width={32} height={32} />
              </div>
              <div>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>E-mail</p>
                <p css={{ ...typography.txt, color: colors.gray700 }}>{data.contactsData.email}</p>
              </div>
            </div>

            <p css={{ padding: '12px 16px', backgroundColor: colors.blueLight }}>
              Если Вы заинтересованы стать частью нашей команды, направьте свое резюме на электронную почту{' '}
              <span css={{ marginLeft: '5px' }}>
                <a css={links.blue} href={`mailto:${data.contactsData?.email}`}>
                  info1@bbp.ru
                </a>
              </span>{' '}
              с указанием темы письма: «Резюме»
            </p>
          </div>
        </div>
        <div css={{ display: 'flex', alignItems: 'center', position: 'absolute', top: '66px', right: 0 }}>
          <ParticlesMesh width={7} height={2} particlesCSS={{ backgroundColor: colors.blueDark }} />
          <div css={{ width: '26px', height: '58px', backgroundColor: colors.blue, marginLeft: '43px' }} />
        </div>
      </section>
    </main>
  );
};

export default Home;
