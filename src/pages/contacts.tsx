import React from 'react';
import Image from 'next/image';

import { useCommon } from '@context/common';

import { useMedia } from '@scripts/hooks';
import { colors, links, pageWrap, pageWrapS, position, typography } from '@scripts/theme';

import Map from '@components/Map';
import PageTitle from '@components/PageTitle';

import pinURL from '@icons/pin.svg';
import phoneCallURL from '@icons/phoneCall.svg';
import mailURL from '@icons/mail.svg';

const Contacts = () => {
  const { data } = useCommon();
  const { tabletLg, desktop } = useMedia();

  return (
    <main css={{ height: '100%', marginBottom: '32px' }}>
      <PageTitle title="Контакты">
        <p>Свяжитесь с нами, если Вам нужна помощь, консультация или у Вас появились другие вопросы.</p>
      </PageTitle>

      <section id="consultation" css={{ ...pageWrapS, position: 'relative', paddingTop: '32px' }}>
        <div css={{ display: 'flex', [tabletLg]: { display: 'block' } }}>
          <Map css={{ width: '50%', [tabletLg]: { width: 'auto', height: '700px' } }} info={false} />
          <div
            css={[
              {
                [desktop]: { paddingLeft: '40px', paddingRight: '40px' },
              },
              {
                ...pageWrap,
                paddingTop: '32px',
                paddingBottom: '48px',
                paddingLeft: '40px',
                width: '50%',
                [tabletLg]: { width: 'auto' },
              },
            ]}
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
                  marginBottom: '72px',
                }}
              >
                <Image src={pinURL} width={32} height={32} />
              </div>
              <div css={{ marginRight: '32px' }}>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>Адрес</p>
                <p css={{ ...typography.txt, color: colors.gray700 }}>{data.contactsData.address}</p>
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
                  marginBottom: '72px',
                }}
              >
                <Image src={phoneCallURL} width={32} height={32} />
              </div>
              <div css={{ marginRight: '32px' }}>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>Телефон</p>
                {data.contactsData.phones.map(phone => (
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
                  marginBottom: '72px',
                }}
              >
                <Image src={mailURL} width={32} height={32} />
              </div>
              <div>
                <p css={{ ...typography.h6, marginBottom: '8px' }}>E-mail</p>
                <p css={{ ...typography.txt, color: colors.gray700 }}>{data.contactsData.email}</p>
              </div>
            </div>

            <p css={{ padding: '12px 16px', backgroundColor: colors.blueLight }}>
              Если Вы заинтересованы стать частью нашей команды, направьте свое резюме на электронную почту{' '}
              <span css={{ marginLeft: '5px' }}>
                <a css={links.blue} href={`mailto:${data.contactsData?.email}`}>
                  info1@bbp.ru
                </a>
              </span>{' '}
              с указанием темы письма: «Резюме»
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Contacts;
