import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBoxAdminHeader = styled(Box)(({ theme }) => ({
    boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, 0.1)`,
    padding: "0px 5px",
    backgroundColor: theme.palette.background.paper,
}));
