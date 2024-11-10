import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IHeader } from "../../../interfaces/layout.interface";
import { StyledBoxAdminHeader } from "../../../components/styles/StyledBoxAdminHeader";

const HeaderApp = ({ onClickMenu }: IHeader) => {
    return (
        <StyledBoxAdminHeader>
            <IconButton title="Abrir menu lateral" onClick={onClickMenu} color="secondary" size="large">
                <MenuIcon />
            </IconButton>
        </StyledBoxAdminHeader>
    );
};

export default HeaderApp;
