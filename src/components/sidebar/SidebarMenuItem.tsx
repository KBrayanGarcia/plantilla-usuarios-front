import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { SidebarMenuItemProps } from "../../interfaces/layout.interface";

const SidebarMenuItem = ({ icon, title, to, onClick }: SidebarMenuItemProps) => {
    return (
        <MenuItem 
            onClick={onClick}
            icon={icon}
            component={to ? <Link to={to} /> : undefined}
        >
            {title}
        </MenuItem>
    );
};

export default SidebarMenuItem; 