import { Typography, CircularProgress, Box } from "@mui/material";

const LoaderRoutesApp = () => {
    return (
        <Box className="center-fullscreen">
            <Box>
                <Typography variant="h5" color="primary" fontWeight="bold">
                    Cargando aplicación...
                </Typography>
                <Box className="center-content">
                    <CircularProgress color="primary" size={30} thickness={2} sx={{ mt: 2 }} />
                </Box>
            </Box>
        </Box>
    );
};

export default LoaderRoutesApp;
