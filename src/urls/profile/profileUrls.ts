import type { ProfileParams } from "./profileUrls.interface";
import { PROFILE_ROOT_PATH } from "./profileUrls.constants";
import { getUrl } from "utils";

export const profileUrls = {
  ROOT_PATH: PROFILE_ROOT_PATH,
  PROFILE_VIEW_PATH: `${PROFILE_ROOT_PATH}/:profileUuid`,
  PROFILE_EDIT_PATH: `${PROFILE_ROOT_PATH}/:profileUuid/edit`,

  rootUrl(params: ProfileParams) {
    return getUrl(PROFILE_ROOT_PATH, params);
  },
};
