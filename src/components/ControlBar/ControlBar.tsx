import { AppBar, Button, Box, IconButton, Toolbar, Menu, MenuItem } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
const ControlBar = () => {
    const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
    const toggleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setUserMenuAnchor(event.currentTarget);
    }
    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar>
                <Box sx={{ color: "white" }}>
                    <IconButton aria-label="Home" color="inherit"><HomeIcon /></IconButton>
                    <Button variant="text" color="inherit">My Posts</Button>
                    <Button color="inherit" endIcon={<AddIcon />}>New Post</Button>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                    <IconButton aria-label="Home" color="inherit" onClick={toggleUserMenu}><AccountCircleIcon /></IconButton>
                    <Menu open={Boolean(userMenuAnchor)} anchorEl={userMenuAnchor} onClose={() => setUserMenuAnchor(null)}>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Log out</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ControlBar;