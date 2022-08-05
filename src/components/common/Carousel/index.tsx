import { Children, cloneElement, FC, isValidElement, ReactNode, useState } from 'react';
import { CSSObject } from '@emotion/react';
import { A11y, Navigation, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { useMedia } from '@scripts/hooks';
import { colors } from '@scripts/theme';

import Button from '@components/common/Button';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

export interface ICarouselProps extends SwiperProps {
  css?: CSSObject;
  className?: string;
  cssSwiper?: CSSObject;
  children?: ReactNode;
}

const Carousel: FC<ICarouselProps> = ({ className, css, cssSwiper, children, ...props }) => {
  const { tabletLg } = useMedia();
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);

  const swiperCSS: CSSObject = {
    overflow: 'hidden',
    touchAction: 'pan-y',
    padding: '8px',
    margin: '-8px',
    '.swiper-wrapper': {
      position: 'relative',
      width: '100%',
      height: '100%',
      zIndex: '1',
      display: 'flex',
      transitionProperty: 'transform',
      boxSizing: 'content-box',
    },
    '.swiper-slide': {
      flexShrink: 0,
      width: '100%',
      height: '100%',
      position: 'relative',
      transitionProperty: 'transform',
    },
    ...cssSwiper,
  };

  const btnsContainer: CSSObject = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    [tabletLg]: {
      display: 'none',
    },
  };

  const btnCSS: CSSObject = {
    position: 'absolute',
    width: '44px',
    height: '44px',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: colors.blue,
    ':disabled': {
      display: 'none',
    },
  };

  const btnIconCSS: CSSObject = {
    path: {
      stroke: colors.white,
    },
  };

  const paginationCSS: CSSObject = {
    left: 0,
    width: '100%',
    height: '44px',
    bottom: '0',
    display: 'inlineFlex',
    alignItems: 'center',
    justifyContent: 'center',
    span: {
      display: 'block',
      width: '12px',
      height: '12px',
      margin: '0 8px',
      cursor: 'pointer',
      backgroundColor: colors.gray300,
      borderRadius: '50%',
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: colors.blue,
    },
  };

  return (
    <div className={className} css={css}>
      <div css={{ position: 'relative' }}>
        <Swiper
          css={swiperCSS}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true, el: paginationEl }}
          {...props}
        >
          {Children.map(children, child => {
            if (isValidElement(child)) {
              return (
                <SwiperSlide>
                  {cloneElement(child, {
                    ...child.props,
                  })}
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        {children && (
          <div css={btnsContainer}>
            <Button
              innerRef={node => setPrevEl(node)}
              type="button"
              css={{ ...btnCSS, left: '-60px', transform: 'rotate(-90deg)' }}
            >
              <ArrowIcon css={btnIconCSS} />
            </Button>
            <Button
              innerRef={node => setNextEl(node)}
              type="button"
              css={{ ...btnCSS, right: '-60px', transform: 'rotate(90deg)' }}
            >
              <ArrowIcon css={btnIconCSS} />
            </Button>
          </div>
        )}
      </div>
      {children && <div ref={node => setPaginationEl(node)} css={paginationCSS} />}
    </div>
  );
};

export default Carousel;
