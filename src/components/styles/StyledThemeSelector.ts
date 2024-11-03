import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ThemeSelectorBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
}));

export const ThemeSelectorItem = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "5px",
})); 