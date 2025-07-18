import { useAppDispatch } from "hooks/UseAppDispatch";
import { useEffect } from "react";

export const EventList = () => {
  const dispatch = useAppDispatch();
  //   const state = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {}, []);

  return <div> EventList</div>;
};
