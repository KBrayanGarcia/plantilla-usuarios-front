import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAdminContent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: "10px",
}));
