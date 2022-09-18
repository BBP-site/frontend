import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ClassNames } from '@emotion/react';

import { colors, pageWrap, typography } from '@scripts/theme';

import Menu, { MENU_TYPE } from '@components/Menu';
import Button from '@components/common/Button';

const MenuMobile: FC<{ open: boolean; onClose: Function; openFeedback: Function; topOffset: number | null }> = ({
  open,
  onClose,
  topOffset,
  openFeedback,
}) => {
  const router = useRouter();
  const [contentRef, setContentRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (contentRef && !open) enableBodyScroll(contentRef);
  }, [contentRef, open]);

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
          contentRef={node => setContentRef(node)}
          className={{
            base: `${css({
              background: colors.white,
              position: 'relative',
              transition: 'left ease 200ms',
              width: '67%',
              height: '100%',
              paddingLeft: 0,
              paddingRight: 0,
              left: '-100%',
              '&:focus-visible': {
                outline: 'none',
              },
            })}`,
            afterOpen: css({ left: 0 }),
            beforeClose: css({ left: '-100%' }),
          }}
          overlayClassName={{
            base: css({
              position: 'fixed',
              zIndex: 1000,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              padding: 0,
              background: 'rgba(46, 62, 81, 0.5)',
              opacity: 0,
              transition: 'opacity ease 150ms',
            }),
            afterOpen: css({ opacity: 1 }),
            beforeClose: css({ opacity: 0, transition: 'opacity ease 300ms' }),
          }}
          style={{
            overlay: {
              top: `${topOffset}px`,
            },
          }}
          closeTimeoutMS={200}
          isOpen={open}
          onRequestClose={() => onClose()}
          onAfterOpen={() => {
            if (contentRef) disableBodyScroll(contentRef);
          }}
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
              css={{
                flexGrow: 1,
                flexDirection: 'column',
                marginBottom: '16px',
                a: { paddingLeft: 0, paddingRight: 0, ...typography.txtSm },
              }}
            />

            <div css={{ ...pageWrap, marginBottom: '40px' }}>
              <Button
                onClick={() => {
                  onClose();
                  setTimeout(() => openFeedback(), 200);
                }}
                css={{
                  backgroundColor: colors.blueDark,
                  fontWeight: 700,
                  width: '216px',
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </ReactModal>
      )}
    </ClassNames>
  );
};

export default MenuMobile;
