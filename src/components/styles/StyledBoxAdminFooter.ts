import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBoxAdminFooter = styled(Box)(({theme}) => ({
    boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, 0.1)`,
    padding: "5px 5px",
    backgroundColor: theme.palette.background.paper,
    "#copyright": {
        color: theme.palette.text.secondary,
        opacity: 0.8,
        textAlign: "center",
    },
}));
