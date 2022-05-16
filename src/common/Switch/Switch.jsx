import React from 'react';
import S from 'react-switch';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import tailwindConfig from 'tailwind.config.js';
import { HandleIcon } from './Switch.style';
import useColorSchemeStore from '../../store/useColorSchemeStore';
import colorSchemeList from '../../color-schemes/color-schemes.json';
import { rgbToHex } from '../../util/rgbToHex';

const ReactSwitch = S.default ? S.default : S;

const Switch = ({ handleChange, checked }) => {
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  // Get active color scheme value
  const { accent, primary } = colorSchemeList.filter((i) => i.name === colorScheme)[0].colors;

  const hexAccent = rgbToHex(accent);
  const primaryAccent = rgbToHex(primary);

  return (
    <ReactSwitch
      onColor={hexAccent}
      offColor={primaryAccent}
      onHandleColor="#fff"
      offHandleColor="#fff"
      onChange={handleChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      activeBoxShadow={`0px 0px 2px 3px ${hexAccent}`}
      uncheckedHandleIcon={(
        <HandleIcon checked={checked}>
          <MdOutlineLightMode />
        </HandleIcon>
        )}
      checkedHandleIcon={(
        <HandleIcon checked={checked}>
          <MdDarkMode />
        </HandleIcon>
        )}
      aria-label="Theme switcher"
      height={29}
      width={50}
      handleDiameter={25}
    />
  );
};

export default Switch;
