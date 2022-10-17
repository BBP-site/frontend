import { createContext, FC, ReactNode, useContext } from 'react';

export enum E_PAGES {
  HOME = '/',
  COLLEGIUM = '/collegium',
  PRACTICES = '/practices',
  TEAM = '/team',
  PROJECTS = '/comingSoonProjects',
  MEDIA = '/comingSoonMedia',
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

const CommonContext = createContext<Record<string, IData> | null>(null);
CommonContext.displayName = 'CommonContext';

export const CommonProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
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
      address: '119121, г. Москва, Ружейный пер., д. 3',
      phones: [
        {
          number: '+ 7 (495) 755-93-63',
          desc: 'пн-пт 10:00-19:00',
        },
        {
          number: '+ 7 (985) 099-93-63',
          desc: 'круглосуточно',
        },
      ],
      email: 'info1@bbp.ru',
      whatsapp: 'https://wa.me/79850999363',
    },
  };

  return <CommonContext.Provider value={{ data }}>{children}</CommonContext.Provider>;
};

export const useCommon = () => {
  const context = useContext(CommonContext);

  if (!context) {
    throw new Error(`Hook useCommon must be used within CommonProvider`);
  }

  return context;
};
