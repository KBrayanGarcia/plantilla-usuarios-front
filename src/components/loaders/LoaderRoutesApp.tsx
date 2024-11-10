import { Typography, CircularProgress, Box } from "@mui/material";
import { StyledBoxLoaderRoutesApp } from "../styles/StyledBoxLoaderRoutesApp";

const LoaderRoutesApp = () => {
    return (
        <StyledBoxLoaderRoutesApp>
            <Box id="box-loader-routes-app">
                <Typography variant="h5" color="primary" fontWeight="bold">
                    Cargando aplicación...
                </Typography>
                <CircularProgress
                    color="primary"
                    size={25}
                    thickness={2}
                    sx={{ mt: 2 }}
                />
            </Box>
        </StyledBoxLoaderRoutesApp>
    );
};

export default LoaderRoutesApp;
