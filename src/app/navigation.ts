import {router} from "routes"

export const appNavigate = (path: string, opts?: Parameters<(typeof router)["navigate"]>[1]) => {
    router.navigate(path, opts);
};