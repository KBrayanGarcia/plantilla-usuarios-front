export interface ISidebar {
    collapsed: boolean;
    toggled: boolean;
    handleClickItem?: () => void;
}

export interface IHeader {
    onClickMenu: () => void;
}
