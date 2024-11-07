import { createTheme, responsiveFontSizes } from "@mui/material";
import { temas } from "./temas";
import { temas_disponibles } from "../interfaces/temas.interface";

export const crearTema = (tema: temas_disponibles, fontSize: number) => {
    let theme = createTheme({
        ...temas[tema],
        typography: {
            fontFamily: "Geomanist, sans-serif",
            fontSize,
        }, 
        components: {
            MuiSlider: {
                defaultProps: {
                    size: "small",
                },
            },
            MuiButton: {
                defaultProps: {
                    size: "small",
                },
            },
            MuiTextField: {
                defaultProps: {
                    size: "small",
                    variant: "standard",
                },
            },
            MuiIconButton: {
                defaultProps: {
                    size: "small",
                },
            },
            MuiIcon: {
                defaultProps: {
                    fontSize: "small",
                },
            },
        },
    });

    theme = responsiveFontSizes(theme);

    return theme;
};
export default crearTema;
