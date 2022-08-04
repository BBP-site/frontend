import { FC, ReactNode, createElement } from 'react';
import { CSSObject } from '@emotion/react';
import { pageWrap, pageWrapS, position } from '@scripts/theme';

interface IContentSectionProps {
  title?: string;
  cssTitle?: CSSObject;
  children?: ReactNode;
  css?: CSSObject;
  className?: string;
  titleLvl?: number;
  isWrapS?: boolean;
}

const ContentSection: FC<IContentSectionProps> = ({ title, cssTitle, children, css, className, titleLvl, isWrapS }) => {
  const ContentSectionCSS: CSSObject = {
    ...position.start,
    width: '100%',
    ...css,
  };

  const Title = (props: any) =>
    createElement<HTMLHeadingElement>(`h${!titleLvl || titleLvl > 6 || titleLvl < 1 ? 3 : titleLvl}`, props, title);

  return (
    <section css={{ ...ContentSectionCSS }} className={className}>
      <div css={{ width: '100%', ...(isWrapS ? pageWrapS : pageWrap) }}>
        {title && <Title css={cssTitle} />}

        {children}
      </div>
    </section>
  );
};

export default ContentSection;
