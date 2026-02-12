import { Outlet } from "react-router";
import ControlBar from "../../components/ControlBar/ControlBar";
import EmptyLayout from "../EmptyLayout/EmptyLayout";

const UserLayout = () => {

    return (
        <EmptyLayout>
            <ControlBar />
            <div style={{ flex: 1, marginTop: "64px", padding: "20px 0", width: "100%"}}>
                <Outlet />
            </div>
        </EmptyLayout >
    );
}

export default UserLayout;