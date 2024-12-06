import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FormLogin from "../../../components/Formularios/FormLogin";
import useAppInfoStore from "../../../store/app-info.store";
import {
    StyledLoginGrid,
    StyledBackgroundGrid,
    StyledLoginBox,
    StyledHeaderBox,
    StyledHeaderTypography,
    StyledFormBox,
    StyledFormTypography,
} from "../../../components/styles/StyledLoginPage";

const LoginPage = () => {
    const { name_app, name_app_short } = useAppInfoStore();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <StyledLoginGrid container>
            <StyledBackgroundGrid size={{ md: 8, xs: 12 }} />
            <Grid size={{ md: 4, xs: 12 }} sx={{ backgroundColor: theme.palette.background.paper }}>
                <StyledLoginBox>
                    <StyledHeaderBox>
                        <StyledHeaderTypography variant="h6">
                            {isMobile ? name_app_short : name_app}
                        </StyledHeaderTypography>
                    </StyledHeaderBox>
                    <StyledFormBox>
                        <StyledFormTypography variant="h4">Iniciar sesión</StyledFormTypography>
                        <FormLogin />
                    </StyledFormBox>
                </StyledLoginBox>
            </Grid>
        </StyledLoginGrid>
    );
};

export default LoginPage;
