import { ThemeOptions } from "@mui/material";
import { temas } from "../theme/temas";

export type temas_disponibles = "light" | "dark" | "green";
export type CustomThemeOptions = ThemeOptions;
export type CustomThemes = Record<temas_disponibles, CustomThemeOptions>;
export interface IThemeStore {
    theme: temas_disponibles;
    fontSize: number;
    readonly temas: typeof temas;
    setFontSize: (fontSize: number) => void;
    setTheme: (theme: temas_disponibles) => void;
}
