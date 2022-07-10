import { rgba } from 'emotion-rgba';
import { CSSObject } from '@emotion/react';
import { useMedia } from '@scripts/hooks';

export const time = '.2s';

export const colors = {
  white: '#fff',
  black: '#202020',
  blue: '#0967d6',
  blueLight: '#eef4fa',
  blueDark: '#353f87',
  cyan: '#14b2e4',
  gray900: '#162635',
  gray800: '#1e4060',
  gray700: '#4e4e4e',
  gray600: '#949494',
  gray500: '#828282',
  gray400: '#bdbdbd',
  gray300: '#cccccc',
  gray200: '#e0e0e0',
  gray100: '#f4f5f5',
};

export const shadows = {
  around: { boxShadow: `0px 0px 8px ${rgba(colors.black, 0.15)}` },
};

export const typography = {
  h1: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '72px',
    lineHeight: '86px',
    color: colors.gray900,
  },
  h2: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '54px',
    lineHeight: '65px',
    color: colors.gray900,
  },
  h3: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '58px',
    color: colors.gray900,
  },
  h4: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '42px',
    lineHeight: '50px',
  },
  h5: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '35px',
  },
  h6: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
  },
  txt: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '25px',
  },
  txtMd: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '34px',
  },
  txtSm: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
  },
  txtBold: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '25px',
  },
  txtSmBold: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
  },
};

export const pageWrap = (() => {
  const { tabletLg, mobileLg } = useMedia();
  return {
    margin: 'auto',
    padding: '0 80px',
    maxWidth: '1440px',
    [tabletLg]: {
      padding: '0 40px',
    },
    [mobileLg]: {
      padding: '0 16px',
    },
  };
})();

const getLinkStyle = (color: string | undefined, hoverColor: string | undefined): CSSObject => {
  const { tabletLgMin } = useMedia();

  return {
    fill: color,
    color,
    svg: { verticalAlign: 'middle', path: { stroke: color } },
    span: {
      borderBottomColor: rgba(color || '', 0.2),
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    transitionProperty: 'color',
    transitionDuration: time,
    [tabletLgMin]: {
      ':hover': { color: hoverColor, span: { borderBottomColor: rgba(hoverColor || '', 0.2) } },
    },
  };
};

export const links = {
  white: getLinkStyle(colors?.white, colors?.blue),
  blue: getLinkStyle(colors?.blue, colors?.blueDark),
};
