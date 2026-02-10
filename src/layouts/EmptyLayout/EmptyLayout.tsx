import { Box } from "@mui/material";
import type { ReactNode } from "react";

const EmptyLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center" }}>
            {children}
        </Box>);
}

export default EmptyLayout;