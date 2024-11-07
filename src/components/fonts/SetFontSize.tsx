import { Box, IconButton, Typography } from "@mui/material";
import useSetFontSize from "../../hooks/utils/useSetFontSize";
import { TextDecrease, TextIncrease } from "@mui/icons-material";

const SetFontSize = () => {

    const { fontSize, MAX_FONT_SIZE, MIN_FONT_SIZE, increaseFontSize, decreaseFontSize } = useSetFontSize();

    return (
        <Box display="flex" alignItems="center" gap={1} >
            <IconButton
                title="Disminuir tamaño de la fuente"
                onClick={decreaseFontSize}
                disabled={fontSize === MIN_FONT_SIZE}
            >
                <TextDecrease />
            </IconButton>
            <Typography>{fontSize}</Typography>
            <IconButton
                title="Aumentar tamaño de la fuente"
                onClick={increaseFontSize}
                disabled={fontSize === MAX_FONT_SIZE}
            >
                <TextIncrease />
            </IconButton>
        </Box>
    )
}

export default SetFontSize
