import {FC} from 'react';
import {CSSObject} from '@emotion/react';

import {typography} from '@scripts/theme';
import {CARD_TYPE} from '@scripts/enums/common/content-card.enum';

import PageTitle from '@components/PageTitle';
import ContentSection from '@components/common/contentSection';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';
import ContentCard from '@components/common/ContentCard';

import {team} from '@mocks/index';

const Team: FC = () => {
    const teamCards = team.map(teamObj => withConfigContentCard(ContentCard, teamObj, CARD_TYPE.TEAM));

    const contentSectionCSS: CSSObject = {
        display: 'grid',
        gridTemplate: 'auto / 1fr 1fr',
        gridColumnGap: '32px',
    };

    return (
        <main css={{width: '100%', ...typography.txt}}>
            <PageTitle title="Команда">
                <p>
                    Адвокаты и юристы Коллегии адвокатов города Москвы «Барщевский и Партнеры» сопровождают деятельность
                    Клиентов,
                    устраняя риски привлечения к ответственности за нарушение законодательства о защите конкуренции.
                </p>
            </PageTitle>

            <ContentSection childrenCss={contentSectionCSS} css={{padding: '48px 0 48px 0'}}>
                {teamCards.map((card, index) => (
                    <div key={team[index].id} css={{marginBottom: '24px'}}>
                        {card()}
                    </div>
                ))}
            </ContentSection>
        </main>
    );
};

export default Team;
