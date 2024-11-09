import { Sidebar, Menu } from "react-pro-sidebar";
import { ISidebar } from "../../../interfaces/layout.interface";
import { useTheme } from "@mui/material";
import SidebarMenuItem from "../../../components/sidebar/SidebarMenuItem";
import { sidebarRoutes } from "../../../router/config/sidebarRoutes";

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
                minHeight: "100%",
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
                {sidebarRoutes.map((route) => (
                    <SidebarMenuItem
                        key={route.to}
                        icon={route.icon}
                        title={route.title}
                        to={route.to}
                        onClick={handleClickItem}
                    />
                ))}
            </Menu>
        </Sidebar>
    );
};

export default SidebarApp;
