import { ReactNode, FC } from 'react';
import { CSSObject } from '@emotion/react';
import { colors, shadows } from '@scripts/theme';

export interface BlockProps {
  css?: CSSObject;
  children?: ReactNode;
}

const Block: FC<BlockProps> = ({ css, children, ...props }) => {
  return (
    <div
      css={{ padding: '24px', backgroundColor: colors?.white, borderRadius: '8px', ...shadows.around, ...css }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Block;
