import { FC, useState } from 'react';
import Image from 'next/image';
import { CSSObject } from '@emotion/react';
import { rgba } from 'emotion-rgba';

import { colors, position, typography } from '@scripts/theme';

import { useCommon } from '@context/common';

import pinURL from '@icons/pin.svg';
import clockURL from '@icons/clock.svg';
import mailURL from '@icons/mail.svg';
import phoneURL from '@icons/phoneBlue.svg';
import { ReactComponent as CrossIcon } from '@icons/cross.svg';

export interface IMapProps {
  css?: CSSObject;
  info?: boolean;
  fullInfo?: boolean;
}

const Map: FC<IMapProps> = ({ css, info = true, fullInfo = false, ...props }) => {
  const { data } = useCommon();
  const [isBubble, setIsBubble] = useState(info);

  return (
    <div
      css={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '100%',
        ...css,
      }}
      {...props}
    >
      {isBubble && (
        <div
          css={{
            position: 'absolute',
            top: '60%',
            left: '35%',
            borderRadius: '12px',
            background: `${rgba(colors.white, 0.85)}`,
            zIndex: 1,
            padding: '24px 32px',
            ...typography.txt,
            ...(fullInfo && { top: '35%', left: '5%' }),
          }}
        >
          <button
            type="button"
            css={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              ...position.center,
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() => setIsBubble(!isBubble)}
          >
            <CrossIcon />
          </button>
          <div css={{ display: 'flex', marginBottom: '24px' }}>
            <div css={{ marginRight: '12px' }}>
              <Image src={pinURL} width={24} height={24} />
            </div>
            <p>{data.contactsData.address}</p>
          </div>
          <div css={{ display: 'flex', ...(fullInfo && { marginBottom: '24px' }) }}>
            <div css={{ marginRight: '12px' }}>
              <Image src={clockURL} width={24} height={24} />
            </div>
            <p>{data.contactsData.phones[0].desc}</p>
          </div>
          {fullInfo &&
            data.contactsData.phones.map(phone => (
              <div key={phone.desc} css={{ display: 'flex', marginBottom: '24px' }}>
                <div css={{ marginRight: '12px' }}>
                  <Image src={phoneURL} width={24} height={24} />
                </div>
                <p>{phone.number}</p>
              </div>
            ))}
          {fullInfo && (
            <div css={{ display: 'flex' }}>
              <div css={{ marginRight: '12px' }}>
                <Image src={mailURL} width={24} height={24} />
              </div>
              <p>{data.contactsData.email}</p>
            </div>
          )}
        </div>
      )}

      {/* CCURMVDTWD */}
      {/* CCURz2tnWA */}
      {/* CCURz-AHOA */}

      <iframe
        title="uniquer-map-id"
        src="https://yandex.ru/map-widget/v1/-/CCURz-UIsA"
        frameBorder="none"
        allowFullScreen
        css={{ position: 'relative', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Map;
