import { FC, ReactNode, useEffect, useState } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { colors, position } from '@scripts/theme';

import crossIconURL from '@icons/cross.svg';
import { useMedia } from '@scripts/hooks';

interface IModal extends ReactModalProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

const Modal: FC<IModal> = ({ isOpen, children, className, onRequestClose, ...props }) => {
  const [contentRef, setContentRef] = useState<HTMLElement | null>(null);
  const { mobile } = useMedia();

  useEffect(() => {
    if (contentRef && !isOpen) enableBodyScroll(contentRef);
  }, [contentRef, isOpen]);

  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          className={{
            base: `${css({
              background: colors.white,
              position: 'relative',
              transform: 'scale(0.9)',
              transition: 'transform ease 150ms',
              borderRadius: '8px',
              height: '100%',
              paddingLeft: 0,
              paddingRight: 0,
              maxHeight: '752px',
              '&:focus-visible': {
                outline: 'none',
              },
              [mobile]: {
                maxHeight: '100%',
                height: '100%',
                borderRadius: '0px',
              },
            })} ${className}`,
            beforeClose: css({ transform: 'scale(0.9)', transition: 'transform ease 300ms' }),
            afterOpen: css({ transform: 'scale(1)' }),
          }}
          overlayClassName={{
            base: css({
              position: 'fixed',
              zIndex: 1000,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              ...position.center,
              padding: '40px 0',
              background: 'rgba(46, 62, 81, 0.5)',
              opacity: 0,
              transition: 'opacity ease 150ms',
              [mobile]: { padding: '0' },
            }),
            beforeClose: css({ opacity: 0, transition: 'opacity ease 300ms' }),
            afterOpen: css({ opacity: 1 }),
          }}
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          onAfterOpen={() => {
            if (contentRef) disableBodyScroll(contentRef);
          }}
          {...props}
        >
          <div
            ref={node => setContentRef(node)}
            css={{
              position: 'relative',
              height: '100%',
              overflowY: 'scroll',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            <button
              type="button"
              css={{
                position: 'absolute',
                top: 0,
                right: '40px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                ...position.center,
              }}
              onClick={onRequestClose}
            >
              <Image src={crossIconURL} width={24} height={24} />
            </button>
            {children}
          </div>
        </ReactModal>
      )}
    </ClassNames>
  );
};

ReactModal.setAppElement('#__next');

export default Modal;
