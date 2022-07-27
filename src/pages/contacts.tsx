import Image from 'next/image';

import PageTitle from '@components/PageTitle';
import FeedbackForm from '@components/FeedbackForm';
import Map from '@components/Map';

import { useCommon } from '@context/common';

import { pageWrapS, colors, position, typography, pageWrap } from '@scripts/theme';

import pinURL from '@icons/pin.svg';
import phoneCallURL from '@icons/phoneCall.svg';
import mailURL from '@icons/mail.svg';
import { useMedia } from '@scripts/hooks';

const Contacts = () => {
  const { contactsData } = useCommon();
  const { tabletLg } = useMedia();

  return (
    <main css={{ height: '100%', marginBottom: '32px' }}>
      <PageTitle title="Контакты">
        <p>Свяжитесь с нами, если вам нужна помощь, консультация или у вас появились другие вопросы</p>
      </PageTitle>

      <div
        css={{
          backgroundColor: colors.gray100,
        }}
      >
        <div
          css={{
            ...pageWrap,
            paddingTop: '64px',
            paddingBottom: '64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div css={{ display: 'flex' }}>
            <div
              css={{
                ...position.center,
                backgroundColor: colors.blueLight,
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                marginRight: '24px',
              }}
            >
              <Image src={pinURL} width={32} height={32} />
            </div>
            <div css={{ marginRight: '32px' }}>
              <p css={{ ...typography.h6, marginBottom: '8px' }}>Адрес</p>
              <p css={{ ...typography.txt, color: colors.gray700 }}>{contactsData.address}</p>
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <div
              css={{
                ...position.center,
                backgroundColor: colors.blueLight,
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                marginRight: '24px',
              }}
            >
              <Image src={phoneCallURL} width={32} height={32} />
            </div>
            <div css={{ marginRight: '32px' }}>
              <p css={{ ...typography.h6, marginBottom: '8px' }}>Телефон</p>
              {contactsData.phones.map(phone => (
                <p key={phone.desc} css={{ ...typography.txt, color: colors.gray700, marginBottom: 0 }}>
                  {phone.number} <span css={{ whiteSpace: 'nowrap' }}>{phone.desc}</span>
                </p>
              ))}
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <div
              css={{
                ...position.center,
                backgroundColor: colors.blueLight,
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                marginRight: '24px',
              }}
            >
              <Image src={mailURL} width={32} height={32} />
            </div>
            <div>
              <p css={{ ...typography.h6, marginBottom: '8px' }}>E-mail</p>
              <p css={{ ...typography.txt, color: colors.gray700 }}>{contactsData.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div css={{ ...pageWrapS, display: 'flex', [tabletLg]: { display: 'block' } }}>
        <FeedbackForm css={{ width: '40%', [tabletLg]: { width: 'auto' } }} />
        <Map css={{ width: '60%', [tabletLg]: { width: 'auto', height: '700px' } }} />
      </div>
    </main>
  );
};
export default Contacts;
