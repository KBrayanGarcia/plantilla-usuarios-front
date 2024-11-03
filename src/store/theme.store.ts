import { create } from "zustand";
import { IThemeStore } from "../interfaces/temas.interface";
import { temas } from "../theme/temas";

const useThemeStore = create<IThemeStore>((set) => ({
    temas,
    theme: "light",
    setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
