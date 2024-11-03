import { useState } from "react";

const useAccesibility = () => {
    const [openDrawerAccesibility, setOpenDrawerAccesibility] = useState(false);

    return { openDrawerAccesibility, setOpenDrawerAccesibility };
};

export default useAccesibility;
