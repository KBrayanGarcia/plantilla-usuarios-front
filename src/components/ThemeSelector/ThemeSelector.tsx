import { Typography } from "@mui/material";
import useThemeStore from "../../store/theme.store";
import { temas_disponibles } from "../../interfaces/temas.interface";
import { Theme } from "@mui/material/styles";
import { StyledThemeButton } from "../styles/StyledThemeButton";
import { ThemeSelectorBox, ThemeSelectorItem } from "../styles/StyledThemeSelector";

const ThemeSelector = () => {
    const { temas, setTheme } = useThemeStore();

    return (
        <ThemeSelectorBox>
            {(Object.keys(temas) as temas_disponibles[]).map((tema) => {
                const currentTheme = temas[tema] as Theme;

                return (
                    <ThemeSelectorItem key={tema}>
                        <Typography>
                            {tema}
                        </Typography>
                        <StyledThemeButton
                            onClick={() => setTheme(tema)}
                            themeColors={{
                                background: currentTheme.palette.primary.main,
                                text: currentTheme.palette.primary.contrastText
                            }}
                        >
                            Aa
                        </StyledThemeButton>
                    </ThemeSelectorItem>
                )
            })}
        </ThemeSelectorBox>
    );
};

export default ThemeSelector; 