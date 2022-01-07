import React, { createContext, useState } from 'react';

export type ThemeValueType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const themes = {
  default: 'default',
  first: 'first',
  second: 'second',
  third: 'third',
};

const initialValue = localStorage.getItem('user-theme') || themes.default;

export const ThemeContext = createContext<ThemeValueType>({
  theme: initialValue,
  setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initialValue);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
