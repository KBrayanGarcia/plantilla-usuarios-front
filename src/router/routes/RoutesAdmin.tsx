/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import routes_users from "./RoutesUsers";
import { RUTAS_APP } from "../config/string_rutas";
const PageAdminLayout = lazy(() => import("../../pages/admin/layout/PageAdminLayout"));

const routes_admin: RouteObject[] = [
    {
        path: RUTAS_APP.ADMIN,
        element: <PageAdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={RUTAS_APP.INICIO} />,
            },
            {
                path: RUTAS_APP.INICIO,
                element: <p>Inicio</p>,
            },
            ...routes_users,
        ],
    },
];

export default routes_admin;
