import "@ant-design/v5-patch-for-react-19";
import { store } from "app";
import { Provider } from "react-redux";
import { HashRouter } from "react-router";
// import { RouterProvider } from "react-router-dom";
// import { router } from "routes/routes";

import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { ConfigProvider, Space, theme } from "antd";
import { HashRoutes } from "routes/routes";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const darkModeChange = useCallback((event: MediaQueryListEvent) => {
    console.log(event.matches ? true : false);
    setDarkMode(event.matches ? true : false);
  }, []);

  useEffect(() => {
    windowQuery.addEventListener("change", darkModeChange);
    return () => {
      windowQuery.removeEventListener("change", darkModeChange);
    };
  }, [windowQuery, darkModeChange]);

  useEffect(() => {
    console.log(windowQuery.matches ? true : false);
    setDarkMode(windowQuery.matches ? true : false);
  }, []);
  return (
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            algorithm: darkMode ? theme.darkAlgorithm : theme.compactAlgorithm,
          }}
        >
          <Space>
            <HashRoutes />
            {/* <RouterProvider router={router} /> */}
          </Space>
        </ConfigProvider>
      </Provider>
    </HashRouter>
  );
};
