export interface ISidebar {
    collapsed: boolean;
    toggled: boolean;
    handleClickItem?: () => void;
}

export interface IHeader {
    onClickMenu: () => void;
}

export interface SidebarMenuItemProps {
    icon: React.ReactNode;
    title: string;
    to?: string;
    onClick?: () => void;
}

export interface SidebarRoute {
    title: string;
    icon: React.ReactNode;
    to: string;
    children?: SidebarRoute[];
}
