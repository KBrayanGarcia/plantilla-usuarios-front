import { useRouteError } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";

const PageErrorApp = () => {
    const error = useRouteError() as { statusText: string; message: string };
    console.error(error);

    const isExistKeysObject = Object.keys(error).length > 0;

    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={4}>
                <Typography variant="h4" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="body1">Lo sentimos, ha ocurrido un error</Typography>
                <Typography variant="body2" color="error">
                    {error.statusText || error.message}
                </Typography>
                {isExistKeysObject && (
                    <Box mt={4}>
                        <Typography variant="body2" component="pre">
                            {JSON.stringify(error, null, 2)}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default PageErrorApp;
