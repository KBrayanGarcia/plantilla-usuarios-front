import { Theme, useMediaQuery } from '@mui/material';
import { useState } from 'react';

const useSidebar = () => {
    const mediaQuery = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [collapsed, setCollapsed] = useState(mediaQuery ? false : true);
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = () => {
        setToggled(!toggled);
    };

    const handleCollapseSidebar = () => {
        setCollapsed(!collapsed);
    };

    const setShowSidebar = () => {
        if (mediaQuery) {
            handleToggleSidebar();
        } else {
            handleCollapseSidebar();
        }
    };

    const collapseDesktop = mediaQuery ? setShowSidebar : undefined;

    return {
        collapsed,
        toggled,
        mediaQuery,
        setShowSidebar,
        collapseDesktop,
    };
};

export default useSidebar; 