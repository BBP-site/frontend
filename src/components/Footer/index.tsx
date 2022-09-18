import { FC } from 'react';

import { colors, typography } from '@scripts/theme';

import FooterMobile from '@components/FooterMobile';
import FooterDesktop from '@components/FooterDesktop';

const Footer: FC = () => (
  <footer
    css={{
      ...typography.txt,
      backgroundColor: colors.blueDark,
      color: colors.white,
      width: '100%',
    }}
  >
    <FooterMobile />
    <FooterDesktop />
  </footer>
);

export default Footer;
