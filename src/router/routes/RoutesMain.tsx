/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import PageErrorApp from "../../pages/error/PageErrorApp";
import routes_admin from "./RoutesAdmin";
import { RUTAS_APP } from "../config/string_rutas";
import Page404 from "../../pages/NotFound/Page404";

const PageMain = lazy(() => import("../../pages/main/PageMain"));

const routes_main: RouteObject[] = [
    {
        path: "/",
        element: <PageMain />,
        errorElement: <PageErrorApp />,
        children: [
            {
                //Modifica para configurar tus rutas en "http://domain/" "/"
                index: true,
                element: <Navigate to={RUTAS_APP.ADMIN} />,
            },
            ...routes_admin,
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default routes_main;
