import { Box, IconButton, Typography } from "@mui/material";
import { Accessibility, ArrowRightTwoTone } from "@mui/icons-material";
import { StyledDrawerAccesibility } from "../../../components/styles/StyledDrawerAccesibility";
import { StyledButtonAccesibility } from "../../../components/styles/StyledButtonAccesibility";
import useAccesibility from "../../../hooks/layout/useAccesibility";
import ThemeSelector from "../../../components/ThemeSelector/ThemeSelector";
import SetFontSize from "../../../components/fonts/SetFontSize";

const DrawerAccesibility = () => {
    const { openDrawerAccesibility, setOpenDrawerAccesibility } = useAccesibility();

    return (
        <StyledButtonAccesibility>
            <IconButton 
                onClick={() => setOpenDrawerAccesibility(!openDrawerAccesibility)} 
                title="Accesibilidad" 
                color="info"
            >
                <Accessibility />
            </IconButton>

            <StyledDrawerAccesibility 
                open={openDrawerAccesibility} 
                anchor="right" 
                onClose={() => setOpenDrawerAccesibility(false)}
            >
                <Box id="title-drawer-accesibility">
                    <IconButton 
                        onClick={() => setOpenDrawerAccesibility(!openDrawerAccesibility)} 
                        title="Cerrar menú de accesibilidad"
                    >
                        <ArrowRightTwoTone />
                    </IconButton>
                    <Typography variant="h5">
                        Accesibilidad
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6">Tema Visual</Typography>
                    <ThemeSelector />
                </Box>
                <Box>
                    <Typography variant="h6">Tamaño de la fuente</Typography>
                    <SetFontSize />
                </Box>
            </StyledDrawerAccesibility>
        </StyledButtonAccesibility>
    );
};

export default DrawerAccesibility;
