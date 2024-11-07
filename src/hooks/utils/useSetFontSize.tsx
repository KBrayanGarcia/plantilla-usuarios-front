import useThemeStore from '../../store/theme.store';

const useSetFontSize = () => {

    const { fontSize, setFontSize } = useThemeStore();
    const MAX_FONT_SIZE = 20;
    const MIN_FONT_SIZE = 10;
    


    const increaseFontSize = () => {
        setFontSize(Math.min(fontSize + 1, MAX_FONT_SIZE));
    }

    const decreaseFontSize = () => {
        setFontSize(Math.max(fontSize - 1, MIN_FONT_SIZE));
    }

    return { fontSize, MAX_FONT_SIZE, MIN_FONT_SIZE, increaseFontSize, decreaseFontSize };
}

export default useSetFontSize
