import { ThemeOptions } from "@mui/material";
import { temas } from "../theme/temas";

export type temas_disponibles = "light" | "dark" | "green";
export type CustomThemeOptions = ThemeOptions;
export type CustomThemes = Record<temas_disponibles, CustomThemeOptions>;
export interface IThemeStore {
    theme: temas_disponibles;
    readonly temas: typeof temas;
    setTheme: (theme: temas_disponibles) => void;
}
