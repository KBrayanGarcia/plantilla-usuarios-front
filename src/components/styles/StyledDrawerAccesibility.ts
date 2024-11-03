import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDrawerAccesibility = styled(Drawer)`
    & .MuiDrawer-paper {
        padding: 15px;
        max-width: 320px;
    }
    & #title-drawer-accesibility {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1;
    }
`;
