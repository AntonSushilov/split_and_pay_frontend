import { Outlet } from "react-router-dom";
import { LiveConsole, Main, Menu, MockSwitcher } from "widgets";

export const Layout = () => {

  return (
    <Main>
      <Menu />
      <Outlet />
      <MockSwitcher />
      <LiveConsole />
    </Main>
  );
};
