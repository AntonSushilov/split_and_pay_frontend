import type { EventParams } from "./eventUrls.interface";
import { EVENT_ROOT_PATH } from "./eventUrls.constants";
import { getUrl } from "utils";

export const eventUrls = {
  ROOT_PATH: EVENT_ROOT_PATH,
  EVENT_ADD_PATH: `${EVENT_ROOT_PATH}/add`,
  EVENT_VIEW_PATH: `${EVENT_ROOT_PATH}/:eventUuid`,
  EVENT_EDIT_PATH: `${EVENT_ROOT_PATH}/:eventUuid/edit`,

  eventViewUrl(params: EventParams) {
    return getUrl(this.EVENT_VIEW_PATH, params);
  },

  eventEditUrl(params: EventParams) {
    return getUrl(this.EVENT_EDIT_PATH, params);
  },
};
