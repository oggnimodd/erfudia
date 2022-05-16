import create from 'zustand';
import produce from 'immer';

const DEFAULT_COLOR_SCHEME = 'tritesse';

let savedColorScheme = localStorage.getItem('color-scheme');

if(!savedColorScheme) {
  localStorage.setItem('color-scheme', DEFAULT_COLOR_SCHEME);
  savedColorScheme = DEFAULT_COLOR_SCHEME;
}

export const initialColorScheme = savedColorScheme;

const changeColorScheme = (set, newColorScheme) => {
  return set(produce((draft) => {
    draft.colorScheme = newColorScheme;
    localStorage.setItem('color-scheme', newColorScheme);
  }));
};

const useColorSchemeStore = create((set, get) => {
  return {
    colorScheme: initialColorScheme,
    changeColorScheme: (newColorScheme) => changeColorScheme(set, newColorScheme),
  };
});

export default useColorSchemeStore;
