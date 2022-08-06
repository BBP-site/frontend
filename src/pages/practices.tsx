import PageTitle from '@components/PageTitle';
import ContentCard from '@components/common/ContentCard';
import withConfigContentCard from '@components/hoc-helpers/withConfigContentCard';

import {links, pageWrap} from '@scripts/theme';
import {CARD_TYPE} from '@scripts/enums/common/content-card.enum';
import {practices} from "@mocks/index";

const Practices = () => {
    const practiceCards = practices.map(practice => withConfigContentCard(ContentCard, practice, CARD_TYPE.PRACTICE));

    return (
        <main css={{height: '100%'}}>
            <PageTitle title="Практики" css={{marginBottom: '32px'}}>
                <p>
                    Вы можете обратиться к нам практически с любой правовой проблемой, т.к. наша Коллегия является
                    универсальной и
                    не ограничивается представленными в этом разделе направлениями.
                </p>
                <p>
                    Мы придерживаемся командного подхода и в рассмотрении вопроса клиента, как правило, принимает
                    участие
                    несколько специалистов, что позволяет находить нестандартные пути решения даже тогда, когда на
                    первый взгляд
                    нет выхода.
                </p>
            </PageTitle>
            <div css={{...pageWrap, marginBottom: '48px'}}>
                {practiceCards.map((card, index) => (
                    <div key={practices[index].id} css={{marginBottom: '24px', a: {...links.blue}}}>
                        {card()}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Practices;
