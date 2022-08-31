import {FC, ReactNode, useEffect, useState} from 'react';
import ReactModal, {Props as ReactModalProps} from 'react-modal';
import {ClassNames} from '@emotion/react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import {colors, position} from '@scripts/theme';

import {ReactComponent as CrossIcon} from '@icons/cross.svg';

interface IModal extends ReactModalProps {
    children?: ReactNode | ReactNode[];
    className?: string;
}

const Modal: FC<IModal> = ({isOpen, children, className, onRequestClose, ...props}) => {
    const [contentRef, setContentRef] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (contentRef && !isOpen) enableBodyScroll(contentRef);
    }, [contentRef, isOpen]);

    return (
        <ClassNames>
            {({css}) => (
                <ReactModal
                    contentRef={node => setContentRef(node)}
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
                        })} ${className}`,
                        beforeClose: css({transform: 'scale(0.9)', transition: 'transform ease 300ms'}),
                        afterOpen: css({transform: 'scale(1)'}),
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
                        }),
                        beforeClose: css({opacity: 0, transition: 'opacity ease 300ms'}),
                        afterOpen: css({opacity: 1}),
                    }}
                    isOpen={isOpen}
                    onRequestClose={onRequestClose}
                    onAfterOpen={() => {
                        if (contentRef) disableBodyScroll(contentRef);
                    }}
                    {...props}
                >
                    <div
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
                            <CrossIcon/>
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
