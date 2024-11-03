import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ISidebar } from "../../../interfaces/layout.interface";
import HomeIcon from "@mui/icons-material/Home";
import UserIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material";
import { Settings } from "@mui/icons-material";

const SidebarApp = ({ collapsed, toggled, handleClickItem }: ISidebar) => {
    const { palette } = useTheme();
    return (
        <Sidebar
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            backgroundColor={palette.primary.main}
            collapsedWidth="50px"
            width="200px"
            style={{
                color: palette.primary.contrastText,
                borderRight: `1px solid ${palette.primary.main}`,
                boxShadow: `0px 0px 10px 0px ${palette.secondary.main}`,
                height: "100vh",
            }}
        >
            <Menu
                menuItemStyles={{
                    button: {
                        height: "40px",
                        paddingLeft: "5px",
                        "&:hover": {
                            backgroundColor: palette.secondary.main,
                            color: palette.secondary.contrastText,
                        },
                    },
                    SubMenuExpandIcon: {
                        right: "7px",
                        height: "70%",
                    },
                    subMenuContent: {
                        backgroundColor: palette.primary.main,
                        color: palette.primary.contrastText,
                        paddingLeft: collapsed ? "0px" : "10px",
                    },
                }}
            >
                <MenuItem onClick={handleClickItem} icon={<HomeIcon />}>
                    Inicio
                </MenuItem>
                <MenuItem onClick={handleClickItem} icon={<UserIcon />}>
                    Usuarios
                </MenuItem>
                <SubMenu label="Configuración" icon={<Settings />}>
                    <MenuItem icon={<Settings />}> Configuración 1 </MenuItem>
                    <MenuItem icon={<Settings />}> Configuración 2 </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};

export default SidebarApp;
