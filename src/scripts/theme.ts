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
  blueSuperDark: '#284361',
  cyan: '#14b2e4',
  red: '#ff0000',
  gray900: '#162635',
  gray800: '#1e4060',
  gray700: '#4e4e4e',
  gray600: '#949494',
  gray500: '#828282',
  gray400: '#bdbdbd',
  gray300: '#cccccc',
  gray200: '#e0e0e0',
  gray100: '#f4f5f5',
  bannerContent: 'rgb(22,38,53, 0.8)',
};

export const shadows = {
  around: { boxShadow: `0px 0px 8px ${rgba(colors.black, 0.15)}` },
  bottom: { boxShadow: `0px 2px 10px ${rgba(colors.black, 0.1)}` },
};

export const position = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  end: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  start: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
};

export const typography = {
  h1: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '72px',
    lineHeight: '86px',
    color: colors.gray900,
    marginBottom: '20px',
  },
  h2: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '54px',
    lineHeight: '65px',
    color: colors.gray900,
    marginBottom: '20px',
  },
  h3: {
    fontFamily: "'PT Serif', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '58px',
    color: colors.gray900,
    marginBottom: '20px',
  },
  h4: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: '20px',
  },
  h5: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '35px',
    marginBottom: '20px',
  },
  h6: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '29px',
    marginBottom: '20px',
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
  txtExtraSm: {
    fontFamily: "'PT Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
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

export const pageWrapS = {
  margin: 'auto',
  maxWidth: '1440px',
};

export const pageWrap = (() => {
  const { tabletLg, mobileLg } = useMedia();
  return {
    ...pageWrapS,
    paddingLeft: '80px',
    paddingRight: '80px',
    [tabletLg]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    [mobileLg]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  };
})();

const LinkStyle = (color: string | undefined, hoverColor: string | undefined): CSSObject => {
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
  white: LinkStyle(colors?.white, colors?.blue),
  blue: LinkStyle(colors?.blue, colors?.blueDark),
  black: LinkStyle(colors?.black, colors?.blueDark),
};
