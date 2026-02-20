import { Outlet } from "react-router";
import ControlBar from "../../components/ControlBar/ControlBar";
import EmptyLayout from "../EmptyLayout/EmptyLayout";
import NotificationDisplayer from "../../components/NotificationDisplayer/NotificationDisplayer";

const UserLayout = () => {
  return (
    <EmptyLayout>
      <ControlBar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "64px",
          padding: "20px 0",
          width: "100%",
        }}
      >
        <NotificationDisplayer />
        <Outlet />
      </div>
    </EmptyLayout>
  );
};

export default UserLayout;
