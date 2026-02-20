import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../../redux-store/store";
const AuthRoute = () => {
  const auth = useSelector(
    (state: RootState) => state.authorization.authorizated,
  );
  if (auth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthRoute;
