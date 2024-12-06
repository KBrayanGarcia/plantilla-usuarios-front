import { Outlet } from "react-router-dom";
import DrawerAccesibility from "../admin/layout/DrawerAccesibility";
import { validarVarEnv } from "../../helpers/validate_env";
import { Box } from "@mui/material";

validarVarEnv();

const PageMain = () => {
    return (
        <Box height="100vh" position="relative">
            <Outlet />
            <DrawerAccesibility />
        </Box>
    );
};

export default PageMain;
