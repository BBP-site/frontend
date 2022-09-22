import React, {useState} from 'react';
import PageTitle from '@components/PageTitle';
import ContactsMain from "@components/ContactsMain";
import {pageWrap} from "@scripts/theme";
import FeedbackForm from "@components/FeedbackForm";
import Modal from "@components/common/Modal";

const Contacts = () => {
    const [openFeedback, setOpenFeedback] = useState(false);

    return (
        <main css={{height: '100%'}}>
            <PageTitle title="Контакты">
                <p>Свяжитесь с нами, если Вам нужна помощь, консультация или у Вас появились другие вопросы.</p>
            </PageTitle>

            <ContactsMain openFeedback={setOpenFeedback}/>

            <Modal
                css={{...pageWrap, margin: 0, padding: '32px 48px'}}
                isOpen={openFeedback}
                onRequestClose={() => setOpenFeedback(false)}
            >
                <FeedbackForm css={{padding: 0, maxWidth: '400px'}}/>
            </Modal>
        </main>
    );
};
export default Contacts;
