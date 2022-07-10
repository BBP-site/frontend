import { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';

import { colors, typography, time } from '@scripts/theme';
import { useMedia } from '@scripts/hooks';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'fill' | 'empty';
  css?: CSSObject;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ theme = 'fill', css, children, ...props }) => {
  const { tabletLgMin } = useMedia();
  return (
    <button
      css={{
        ...typography.txt,
        padding: '14px 56px',
        borderRadius: '8px',
        cursor: 'pointer',
        outline: 'none',
        transitionProperty: 'background-color, color',
        transitionDuration: time,
        '&:disabled': {
          cursor: 'auto',
          border: 'none',
          color: colors.gray500,
          backgroundColor: colors.gray200,
        },
        ...(theme === 'fill'
          ? {
              color: colors.white,
              backgroundColor: colors.blue,
              border: `2px solid transparent`,
              [tabletLgMin]: {
                '&:hover': {
                  backgroundColor: colors.blueDark,
                },
                '&:focus': {
                  border: `2px solid ${colors.cyan}`,
                },
              },
            }
          : {
              color: colors.black,
              border: `1px solid ${colors.gray600}`,
              backgroundColor: colors.white,
              [tabletLgMin]: {
                '&:hover': {
                  backgroundColor: colors.gray100,
                },
                '&:focus': {
                  border: `1px solid ${colors.blue}`,
                },
              },
            }),
        ...css,
      }}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
