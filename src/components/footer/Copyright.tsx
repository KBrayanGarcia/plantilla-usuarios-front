import { Typography } from "@mui/material";
import useAppInfoStore from "../../store/app-info.store";

const Copyright = () => {
    const { date_client, version_app, owner_app } = useAppInfoStore();

    return (
        <Typography variant="body2">
            © {date_client.getFullYear()}. {owner_app} - Versión <b>{version_app}</b>
        </Typography>
    );
};

export default Copyright;
