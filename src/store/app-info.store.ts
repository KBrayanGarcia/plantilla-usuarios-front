import { create } from "zustand";
import { IAppInfoStore } from "../interfaces/app-store.interface";
import { version } from "../../package.json";

const useAppInfoStore = create<IAppInfoStore>(() => ({
    date_client: new Date(),
    date_client_format: new Date().toLocaleDateString(),
    version_app: version,
}));

export default useAppInfoStore;
