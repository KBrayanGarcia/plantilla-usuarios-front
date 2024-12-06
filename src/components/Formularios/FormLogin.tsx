import { Box, Button, FormGroup, TextField } from "@mui/material";

const FormLogin = () => {
    return (
        <Box>
            <FormGroup sx={{ gap: 2 }}>
                <TextField label="Correo electrónico" variant="filled"  />
                <TextField label="Contraseña" variant="filled"  />
                <Button variant="contained" sx={{ mt: 2 }}>
                    Iniciar sesión
                </Button>
            </FormGroup>
        </Box>
    );
};

export default FormLogin;
