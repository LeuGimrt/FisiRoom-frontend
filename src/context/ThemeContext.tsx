import { nullToString } from 'common/utils/isNull';
import React, { createContext, useState } from 'react';

export type UserTheme = {
  colorTheme: string;
  fontSize: string;
};

export type ThemeValueType = {
  themeColor: string;
  fontSize: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
};

export const colorThemes = {
  default: 'default',
  first: 'first',
  second: 'second',
  third: 'third',
};

export const ROOT_FONT_SIZE = '16px';

const initial = localStorage.getItem('user-theme');
let initialUserThemeObject: UserTheme;

if (initial === null) {
  initialUserThemeObject = {
    colorTheme: colorThemes.default,
    fontSize: '16px',
  };
} else {
  initialUserThemeObject = JSON.parse(nullToString(initial));
}

export const ThemeContext = createContext<ThemeValueType>({
  themeColor: initialUserThemeObject.colorTheme,
  fontSize: initialUserThemeObject.fontSize,
  setThemeColor: () => {},
  setFontSize: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeColor, setThemeColor] = useState(
    initialUserThemeObject.colorTheme
  );
  const [fontSize, setFontSize] = useState(initialUserThemeObject.fontSize);

  return (
    <ThemeContext.Provider
      value={{ themeColor, fontSize, setThemeColor, setFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
