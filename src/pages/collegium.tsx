import React from 'react';
import PageTitle from '@components/PageTitle';
import { CSSObject } from '@emotion/react';
import { colors, pageWrap, position } from '@scripts/theme';

import ContentSection from '@components/common/contentSection';

import incorruptibilityURL from '@images/incorruptibility.png';
import professionalismURL from '@images/professionalism.png';
import secretURL from '@images/secret.png';
import honestyURL from '@images/honesty.png';
import empathyURL from '@images/empathy.png';
import noteURL from '@icons/note.svg';
import collegiumURL from '@images/collegium.jpg';
import achievementsURL from '@images/achievements.jpg';

import Image from 'next/image';
import Block from '../components/common/Block';
import Carousel from '../components/common/Carousel';

const firstText: React.ReactElement = (
  <>
    <p>
      <strong>
        Уже более 30 лет Коллегия оказывает юридическую помощь и занимает достойное место среди ведущих адвокатских фирм
        России. Сегодня «Барщевский и Партнеры» - это профессиональная команда практикующих адвокатов и юристов, в числе
        которых и адвокаты с многолетним опытом и молодые амбициозные юристы.
      </strong>
    </p>

    <p>
      Мы специализируемся на защите по уголовным делам, связанным с экономическими преступлениями, на
      гражданско-правовых спорах, в том числе в сфере корпоративного, семейного, наследственного, трудового права, права
      интеллектуальной собственности, представляем интересы по налоговым спорам и делам об административных
      правонарушениях.
    </p>

    <p>
      Много лет одним из основных наших направлений является комплексное сопровождение бизнеса и абонентское
      обслуживание, в числе постоянных клиентов по этим направлениям компании в сфере авиаперевозок, IT-технологий,
      ритейла, образования, энергетики, продажи и обслуживания автомобилей, здравоохранения. В последние годы все чаще
      за абонентским обслуживанием обращаются частные лица – топ-менеджеры крупных компаний, руководители
      государственных органов, политические деятели и деятели культуры.
    </p>

    <p>
      Строжайший отбор сотрудников и сочетание научной и практической компетенции (членами нашей Коллегии опубликовано
      десятки научных трудов ) явилось результатом положительного исхода подавляющего большинства обращений.
    </p>

    <p>
      Многолетний накопленный практический опыт и научный потенциал позволяют находить подход к каждому клиенту будь то
      коммерческие или некоммерческие организации, государственные ведомства, публичные и частные лица.
    </p>

    <p>
      Согласно этическим стандартам адвокатской деятельности наша Коллегия не использует рекламу в средствах массовой
      информации.
    </p>
  </>
);

const secondText: React.ReactElement = (
  <>
    <p>
      Постоянное совершенствование теоретических и практических знаний, научная деятельность – все это неотъемлемые
      части жизни наших сотрудников. В нашей деятельности нам помогает взаимодействие со многими ведущими научными
      центрами и консультантами из числа виднейших российских правоведов, а также вышедших в отставку судей с
      многолетним опытом работы. Все это позволяет оказывать действительно высококвалифицированную юридическую помощь.
    </p>
  </>
);

const thirdText: React.ReactElement = (
  <>
    <p>
      Коллегия была основана в 1990 году адвокатом Михаилом Барщевским и членами Московской городской коллегии
      адвокатов, став первой в СССР частной адвокатской юридической фирмой. С 1993 года фирма носит имя «Барщевский и
      Партнеры».
    </p>
  </>
);

const historyText = {
  first: (
    <>
      <p>
        Основатель фирмы, возглавлявший ее до 2001 года, - Михаил Барщевский – ныне полномочный представитель
        Правительства Российской Федерации в Конституционном Суде Российской Федерации и Верховном Суде Российской
        Федерации, заслуженный юрист РФ, доктор юридических наук, профессор, Действительный государственный советник 1
        класса, обладатель высшей награды адвокатского сообщества России – золотой медали имени Ф.Н. Плевако, ордена «За
        верность адвокатскому долгу», а также кавалер орденов Почета и «За заслуги перед Отечеством» 4-й степени. Михаил
        Барщевский автор многочисленных книг и публикаций, в числе которых и художественные произведения, а также один
        из старейших участников Клуба знатоков «Что? Где? Когда?».
      </p>
    </>
  ),
  second: (
    <>
      <p>
        В 2001 году Михаил Барщевский сложил с себя полномочия частного адвоката в связи с переходом на госслужбу. С
        этого времени президентом Коллегии является Самвел Караханян – практикующий адвокат, член Адвокатской палаты
        города Москвы, доктор юридических наук, автор ряда публикаций, научных монографий и книг. Под его руководством
        работа Коллегии была неоднократно отмечена престижными наградами, включая национальную премию в области бизнеса
        «Компания года». Самвел Караханян - лауреат премий «Персона года 2009» (за вклад в развитие правового
        обеспечения экономических свобод) и «Персона года 2014» (в номинации «Юриспруденция»), кавалер Международного
        Ордена Святого Константина Великого, обладатель Почетной грамоты Президента РФ.
      </p>
    </>
  ),
};

