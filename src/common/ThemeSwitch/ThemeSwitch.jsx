import React from 'react';
import useThemeStore from '../../store/useThemeStore';
import Switch from '../Switch/Switch';
import { ThemeSwitchWrapper } from './ThemeSwitch.style';
import { isDark } from '../../util/isDark';

const changeTheme = useThemeStore.getState().changeTheme;

const ThemeSwitch = () => {
  return (
    <ThemeSwitchWrapper>
      <Switch
        checked={isDark()}
        handleChange={changeTheme}
      />
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;
