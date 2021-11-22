import { useDispatch, useSelector } from "react-redux";
import * as authSelectors from "../../redux/auth/auth-selectors";
import * as operations from "../../redux/auth/auth-operations";
import defaultAvatar from "../UserMenu/default-avatar.png";
import s from "../UserMenu/UserMemo.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Добро пожаловать, {name}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        logout
      </button>
    </div>
  );
}
