import { Redirect, Switch } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as operations from "./redux/auth/auth-operations";
import * as authSelectors from "./redux/auth/auth-selectors";
import AppBar from "./components/AppBar/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const PhoneBookView = lazy(() => import("./views/PhoneBookView"));

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getFetchCurrentUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchCurrentUser && (
      <>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loadind</p>}>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/phoneBook" restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PrivateRoute path="/phoneBook" exact>
              <PhoneBookView />
            </PrivateRoute>
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </>
    )
  );
}

export default App;
