import {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import { storage } from '../model/storage';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        storage.getItem('theme') || Theme.LIGHT
    );
    changeCssRootVariables(theme);
    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};