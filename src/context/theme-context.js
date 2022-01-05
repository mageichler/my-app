import {createContext} from 'react';

export const ThemeContext = createContext({
    dark: true,
    changeTheme: () => {},
});

export default ThemeContext;
