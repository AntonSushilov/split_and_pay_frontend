import {
  NotFound404,
  MainPage,
  ProfileItem,
  EventList,
  EventPage,
} from "pages";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
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

export const HashRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={profileUrls.ROOT_PATH} element={<ProfileItem />} />
        <Route path={eventUrls.ROOT_PATH} element={<EventPage />}>
          <Route index element={<EventList />} />
          <Route path={eventUrls.EVENT_VIEW_PATH} element={<EventList />} />
          <Route path={eventUrls.EVENT_EDIT_PATH} element={<EventList />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
