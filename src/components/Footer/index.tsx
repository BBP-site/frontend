import { FC } from 'react';
import { useCommon } from '@context/common';
import { pageWrap } from '@scripts/theme';

const Footer: FC<{}> = () => {
  const { contactsData } = useCommon();
  return (
    <div css={{ ...pageWrap, width: '100%' }}>
      <p>Я есть футер</p>
      <p>Мой адрес: {contactsData?.address}</p>
    </div>
  );
};

export default Footer;
