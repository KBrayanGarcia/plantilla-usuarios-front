import { Typography } from "@mui/material";
import { StyledBoxNotFound } from "../../components/styles/StyledBocNotFound";

const Page404 = () => {
    return (
        <StyledBoxNotFound>
            <Typography variant="h4" color="primary" fontWeight="bold">
                Página no encontrada
            </Typography>
        </StyledBoxNotFound>
    );
};

export default Page404;
