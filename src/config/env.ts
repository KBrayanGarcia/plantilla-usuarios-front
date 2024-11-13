import { VariablesEntorno } from "../interfaces/env.interface";

const variables_entorno: VariablesEntorno = {
    API: {
        VITE_API_URL: import.meta.env.VITE_API_URL,
    },
    APP: {
        VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
    },
};

export default Object.freeze(variables_entorno);
