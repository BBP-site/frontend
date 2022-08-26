type Breakpoint =
  | 'desktop'
  | 'desktopMin'
  | 'tabletLg'
  | 'tabletLgMin'
  | 'tablet'
  | 'tabletMin'
  | 'mobileLg'
  | 'mobileLgMin'
  | 'mobile'
  | 'mobileMin';

type dataProps = Record<Breakpoint, string>;

export const useMedia = () => {
  const breakpoints = {
    desktop: 1200,
    tabletLg: 1024,
    tablet: 768,
    mobileLg: 640,
    mobile: 480,
  };

  const data: dataProps = Object.entries(breakpoints).reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: `@media (max-width: ${value - 1}px)`,
      [`${name}Min`]: `@media (min-width: ${value}px)`,
    }),
    {
      desktop: '',
      desktopMin: '',
      tabletLg: '',
      tabletLgMin: '',
      tablet: '',
      tabletMin: '',
      mobileLg: '',
      mobileLgMin: '',
      mobile: '',
      mobileMin: '',
    }
  );
  return { ...data };
};
