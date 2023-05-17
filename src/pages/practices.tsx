import { useRouter } from 'next/router';

import PageTitle from '@components/PageTitle';
import ContentCard from '@components/common/ContentCard';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';

import { links, pageWrap } from '@scripts/theme';
import { CARD_TYPE } from '@scripts/enums/common/content-card.enum';

import { practices } from '@mocks/index';
import { useEffect, useState } from 'react';
import { useMedia } from '@scripts/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Practices = () => {
  const { asPath } = useRouter();
  const [curAnchor, setCurAnchor] = useState<string | null>();
  const { tabletLg, desktop, desktopLg } = useMedia();

  useEffect(() => setCurAnchor(asPath.split('#')[1]), [asPath]);

  const practiceCards = practices.map(practice =>
    withConfigContentCard(
      ContentCard,
      {
        ...practice,
        contentCSS: {
          height: '146px',
          [desktopLg]: {},
          [desktop]: { height: '146px' },
          [tabletLg]: { height: '125px' },
        },
      },
      CARD_TYPE.PRACTICE,
      practice.id === curAnchor
    )
  );

  return (
    <main css={{ height: '100%' }}>
      <PageTitle title="Практики" css={{ marginBottom: '32px' }}>
        <p>
          Вы можете обратиться к нам практически с любой правовой проблемой, так как наша Коллегия является
          универсальной и не ограничивается представленными в этом разделе направлениями.
        </p>
        <p>
          Мы придерживаемся командного подхода, и в рассмотрении вопроса клиента, как правило, принимает участие
          несколько специалистов, что позволяет находить нестандартные пути решения даже тогда, когда на первый взгляд
          нет выхода.
        </p>
      </PageTitle>
      <div css={{ ...pageWrap, marginBottom: '48px', [tabletLg]: { marginTop: '32px' } }}>
        {practiceCards.map((card, index) => (
          <div
            key={practices[index].id}
            css={{
              paddingTop: '150px',
              marginTop: '-150px',
              marginBottom: '24px',
              a: { ...links.blue },
              [tabletLg]: { paddingTop: '126px', marginTop: '-126px' },
            }}
            id={practices[index].id}
          >
            {card()}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Practices;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
