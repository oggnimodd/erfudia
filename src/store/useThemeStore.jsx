import create from 'zustand';
import produce from 'immer';

const DEFAULT_THEME = 'dark';

let savedTheme = localStorage.getItem('theme');
if(!savedTheme) {
  localStorage.setItem('theme', DEFAULT_THEME);
  savedTheme = DEFAULT_THEME;
}

export const initialTheme = savedTheme;

const changeTheme = (set) => {
  return set(produce((draft) => {
    const newTheme = draft.theme === 'dark' ? 'light' : 'dark';
    draft.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  }));
};

const useThemeStore = create((set, get) => {
  return {
    theme: initialTheme,
    changeTheme: () => changeTheme(set),
  };
});

export default useThemeStore;
