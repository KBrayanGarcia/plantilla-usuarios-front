import { RouteObject } from "react-router-dom";
import { RUTAS_APP } from "../config/string_rutas";

const routes_users: RouteObject[] = [
    {
        path: RUTAS_APP.USERS,
        element: <p>Usuarios</p>,
    },
];

export default routes_users;
