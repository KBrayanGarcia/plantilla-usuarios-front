import Grid from "@mui/material/Grid2";
import SidebarApp from "./SidebarApp";
import useSidebar from "../../../hooks/layout/useSidebar";
import HeaderApp from "./HeaderApp";
import { StyledBoxAdminContent } from "../../../components/styles/StyledBoxAdminContent";
import FooterApp from "./FooterApp";
import { Outlet } from "react-router-dom";

const PageAdminLayout = () => {
    const { collapsed, toggled, setShowSidebar, collapseDesktop } = useSidebar();

    return (
        <Grid container height={"100vh"}>
            <SidebarApp collapsed={collapsed} toggled={toggled} handleClickItem={collapseDesktop} />
            <Grid size={"grow"} container direction={"column"} height={"100%"}>
                <Grid>
                    <HeaderApp onClickMenu={setShowSidebar} />
                </Grid>
                <Grid size={"grow"} container direction={"column"}>
                    <Grid size={"grow"}>
                        <StyledBoxAdminContent>
                            <Outlet />
                        </StyledBoxAdminContent>
                    </Grid>
                    <Grid>
                        <FooterApp />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PageAdminLayout;
