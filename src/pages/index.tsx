import React, { useState } from 'react';
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
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';

import { achievements } from '@mocks/achievements';
import { medias, practices, projects, projectsMobile, team } from '@mocks/index';

import arrowIconURL from '@icons/arrowBlue.svg';
import arrowIconWhiteURL from '@icons/arrowWhite.svg';
import barjevskyURL from '@images/barjevsky.webp';
import mobileBarjevskyURL from '@images/mobileMainB.webp';
import FeedbackForm from '@components/FeedbackForm';
import Modal from '@components/common/Modal';
import ContactsMain from '@components/ContactsMain';

const Home = () => {
  const { mobileLg, mobileLgMin, tablet, tabletLg, tabletLgMin } = useMedia();
  const { data } = useCommon();

  const [openFeedback, setOpenFeedback] = useState(false);

  const teamCards = team.map(teamObj => withConfigContentCard(ContentCard, teamObj, CARD_TYPE.TEAM));
  const projectsCards = projects.map(project => withConfigContentCard(ContentCard, project, CARD_TYPE.PROJECTS_MAIN));
  const projectsCardsMobile = projectsMobile.map(project =>
    withConfigContentCard(ContentCard, project, CARD_TYPE.PROJECTS_MAIN)
  );
  const mediasCards = medias.map(media => withConfigContentCard(ContentCard, media, CARD_TYPE.MEDIA));

  return (
    <main>
      <Banner setOpenFeedback={setOpenFeedback} css={{ marginTop: '11px' }} />

      <section
        css={[
          {
            ...pageWrap,
            paddingBottom: '48px',
            paddingTop: '15px',
            display: 'flex',
            position: 'relative',
          },
          {
            [tabletLg]: {
              paddingTop: '32px',
              paddingBottom: '24px',
            },
          },
        ]}
      >
        <div
          css={{
            ...position.center,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2
            css={{
              marginBottom: '8px',
              [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '8px' },
            }}
          >
            Практики
          </h2>
          <Link href={`${data.pages.practices}`} passHref>
            <a
              css={{
                ...links.blue,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                [tabletLg]: {
                  ...typography.txtSm,
                },
              }}
            >
              Перейти к разделу
              <div css={{ ...position.center, marginLeft: '10px', transform: 'rotate(90deg)' }}>
                <Image src={arrowIconURL} width={12} height={12} />
              </div>
            </a>
          </Link>
          <p css={{ [tabletLg]: { ...typography.txtSm } }}>
            Вы можете обратиться к нам практически с любой правовой проблемой, т.к. наша Коллегия является универсальной
            и не ограничивается представленными в этом разделе направлениями.
          </p>
          <p css={{ [tabletLg]: { ...typography.txtSm } }}>
            Мы придерживаемся командного подхода и в рассмотрении вопроса доверителя, как правило, принимает участие
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
              [tabletLg]: {
                marginTop: '16px',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto auto auto',
              },
              [tablet]: {
                gridRowGap: '16px',
              },
              [mobileLg]: {
                width: '100%',
                gridRowGap: '8px',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto auto auto auto auto auto',
              },
            }}
          >
            {practices.map(({ img, ...practice }) => (
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
                    <div
                      css={{
                        minWidth: '64px',
                        minHeight: '64px',
                        [tabletLg]: {
                          minWidth: '48px',
                          minHeight: '48px',
                          width: '48px',
                          height: '48px',
                        },
                      }}
                    >
                      <Image src={img} width={64} height={64} />
                    </div>
                    <p
                      css={{
                        marginLeft: '34px',
                        whiteSpace: 'pre-line',
                        ...typography.h6,
                        [tabletLg]: { ...typography.txtBold, marginLeft: '24px' },
                      }}
                    >
                      {practice.title}
                    </p>
                  </a>
                </Link>
              </Block>
            ))}
          </div>
        </div>
        <div
          css={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '225px',
            height: '28px',
            backgroundColor: colors.cyan,
            [tabletLg]: {
              width: '125px',
              height: '20px',
            },
          }}
        />
      </section>

      <section
        css={[
          {
            ...pageWrap,
            paddingBottom: '48px',
            paddingTop: '15px',
          },
          { [tabletLg]: { paddingTop: '24px', marginBottom: '4px' } },
        ]}
      >
        <h2
          css={{
            marginBottom: '8px',
            alignSelf: 'flex-start',
            [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '4px' },
          }}
        >
          Команда
        </h2>
        <Link href={`${data.pages.team}`} passHref>
          <a
            css={{
              ...links.blue,
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginBottom: '8px',
              [tabletLg]: {
                ...typography.txtSm,
              },
            }}
          >
            Перейти к разделу
            <div css={{ ...position.center, marginLeft: '10px', transform: 'rotate(90deg)' }}>
              <Image src={arrowIconURL} width={12} height={12} />
            </div>
          </a>
        </Link>
        <p css={{ [tabletLg]: { ...typography.txtSm } }}>
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
        cssTitle={{
          marginBottom: '8px',
          color: colors.white,
          [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '8px' },
          [mobileLg]: { width: '250px' },
        }}
        css={{
          backgroundColor: colors.blueDark,
          padding: '37px 0',
          color: colors.white,
          position: 'relative',
          [tabletLg]: { padding: '48px 0' },
        }}
      >
        <p css={{ [tabletLg]: { ...typography.txtSm } }}>Каждый год мы стремимся к прогрессу и к его достижению.</p>
        <div
          css={{
            marginTop: '40px',
            ...position.spaceBetween,
            alignItems: 'flex-start',
            div: {
              maxWidth: '202px',
            },
            [tabletLg]: {
              marginTop: '24px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gridRowGap: '32px',
            },
          }}
        >
          <div>
            <p
              css={{
                fontWeight: 700,
                fontSize: '72px',
                lineHeight: '93px',
                marginBottom: '4px',
                [tabletLg]: { fontSize: '32px', lineHeight: '41px' },
              }}
            >
              32+
            </p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p css={{ [tabletLg]: { ...typography.txtSm } }}>года мы оказываем профессиональную юридическую помощь</p>
          </div>
          <div>
            <p
              css={{
                fontWeight: 700,
                fontSize: '72px',
                lineHeight: '93px',
                marginBottom: '4px',
                [tabletLg]: { fontSize: '32px', lineHeight: '41px' },
              }}
            >
              1000+
            </p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p css={{ [tabletLg]: { ...typography.txtSm } }}>доверителей</p>
          </div>
          <div>
            <p
              css={{
                fontWeight: 700,
                fontSize: '72px',
                lineHeight: '93px',
                marginBottom: '4px',
                [tabletLg]: { fontSize: '32px', lineHeight: '41px' },
              }}
            >
              50+
            </p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p css={{ [tabletLg]: { ...typography.txtSm } }}>
              доверителей на абонентском обслуживании, <br /> 7 из которых более <br /> 30 лет
            </p>
          </div>
          <div>
            <p
              css={{
                fontWeight: 700,
                fontSize: '72px',
                lineHeight: '93px',
                marginBottom: '4px',
                [tabletLg]: { fontSize: '32px', lineHeight: '41px' },
              }}
            >
              85%
            </p>
            <div css={{ width: '55px', height: '4px', backgroundColor: colors.cyan, marginBottom: '4px' }} />
            <p css={{ [tabletLg]: { ...typography.txtSm } }}>
              доверителей обращаются с новыми вопросами или рекомендуют Коллегию партнерам
            </p>
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
              [tabletLg]: { display: 'none' },
            }}
          />
          <div
            css={{
              position: 'absolute',
              top: 0,
              right: '145px',
              width: '550px',
              height: '28px',
              backgroundColor: colors.blue,
              [tabletLg]: {
                width: '134px',
                right: 'calc(50% - 67px)',
              },
            }}
          />
          <ParticlesMesh
            width={4}
            height={2}
            css={{
              marginTop: '6px',
              position: 'absolute',
              top: '20px',
              right: '18px',
              [tabletLg]: { display: 'none' },
            }}
          />
          <ParticlesMesh
            width={3}
            height={2}
            css={{
              position: 'absolute',
              top: '20px',
              right: '18px',
              [tabletLgMin]: { display: 'none' },
            }}
          />
        </div>
      </ContentSection>

      <ContentSection
        title="Рейтинги и награды"
        titleLvl={2}
        cssTitle={{
          marginBottom: '4px',
          [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '4px' },
        }}
        css={{
          backgroundColor: colors.white,
          padding: '20px 0 48px 0',
          [tabletLg]: { paddingBottom: '24px' },
        }}
      >
        <p css={{ ...typography.txtSm }}>
          Наш профессионализм ежегодно подтверждается российскими и международными рейтинговыми агентствами, а также
          отмечается наградами в области права.
        </p>

        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            [tablet]: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gridColumnGap: '24px',
              gridRowGap: '4px',
            },
          }}
        >
          {achievements.map(el => (
            <div
              key={el.id}
              css={{
                ...position.center,
                height: '190px',
                width: '240px',
                [tablet]: {
                  margin: 'auto',
                  width: el.isHaveSize ? el.widthMobile : '152px',
                  height: '118px',
                },
              }}
            >
              {el.isHaveSize ? <Image src={el.img.src} width={el.width} height={el.height} /> : <Image src={el.img} />}
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection isWrapS>
        <div
          css={{
            width: '100%',
            height: '570px',
            position: 'relative',
            overflow: 'hidden',
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
              [mobileLg]: {
                filter: 'blur(10px)',
                transform: 'scale(1.1)',
              },
            }}
          />
          <div
            css={{
              [mobileLgMin]: {
                display: 'none',
              },
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              background: `url(${mobileBarjevskyURL.src}) center no-repeat`,
              backgroundSize: 'auto 100%',
              '&:after': {
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
                [mobileLg]: {
                  ...typography.h3,
                  color: colors.white,
                  maxWidth: '360px',
                },
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
        <div css={{ display: 'flex', [tabletLg]: { flexDirection: 'column' } }}>
          <div
            css={{
              backgroundColor: colors.blueDark,
              width: '33.5%',
              position: 'relative',
              [tabletLg]: { width: '100%' },
            }}
          >
            <div css={{ ...pageWrap, paddingTop: '30px' }}>
              <div
                css={{
                  [tabletLgMin]: { display: 'none' },
                  width: '9px',
                  height: '102px',
                  backgroundColor: colors.cyan,
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: 0,
                }}
              />
              <div>
                <h2
                  css={{
                    color: colors.white,
                    [tabletLg]: {
                      ...typography.h4,
                      fontFamily: "'PT Serif', serif",
                      marginBottom: '8px',
                    },
                  }}
                >
                  Проекты
                </h2>
                <Link href={`${data.pages.projects}`} passHref>
                  <a
                    css={{
                      ...links.white,
                      whiteSpace: 'nowrap',
                      display: 'inline-flex',
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      marginBottom: '32px',
                      [tabletLg]: {
                        ...typography.txtSm,
                        marginBottom: '25px',
                      },
                    }}
                  >
                    Перейти к разделу
                    <div css={{ ...position.center, marginLeft: '10px' }}>
                      <Image src={arrowIconWhiteURL} width={12} height={12} />
                    </div>
                  </a>
                </Link>
              </div>
              <ParticlesMesh
                width={3}
                height={3}
                css={{
                  [tabletLgMin]: { display: 'none' },
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '4px',
                }}
              />
            </div>

            <div
              css={{
                position: 'absolute',
                left: 0,
                top: '72px',
                pointerEvents: 'none',
                [tabletLg]: { display: 'none' },
              }}
            >
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
              [tabletLg]: { width: '100%', paddingTop: '34px', ...pageWrap },
            }}
          >
            <div
              css={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gridTemplateColumns: 'auto auto',
                gap: '24px',
                [tabletLg]: {
                  gap: '16px',
                },
                [mobileLg]: {
                  display: 'none',
                },
              }}
            >
              {projectsCards.map((card, index) => (
                <div key={projects[index].id}>{card()}</div>
              ))}
            </div>

            <div
              css={{
                display: 'none',
                gridTemplateRows: '1fr 1fr',
                gridTemplateColumns: 'auto auto',
                gap: '24px',
                [mobileLg]: {
                  display: 'grid',
                  gridRowGap: '16px',
                  gridTemplateColumns: '1fr',
                  gridTemplateRows: 'auto auto auto auto',
                },
              }}
            >
              {projectsCardsMobile.map((card, index) => (
                <div key={projects[index].id}>{card()}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="Медиа"
        titleLvl={2}
        cssTitle={{
          marginBottom: '8px',
          [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '8px' },
        }}
        css={{
          backgroundColor: colors.gray100,
          padding: '32px 0 16px',
          [tabletLg]: { paddingTop: '24px', paddingBottom: '24px' },
        }}
      >
        <Link href={`${data.pages.media}`} passHref>
          <a
            css={{
              ...links.blue,
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginBottom: '32px',
              [tabletLg]: {
                ...typography.txtSm,
                marginBottom: '24px',
              },
            }}
          >
            Перейти к разделу
            <div css={{ ...position.center, marginLeft: '10px', transform: 'rotate(90deg)' }}>
              <Image src={arrowIconURL} width={12} height={12} />
            </div>
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

      <section
        id="consultation"
        css={{ ...pageWrapS, position: 'relative', paddingTop: '32px', [tabletLg]: { paddingTop: '64px' } }}
      >
        <h2
          css={[
            {
              ...pageWrap,
              marginBottom: '32px',
              alignSelf: 'flex-start',
            },
            { [tabletLg]: { ...typography.h4, fontFamily: "'PT Serif', serif", marginBottom: '16px' } },
          ]}
        >
          Контакты
        </h2>

        <ContactsMain openFeedback={setOpenFeedback} />

        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '66px',
            right: 0,
            [tabletLg]: { top: 0 },
          }}
        >
          <ParticlesMesh
            width={7}
            height={2}
            particlesCSS={{ backgroundColor: colors.blueDark }}
            css={{ [tabletLg]: { gridRowGap: '8px' } }}
          />
          <div
            css={{
              width: '26px',
              height: '58px',
              backgroundColor: colors.blue,
              marginLeft: '43px',
              [tabletLg]: { marginLeft: '20px' },
            }}
          />
        </div>
      </section>

      <Modal
        css={{ ...pageWrap, margin: 0, padding: '32px 48px' }}
        isOpen={openFeedback}
        onRequestClose={() => setOpenFeedback(false)}
      >
        <FeedbackForm css={{ padding: 0, maxWidth: '400px' }} onSuccess={() => setOpenFeedback(false)} />
      </Modal>
    </main>
  );
};

export default Home;
