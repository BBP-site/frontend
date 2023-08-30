import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'next-i18next';

export enum E_PAGES {
  HOME = '/',
  COLLEGIUM = '/collegium',
  PRACTICES = '/practices',
  TEAM = '/team',
  PROJECTS = '/projects',
  MEDIA = '/media',
  CONTACTS = '/contacts',
  POLITICS = '/politics',
}

export interface IData {
  pages: {
    [key: string]: E_PAGES;
  };
  contactsData: {
    address: string;
    phones: {
      number: string;
      desc: string;
    }[];
    email: string;
    whatsapp: string;
  };
}

export interface IPagesHistory {
  list: E_PAGES[];
  push: (page: E_PAGES) => void;
}

export interface ICommonContext {
  data: IData;
  pagesHistory: IPagesHistory;
}

const CommonContext = createContext<ICommonContext | null>(null);
CommonContext.displayName = 'CommonContext';

export const CommonProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const { t } = useTranslation();

  const [pHistory, setPHistory] = useState<E_PAGES[]>([]);

  const data = {
    pages: {
      home: E_PAGES.HOME,
      collegium: E_PAGES.COLLEGIUM,
      practices: E_PAGES.PRACTICES,
      team: E_PAGES.TEAM,
      projects: E_PAGES.PROJECTS,
      media: E_PAGES.MEDIA,
      contacts: E_PAGES.CONTACTS,
      politics: E_PAGES.POLITICS,
    },
    contactsData: {
      address: `${t('119121, г. Москва, Ружейный пер., д. 3')}`,
      phones: [
        {
          number: '+ 7 (495) 755-93-63',
          desc: `${t('пн-пт 10:00-19:00')}`,
        },
        {
          number: '+ 7 (985) 099-93-63',
          desc: `${t('круглосуточно')}`,
        },
      ],
      email: 'info1@bbp.ru',
      whatsapp: 'https://wa.me/79850999363',
    },
  };

  const pagesHistory = {
    list: pHistory,
    push: (page: E_PAGES) => setPHistory([...pHistory, page]),
  };

  return <CommonContext.Provider value={{ data, pagesHistory }}>{children}</CommonContext.Provider>;
};

export const useCommon = () => {
  const context = useContext(CommonContext);

  if (!context) {
    throw new Error(`Hook useCommon must be used within CommonProvider`);
  }

  return context;
};
