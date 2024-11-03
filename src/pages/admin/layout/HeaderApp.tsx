import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IHeader } from "../../../interfaces/layout.interface";
import { StyledAdminHeader } from "../../../components/styles/StyledAdminHeader";

const HeaderApp = ({ onClickMenu }: IHeader) => {

    return (
        <StyledAdminHeader>
            <IconButton title="Abrir menu lateral" onClick={onClickMenu} color="secondary" size="large">
                <MenuIcon />
            </IconButton>
        </StyledAdminHeader>
    );
};

export default HeaderApp;
