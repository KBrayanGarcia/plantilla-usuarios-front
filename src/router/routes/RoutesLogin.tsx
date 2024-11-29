import { RouteObject } from "react-router-dom";
import { RUTAS_APP } from "../config/string_rutas";
import { lazyRoute } from "../../helpers/lazyRoute";

const routes_login: RouteObject[] = [
    {
        path: RUTAS_APP.LOGIN,
        lazy: lazyRoute(() => import("../../pages/admin/login/LoginPage"), "default"),
    },
];

export default routes_login;
