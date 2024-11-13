import variables_entorno from "../config/env";

export const validarVarEnv = () => {
    const variablesFaltantes: string[] = [];

    // Obtener todas las keys requeridas de la interfaz
    const keysAPI = Object.keys(variables_entorno.API);
    const keysAPP = Object.keys(variables_entorno.APP);
    const todasLasKeys = [...keysAPI, ...keysAPP];

    // Verificar cada variable
    for (const key of todasLasKeys) {
        if (!import.meta.env[key]) {
            variablesFaltantes.push(key);
        }
    }

    // Si hay variables faltantes, lanza error con todas ellas
    if (variablesFaltantes.length > 0) {
        throw new Error(`Faltan las siguientes variables de entorno: ${variablesFaltantes.join(", ")}`);
    }
};
