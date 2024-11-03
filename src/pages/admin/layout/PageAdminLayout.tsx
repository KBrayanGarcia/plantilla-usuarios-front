import { Box } from "@mui/material";
import SidebarApp from "./SidebarApp";
import useSidebar from "../../../hooks/layout/useSidebar";
import HeaderApp from "./HeaderApp";
import { StyledAdminContainer } from "../../../components/styles/StyledAdminContainer";
import { StyledAdminFooter } from "../../../components/styles/StyledAdminFooter";
import { StyledAdminContent } from "../../../components/styles/StyledAdminContent";
import FooterApp from "./FooterApp";

const PageAdminLayout = () => {
    const { collapsed, toggled, setShowSidebar, collapseDesktop } = useSidebar();

    return (
        <Box display="flex">
            <SidebarApp collapsed={collapsed} toggled={toggled} handleClickItem={collapseDesktop} />
            <StyledAdminContainer>
                <HeaderApp onClickMenu={setShowSidebar} />
                <StyledAdminContent>Content</StyledAdminContent>
                <StyledAdminFooter>
                    <FooterApp />
                </StyledAdminFooter>
            </StyledAdminContainer>
        </Box>
    );
};

export default PageAdminLayout;
