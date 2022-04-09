import useThemeStore from '../store/useThemeStore';

export const isDark = () => {
  const theme = useThemeStore.getState().theme;
  return theme === 'dark';
};
