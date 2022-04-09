import React from 'react';
import S from 'react-switch';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import tailwindConfig from 'tailwind.config.js';
import { HandleIcon } from './Switch.style';

const ReactSwitch = S.default ? S.default : S;
const { accent, primary } = tailwindConfig.theme.extend.colors;

const Switch = ({ handleChange, checked }) => {
  return (
    <ReactSwitch
      onColor={accent}
      offColor={primary}
      onHandleColor="#fff"
      offHandleColor="#fff"
      onChange={handleChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      activeBoxShadow={`0px 0px 2px 3px ${accent}`}
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
