import { Outlet } from "react-router-dom";
import DrawerAccesibility from "../admin/layout/DrawerAccesibility";

const PageMain = () => {
    return (
        <>
            <Outlet />
            <DrawerAccesibility />
        </>
    );
};

export default PageMain;
