import { Outlet } from "react-router";
import EmptyLayout from "../EmptyLayout/EmptyLayout";

const AuthorizationLayout = () => {
  return (
    <EmptyLayout>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </EmptyLayout>
  );
};

export default AuthorizationLayout;
