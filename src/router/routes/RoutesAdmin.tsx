/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const PageAdminLayout = lazy(() => import("../../pages/admin/layout/PageAdminLayout"));

const routes_admin: RouteObject[] = [
    {
        path: "/admin",
        element: <PageAdminLayout />,
    },
];

export default routes_admin;
