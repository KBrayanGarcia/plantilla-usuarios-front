import { Outlet } from "react-router-dom";
import DrawerAccesibility from "../admin/layout/DrawerAccesibility";
import { validarVarEnv } from "../../helpers/validate_env";

validarVarEnv();

const PageMain = () => {
    return (
        <>
            <Outlet />
            <DrawerAccesibility />
        </>
    );
};

export default PageMain;
