import HomeIcon from "@mui/icons-material/Home";
import UserIcon from "@mui/icons-material/Person";
import { SidebarRoute } from "../../interfaces/layout.interface";
import { RUTAS_APP } from "./string_rutas";

export const sidebarRoutes: SidebarRoute[] = [
    {
        title: "Inicio",
        icon: <HomeIcon />,
        to: RUTAS_APP.INICIO
    },
    {
        title: "Usuarios",
        icon: <UserIcon />,
        to: RUTAS_APP.USERS
    }
]; 