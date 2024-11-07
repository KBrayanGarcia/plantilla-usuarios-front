import { create } from "zustand";
import { IThemeStore } from "../interfaces/temas.interface";
import { temas } from "../theme/temas";

const useThemeStore = create<IThemeStore>((set) => ({
    temas,
    fontSize: 16,
    theme: "light",
    setFontSize: (fontSize) => set({ fontSize }),
    setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
