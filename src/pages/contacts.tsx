import React, { useEffect, useState } from 'react';
import PageTitle from '@components/PageTitle';
import ContactsMain from '@components/ContactsMain';
import { pageWrap } from '@scripts/theme';
import FeedbackForm from '@components/FeedbackForm';
import Modal from '@components/common/Modal';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { E_PAGES, useCommon } from '@context/common';

const Contacts = () => {
  const { t } = useTranslation();
  const [openFeedback, setOpenFeedback] = useState(false);
  const { pagesHistory } = useCommon();

  useEffect(() => {
    pagesHistory.push(E_PAGES.CONTACTS);
  }, []);

  return (
    <main css={{ height: '100%' }}>
      <PageTitle title={t('Контакты')}>
        <p>{t('Свяжитесь с нами, если Вам нужна помощь, консультация или у Вас появились другие вопросы.')}</p>
      </PageTitle>

      <ContactsMain openFeedback={setOpenFeedback} />

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
export default Contacts;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
