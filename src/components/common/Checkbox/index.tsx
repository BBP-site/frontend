import { ReactNode, FC, HTMLProps, useId } from 'react';
import { CSSObject } from '@emotion/react';

import { colors, typography } from '@scripts/theme';

import { ReactComponent as CheckIcon } from '@icons/check.svg';

export interface ICheckboxProps extends HTMLProps<HTMLInputElement> {
  css?: CSSObject;
  className?: string;
  children?: ReactNode;
}

const Checkbox: FC<ICheckboxProps> = ({ checked, value, css, className, children, ...props }) => {
  const id = useId();

  return (
    <div css={css} className={className}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        value={value}
        css={{ position: 'absolute', clip: 'rect(0, 0, 0, 0)' }}
        {...props}
      />
      <label
        htmlFor={id}
        css={{
          minHeight: 19,
          position: 'relative',
          display: 'block',
          paddingLeft: '32px',
          ...typography.txt,
          textAlign: 'left',
          color: colors?.black,
          cursor: 'pointer',
          transition: 'color ease 300ms',
          'input:disabled + &': {
            color: colors?.gray600,
            cursor: 'not-allowed',
          },
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '20px',
            height: '20px',
            border: `1px solid ${colors?.gray600}`,
            borderRadius: '2px',
            background: colors?.white,
            boxSizing: 'border-box',
            'input:focus-visible + &': {
              border: `1px solid ${colors?.blue}`,
            },
            'input:checked + &': {
              background: colors?.blue,
            },
            'input:disabled + &': {
              borderColor: colors?.gray400,
              background: colors?.gray200,
            },
          },
          ':hover': {
            '::before': {
              borderColor: colors?.gray600,
            },
          },
        }}
      >
        <CheckIcon
          css={{
            position: 'absolute',
            top: '9px',
            left: '10px',
            width: '16px',
            height: '16px',
            transform: 'translate(-50%, -50%) scale(0)',
            transition: 'transform ease 300ms',
            'input:checked + label &': {
              transform: 'translate(-50%, -50%) scale(1)',
            },
            'input:disabled + label &': {
              fill: colors?.gray600,
            },
          }}
        />
        {children}
      </label>
    </div>
  );
};
export default Checkbox;
