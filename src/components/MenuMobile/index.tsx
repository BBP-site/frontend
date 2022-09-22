import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import { ClassNames } from '@emotion/react';

import { colors, shadows } from '@scripts/theme';

import Menu, { MENU_TYPE } from '@components/Menu';

const MenuMobile: FC<{ open: boolean; onClose: Function; openFeedback: Function; topOffset: number | null }> = ({
  open,
  onClose,
  topOffset,
  openFeedback,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => onClose();
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [onClose, router.events]);

  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          className={{
            base: `${css({
              ...shadows.bottom,
              background: colors.white,
              position: 'relative',
              transition: 'top ease 200ms',
              width: '100%',
              paddingLeft: 0,
              paddingRight: 0,
              top: '-100%',
              zIndex: 99,
              '&:focus-visible': {
                outline: 'none',
              },
            })}`,
            afterOpen: css({ top: 0 }),
            beforeClose: css({ top: '-100%' }),
          }}
          overlayClassName={{
            base: css({
              position: 'fixed',
              zIndex: 99,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              padding: 0,
              background: 'transparent',
              opacity: 0,
              transition: 'opacity ease 150ms',
            }),
            afterOpen: css({ opacity: 1 }),
            beforeClose: css({ opacity: 0, transition: 'opacity ease 200ms' }),
          }}
          style={{
            overlay: {
              top: `${topOffset}px`,
            },
          }}
          closeTimeoutMS={200}
          isOpen={open}
          onRequestClose={() => onClose()}
        >
          <div
            css={{
              position: 'relative',
              height: '100%',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Menu
              type={MENU_TYPE.HEADER}
              openFeedback={openFeedback}
              onClose={onClose}
              css={{
                flexGrow: 1,
                flexDirection: 'column',
              }}
            />

            {/* <div css={{...pageWrap, marginBottom: '40px'}}> */}
            {/*    <Button */}
            {/*        onClick={() => { */}
            {/*            onClose(); */}
            {/*            setTimeout(() => openFeedback(), 200); */}
            {/*        }} */}
            {/*        css={{ */}
            {/*            backgroundColor: colors.blueDark, */}
            {/*            fontWeight: 700, */}
            {/*            width: '216px', */}
            {/*            paddingLeft: 0, */}
            {/*            paddingRight: 0, */}
            {/*        }} */}
            {/*    > */}
            {/*        Связаться с нами */}
            {/*    </Button> */}
            {/* </div> */}
          </div>
        </ReactModal>
      )}
    </ClassNames>
  );
};

export default MenuMobile;
