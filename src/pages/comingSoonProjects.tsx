import Button from '@components/common/Button';
import {pageWrap} from '@scripts/theme';
import {useRouter} from 'next/router';

const ComingSoonProjects = () => {
    const {push} = useRouter();

    return (
        <main
            css={{
                ...pageWrap,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '24px',
                marginBottom: '24px',
                fontWeight: 'bold'
            }}
        >
            <p>
                Раздел в разработке.
            </p>
            <p css={{paddingBottom: '24px'}}>
                Скоро здесь Вы сможете узнать об интересных проектах нашей Коллегии.
            </p>
            <Button onClick={() => push('/')}>Перейти на главную</Button>
        </main>
    );
};

export default ComingSoonProjects;
