import React from 'react';

import {useMedia} from '@scripts/hooks';
import PageTitle from '@components/PageTitle';
import ContactsMain from "@components/ContactsMain";

const Contacts = () => {
    const {tabletLgMin} = useMedia();

    return (
        <main css={{height: '100%', [tabletLgMin]: {marginBottom: '32px'}}}>
            <PageTitle title="Контакты">
                <p>Свяжитесь с нами, если Вам нужна помощь, консультация или у Вас появились другие вопросы.</p>
            </PageTitle>

            <ContactsMain/>
        </main>
    );
};
export default Contacts;
