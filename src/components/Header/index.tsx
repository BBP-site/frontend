import {FC, useState} from 'react';

import {colors, pageWrap} from '@scripts/theme';

import HeaderMobile, {HeaderMobileTop} from '@components/HeaderMobile';
import HeaderDesktop from '@components/HeaderDesktop';
import FeedbackForm from '@components/FeedbackForm';
import Modal from '@components/common/Modal';

const Header: FC<{}> = () => {
    const [openFeedback, setOpenFeedback] = useState(false);

    return (
        <>
            <header
                css={{
                    width: '100%',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    backgroundColor: colors.white,
                }}
            >
                <HeaderMobile openFeedback={() => setOpenFeedback(true)}/>
                <HeaderDesktop openFeedback={() => setOpenFeedback(true)}/>
                <HeaderMobileTop/>
            </header>
            <Modal
                css={{...pageWrap, margin: 0, padding: '32px 48px'}}
                isOpen={openFeedback}
                onRequestClose={() => setOpenFeedback(false)}
            >
                <FeedbackForm css={{padding: 0, maxWidth: '400px'}}/>
            </Modal>
        </>
    );
};

export default Header;
