import { Typography } from '@mui/material';
import useAppInfoStore from '../../../store/app-info.store';
const FooterApp = () => {
    const { date_client, version_app } = useAppInfoStore();


    return (
        <div className="copyright">
            <Typography variant="body2">
                Todos los derechos reservados © {date_client.getFullYear()}. Versión <b>{version_app}</b>
            </Typography>
        </div>
    )
}

export default FooterApp
