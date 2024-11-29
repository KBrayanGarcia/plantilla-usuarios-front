import { Navigate, RouteObject } from "react-router-dom";
import { RUTAS_APP } from "../config/string_rutas";

import PageErrorApp from "../../pages/error/PageErrorApp";
import Page404 from "../../pages/NotFound/Page404";

import routes_login from "./RoutesLogin";
import routes_admin from "./RoutesAdmin";
import { lazyRoute } from "../../helpers/lazyRoute";

const routes_main: RouteObject[] = [
    {
        path: "/",
        lazy: lazyRoute(() => import("../../pages/main/PageMain"), "default"),
        errorElement: <PageErrorApp />,
        children: [
            {
                //Modifica para configurar tus rutas en "http://domain/" "/"
                index: true,
                element: <Navigate to={RUTAS_APP.ADMIN} />,
            },
            ...routes_login,
            ...routes_admin,
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default routes_main;
