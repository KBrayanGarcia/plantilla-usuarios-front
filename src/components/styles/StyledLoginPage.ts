import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import background from "../../assets/img/login_default_bg.jpg";

export const StyledLoginGrid = styled(Grid)(() => ({
    height: "100vh",
}));

export const StyledBackgroundGrid = styled(Grid)(() => ({
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(10px)",
    minHeight: "100px",
}));

export const StyledLoginBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
}));

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
}));

export const StyledHeaderTypography = styled(Typography)(() => ({
    fontWeight: "bold",
    textAlign: "center",
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
    maxWidth: "65%",
    margin: "0 auto",
    paddingY: theme.spacing(4),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
}));

export const StyledFormTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontWeight: "bold",
}));
