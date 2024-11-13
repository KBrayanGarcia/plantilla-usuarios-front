export enum NODE_ENV {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    STAGE = "stage",
}

export interface VariablesEntornoAPI {
    VITE_API_URL: string;
}

export interface VariablesEntornoApp {
    VITE_NODE_ENV: NODE_ENV;
}

export interface VariablesEntorno {
    API: VariablesEntornoAPI;
    APP: VariablesEntornoApp;
}
