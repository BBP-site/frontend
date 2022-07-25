import { useContext, createContext, ReactNode, FC } from 'react';

export interface IContactsData {
  address: string;
  phones: {
    number: string;
    desc: string;
  }[];
  email: string;
}

const CommonContext = createContext<Record<string, IContactsData> | null>(null);
CommonContext.displayName = 'CommonContext';

export const CommonProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const contactsData = {
    address: '119121, г. Москва, Ружейный пер., д. 3',
    phones: [
      {
        number: '+ 7 (495) 755-93-63',
        desc: 'пн-пт 10:00-19:00',
      },
      {
        number: '+ 7 (495) 755-93-63',
        desc: 'круглосуточно',
      },
    ],
    email: 'info1@bbp.ru',
  };

  return <CommonContext.Provider value={{ contactsData }}>{children}</CommonContext.Provider>;
};

export const useCommon = () => {
  const context = useContext(CommonContext);

  if (!context) {
    throw new Error(`Hook useCommon must be used within CommonProvider`);
  }

  return context;
};
