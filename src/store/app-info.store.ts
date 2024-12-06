import { create } from "zustand";
import { IAppInfoStore } from "../interfaces/app-store.interface";
import { version, author, name_app, name_app_short } from "../../package.json";

const useAppInfoStore = create<IAppInfoStore>(() => ({
    date_client: new Date(),
    date_client_format: new Date().toLocaleDateString(),
    owner_app: author.name,
    version_app: version,
    name_app: name_app,
    name_app_short: name_app_short,
}));

export default useAppInfoStore;
