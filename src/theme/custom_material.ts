import { createTheme } from "@mui/material";
import { temas } from "./temas";
import { temas_disponibles } from "../interfaces/temas.interface";

export const crearTema = (tema: temas_disponibles) => {
    return createTheme({
        ...temas[tema],
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
};
export default crearTema;