const Collegium = () => {
  const contentSectionElementCSS: CSSObject = {
    ...position.center,
    flexDirection: 'column',
    textAlign: 'center',
    height: '228px',
    maxWidth: '340px',
    div: {
      ...position.center,
      height: '130px',
      minHeight: '130px',
    },
    strong: {
      marginTop: '30px',
      height: '70px',
      minHeight: '70px',
    },
  };

  const contentSectionCSS: CSSObject = {
    ...position.spaceBetween,
    marginTop: '60px',
  };

  return (
    <main css={{ width: '100%' }}>
      <PageTitle title="О Коллегии">
        <p>Мы отвечаем за свою работу и придерживаемся традиций и ценностей классической российской адвокатуры.</p>
      </PageTitle>

      <div css={{ padding: '34px 0 34px 0' }}>
        <div css={{ ...pageWrap }}>{firstText}</div>
      </div>

      <ContentSection
        title="Нашими принципами являются"
        css={{ backgroundColor: colors.gray100, padding: '24px 0 50px 0' }}
      >
        <div css={contentSectionCSS}>
          <div css={{ ...contentSectionElementCSS, width: '120px' }}>
            <div>
              <Image src={incorruptibilityURL} />
            </div>

            <strong>Неподкупность</strong>
          </div>

          <div css={{ ...contentSectionElementCSS, width: '144px' }}>
            <div>
              <Image src={professionalismURL} />
            </div>

            <strong>Профессионализм</strong>
          </div>

          <div css={{ ...contentSectionElementCSS, width: '120px' }}>
            <div>
              <Image src={honestyURL} />
            </div>

            <strong>Честность</strong>
          </div>

          <div css={{ ...contentSectionElementCSS, width: '262px' }}>
            <div>
              <Image src={secretURL} />
            </div>

            <strong>Строжайшее сохранение адвокатской тайны</strong>
          </div>

          <div css={{ ...contentSectionElementCSS, width: '260px' }}>
            <div>
              <Image src={empathyURL} />
            </div>

            <strong>Готовность сопереживать проблемам наших доверителей</strong>
          </div>
        </div>
      </ContentSection>

      <div css={{ padding: '34px 0 34px 0' }}>
        <div css={{ ...pageWrap }}>{secondText}</div>
      </div>

      <div css={{ marginTop: '40px' }}>
        <ContentSection title="История">
          <Block css={{ backgroundColor: colors.blueLight, boxShadow: 'none', marginBottom: '20px' }}>
            <div css={{ ...position.start, alignItems: 'start' }}>
              <div css={{ height: '100%', minWidth: '60px' }}>
                <Image src={noteURL} width="32px" height="32px" />
              </div>

              <div>{thirdText}</div>
            </div>
          </Block>

          <Image src={collegiumURL} />

          <div css={{ margin: '60px 0 60px 0' }}>
            <div>
              <ContentSection title="Михаил Барщевский" titleLvl={5} isWrapS>
                {historyText.first}
              </ContentSection>
            </div>

            <div css={{ marginTop: '60px' }}>
              <ContentSection title="Самвел Караханян" titleLvl={5} isWrapS>
                {historyText.second}
              </ContentSection>
            </div>
          </div>
        </ContentSection>
      </div>

      <ContentSection title="Достижения" css={{ backgroundColor: colors.gray100, padding: '32px 0 50px 0' }}>
        <Carousel css={{ marginTop: '32px' }} slidesPerView={3}>
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <Image key={i} src={achievementsURL} />
          ))}
        </Carousel>
      </ContentSection>
    </main>
  );
};

export default Collegium;
