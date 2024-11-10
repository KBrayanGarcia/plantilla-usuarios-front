import { create } from "zustand";
import { IAppInfoStore } from "../interfaces/app-store.interface";
import { version, author } from "../../package.json";

const useAppInfoStore = create<IAppInfoStore>(() => ({
    date_client: new Date(),
    date_client_format: new Date().toLocaleDateString(),
    owner_app: author.name,
    version_app: version,
}));

export default useAppInfoStore;
