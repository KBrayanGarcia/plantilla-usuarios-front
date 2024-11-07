import { ThemeProvider as ThemeProviderMui } from "@mui/material";
import { crearTema } from "./custom_material";
import useThemeStore from "../store/theme.store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme, fontSize } = useThemeStore();
    return <ThemeProviderMui theme={crearTema(theme, fontSize)}>{children}</ThemeProviderMui>;
};

export default ThemeProvider;
