import { NotFound404, MainPage, ProfileItem, EventList, EventPage } from "pages";
import { createBrowserRouter } from "react-router-dom";
import { profileUrls, eventUrls } from "urls";
import { Layout } from "widgets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: profileUrls.ROOT_PATH,
        element: <ProfileItem />,
        // children:[
        //   {
        //     path: profileUrls.PROFILE_VIEW_PATH,
        //     element: <ProfileItem />,
        //   }
        // ]
      },
      {
        path: eventUrls.ROOT_PATH,
        element: <EventPage />,
        children: [
          {
            path: eventUrls.ROOT_PATH,
            element: <EventList />,
          },
          {
            path: eventUrls.EVENT_VIEW_PATH,
            element: <EventList />,
          },
          {
            path: eventUrls.EVENT_EDIT_PATH,
            element: <EventList />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound404 />,
  },
]);
