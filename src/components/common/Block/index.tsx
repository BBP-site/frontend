import { ReactNode, FC } from 'react';
import { CSSObject } from '@emotion/react';
import { colors, shadows } from '@scripts/theme';

export interface IBlockProps {
  css?: CSSObject;
  children?: ReactNode;
}

const Block: FC<IBlockProps> = ({ css, children, ...props }) => (
  <div
    css={{ padding: '24px', backgroundColor: colors?.white, borderRadius: '8px', ...shadows.around, ...css }}
    {...props}
  >
    {children}
  </div>
);

export default Block;
