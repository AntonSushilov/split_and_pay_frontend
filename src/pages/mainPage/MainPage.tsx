import { useAppDispatch } from "hooks/UseAppDispatch";
import { useTelegramData } from "hooks/UseTelegramData";
import { useEffect } from "react";
import { userActions } from "services/user";

export const MainPage = () => {
    const dispatch = useAppDispatch();
  const { tg, initData } = useTelegramData();
  //   const state = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    if (tg && initData) {
      dispatch(userActions.checkAuthRequest(tg));
    }
  }, [tg, initData]);

  return <div> mainPage</div>;
};
