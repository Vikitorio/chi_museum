import { Box} from "@mui/material";
import { Outlet } from "react-router";
import ControlBar from "../../components/ControlBar/ControlBar";

const UserLayout = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <ControlBar />
            <Outlet />
        </Box>);
}

export default UserLayout;