import Navigation from "../../components/Navigation/Navigation";
import s from "./AppBar.module.css";
import * as authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function Appba() {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {isLoggenIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}
