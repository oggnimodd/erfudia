import React, { forwardRef } from 'react';
import useColorSchemeStore from '../../store/useColorSchemeStore';
import colorSchemes from '../../color-schemes/color-schemes.json';
import {
  Options, OptionItem, HalfColor,
} from './ColorSchemePicker.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import { rgbToHex } from '../../util/rgbToHex';

const ColorSchemeOptions = forwardRef((props, ref) => {
  if(!isNotEmpty(colorSchemes)) return null;

  const { colorScheme, changeColorScheme } = useColorSchemeStore((state) => state);

  const handleClick = (name) => {
    changeColorScheme(name);
  };

  return (
    <Options ref={ref}>
      {colorSchemes.map((i) => {
        return (
          <OptionItem
            onClick={() => handleClick(i.name)}
            key={i.name}
            style={{
              backgroundColor: rgbToHex(i.colors.primary),
            }}
          >
            <HalfColor
              style={{
                backgroundColor: rgbToHex(i.colors.accent),
              }}
            />
          </OptionItem>
        );
      })}
    </Options>
  );
});

export default ColorSchemeOptions;
