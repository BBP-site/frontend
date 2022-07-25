declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module 'react-loading-skeleton';
declare module 'react-tabs';
declare module '@emotion/core/jsx-runtime';

type ListFormatOptions = {
  type?: 'conjunction' | 'disjunction' | 'unit';
  style?: 'long' | 'short' | 'narrow';
  localeMatcher?: 'lookup' | 'best fit';
};
declare namespace Intl {
  class ListFormat {
    constructor(locale: string, options?: ListFormatOptions);

    public format: (items: Array<string>) => string;
  }
}
