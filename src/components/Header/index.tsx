import { FC } from 'react';
import { useCommon } from '@context/common';
import { pageWrap } from '@scripts/theme';

const Header: FC<{}> = () => {
  const { contactsData } = useCommon();
  return (
    <div css={{ ...pageWrap, width: '100%' }}>
      <p>Я есть хедер</p>
      <p>Вот почта: {contactsData?.email}</p>
    </div>
  );
};

export default Header;
