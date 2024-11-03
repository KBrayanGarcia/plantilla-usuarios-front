import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledThemeButtonProps {
    themeColors: {
        background: string;
        text: string;
    };
}

export const StyledThemeButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "themeColors",
})<StyledThemeButtonProps>(({ themeColors }) => ({
    backgroundColor: themeColors.background,
    color: themeColors.text,
    "&:hover": {
        backgroundColor: themeColors.background,
        opacity: 0.9,
    },
}));
