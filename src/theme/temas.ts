import { CustomThemes } from "../interfaces/temas.interface";

export const temas: CustomThemes = {
    light: {
        palette: {
            mode: "light",
            background: {
                default: "#e0e0e0",
                paper: "#fff",
            },
            primary: {
                main: "#611232",
                contrastText: "#fff",
            },
            secondary: {
                main: "#6F7271",
                contrastText: "#fff",
            },
            warning: {
                main: "#a57f2c",
                contrastText: "#fff",
            },
        },
    },
    green: {
        palette: {
            mode: "light",
            background: {
                default: "#e0e0e0",
                paper: "#fff",
            },
            primary: {
                main: "#008000",
                contrastText: "#fff",
            },
            secondary: {
                main: "#6F7271",
                contrastText: "#fff",
            },
        },
    },
    dark: {
        palette: {
            mode: "dark",
            background: {
                default: "#121212",
                paper: "#292929",
            },
            primary: {
                main: "#121212",
                contrastText: "#fff",
            },
            secondary: {
                main: "#6F7271",
                contrastText: "#fff",
            },
        },
    },
};
