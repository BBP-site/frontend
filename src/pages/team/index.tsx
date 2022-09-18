import {FC} from 'react';
import {CSSObject} from '@emotion/react';

import {typography} from '@scripts/theme';
import {CARD_TYPE} from '@scripts/enums/common/content-card.enum';

import PageTitle from '@components/PageTitle';
import ContentSection from '@components/common/contentSection';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';
import ContentCard from '@components/common/ContentCard';

import {team} from '@mocks/index';
import {useMedia} from "@scripts/hooks";

const Team: FC = () => {
    const teamCards = team.map(teamObj => withConfigContentCard(ContentCard, teamObj, CARD_TYPE.TEAM));
    const {tablet, mobile} = useMedia();

    const contentSectionCSS: CSSObject = {
        display: 'grid',
        gridTemplate: 'auto / 1fr 1fr',
        gridColumnGap: '32px',
        [tablet]: {
            gridTemplate: 'auto / 1fr',
        }
    };

    return (
        <main css={{width: '100%', ...typography.txt}}>
            <PageTitle title="Команда">
                <p>
                    Мы чтим традиции адвокатуры, постоянно совершенствуем свои теоретические знания, что позволяет нам
                    много
                    лет успешно оказывать квалифицированную юридическую помощь. В этом разделе представлены основные
                    члены команды Коллегии.
                </p>
            </PageTitle>

            <ContentSection childrenCss={contentSectionCSS} css={{padding: '48px 0 48px 0'}}>
                {teamCards.map((card, index) => (
                    <div key={team[index].id} css={{marginBottom: '24px', [mobile]: {width: '92vw'}}}>
                        {card()}
                    </div>
                ))}
            </ContentSection>
        </main>
    );
};

export default Team;
