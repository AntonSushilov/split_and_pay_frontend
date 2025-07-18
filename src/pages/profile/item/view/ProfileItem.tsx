import type { RootState } from "app/store.interface";
import { useSelector } from "react-redux";
import { PhoneRequest } from "widgets";

export const ProfileItem = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  return (
    <div>
      <div>
        ФИО: {user?.first_name} {user?.last_name}
      </div>
      <div>Username: {user?.username}</div>
      <div>Номер телефона: {user?.phone ? user.phone : <PhoneRequest />}</div>
      <PhoneRequest />
    </div>
  );
};
