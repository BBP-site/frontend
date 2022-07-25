import { FC, useState } from 'react';
import { CSSObject } from '@emotion/react';
import { useSelect } from 'downshift';

import { colors, typography, shadows, time } from '@scripts/theme';

import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

export interface ISelectItem {
  label: string;
  value: string | number;
}

interface ISelectProps {
  items: ISelectItem[];
  placeholder: string;
  onChange: (value: string | number | null) => void;
  css?: CSSObject;
}

const Select: FC<ISelectProps> = ({ items, onChange, placeholder = '', css, ...props }) => {
  const [selectedItem, setSelectedItem] = useState<ISelectItem | null>(null);
  const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem = null }) => {
      setSelectedItem(newSelectedItem);
      if (onChange) onChange(newSelectedItem?.value || null);
    },
  });

  return (
    <div css={{ position: 'relative', ...css }} {...props}>
      <button
        {...getToggleButtonProps()}
        type="button"
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px',
          backgroundColor: colors.white,
          border: `1px solid ${colors.gray300}`,
          borderRadius: '4px',
          outline: 'none',
          ':focus-visible': {
            outline: `2px solid ${colors.cyan}`,
            borderColor: 'transparent',
          },
        }}
      >
        <span css={{ ...typography.txt, color: colors.gray600, ...(selectedItem && { color: colors.black }) }}>
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <ArrowIcon
          css={{
            path: {
              stroke: colors.gray700,
            },
            transition: `transform ease ${time}`,
            ...(!isOpen && { transform: 'rotate(-180deg)' }),
          }}
        />
      </button>
      <ul
        {...getMenuProps()}
        css={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 2,
          backgroundColor: colors.white,
          listStyle: 'none',
          ':focus-visible': {
            outline: `2px solid ${colors.cyan}`,
          },
          ...shadows.bottom,
          margin: 0,
        }}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              {...getItemProps({ item, index })}
              key={`${item.value}`}
              css={{
                padding: '12px',
                color: colors.black,
                cursor: 'pointer',
                ...typography.txt,
                ...(highlightedIndex === index && { backgroundColor: colors.blueLight }),
                ...(selectedItem?.value === item.value && { backgroundColor: colors.blue, color: colors.white }),
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <span className="text-sm text-gray-700">{item.label}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
