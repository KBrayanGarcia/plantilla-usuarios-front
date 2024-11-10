import Copyright from "../../../components/footer/Copyright";
import { StyledBoxAdminFooter } from "../../../components/styles/StyledBoxAdminFooter";
import Grid from "@mui/material/Grid2";

const FooterApp = () => {
    return (
        <StyledBoxAdminFooter>
            <Grid container justifyContent={"center"} id="copyright">
                <Copyright />
            </Grid>
        </StyledBoxAdminFooter>
    );
};

export default FooterApp;
