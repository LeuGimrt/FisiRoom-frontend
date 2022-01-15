import { nullToString } from 'common/utils/isNull';
import React, { createContext, useState } from 'react';

export type UserTheme = {
  colorTheme: string;
  fontSize: number;
  cursorSize: number;
};

export type ThemeValueType = {
  themeColor: string;
  fontSize: number;
  cursorSize: number;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  setCursorSize: React.Dispatch<React.SetStateAction<number>>;
};

export const colorThemes = {
  default: 'default',
  first: 'first',
  second: 'second',
  third: 'third',
};

export const cursorSizes = {
  small: 0,
  medium: 1,
  large: 2,
};

export const ROOT_FONT_SIZE = 16;

const initial = localStorage.getItem('user-theme');
let initialUserThemeObject: UserTheme;

if (initial === null) {
  initialUserThemeObject = {
    colorTheme: colorThemes.default,
    fontSize: 16,
    cursorSize: cursorSizes.small,
  };
  localStorage.setItem('user-theme', JSON.stringify(initialUserThemeObject));
} else {
  initialUserThemeObject = JSON.parse(nullToString(initial));
}

export const ThemeContext = createContext<ThemeValueType>({
  themeColor: initialUserThemeObject.colorTheme,
  fontSize: initialUserThemeObject.fontSize,
  cursorSize: initialUserThemeObject.cursorSize,
  setThemeColor: () => {},
  setFontSize: () => {},
  setCursorSize: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeColor, setThemeColor] = useState(
    initialUserThemeObject.colorTheme
  );
  const [fontSize, setFontSize] = useState(initialUserThemeObject.fontSize);
  const [cursorSize, setCursorSize] = useState(
    initialUserThemeObject.cursorSize
  );

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        fontSize,
        cursorSize,
        setThemeColor,
        setFontSize,
        setCursorSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
