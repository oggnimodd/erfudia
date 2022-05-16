import { themes } from './color-schemes.json';

const createStyle = () => {
  let styles = '';

  themes.forEach((i) => {
    const {
      primary,
      accent,
      accentHover,
    } = i.colors;

    const attributes = `
    --primary : ${primary};
    --accent : ${accent};
    `;

    styles += `
      .${i.name} {
        ${attributes}
      }
    `;
  });

  return styles;
};

export default createStyle;
