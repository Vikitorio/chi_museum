import {
  AppBar,
  Button,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux-store/store";
import { logOut } from "../../slices/authorizationSlice";
import { useNavigate } from "react-router";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../providers/ThemeProvider/ThemeProvider";
import { yellow } from "@mui/material/colors";

const ControlBar = () => {
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
    null,
  );
  const toggleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };
  const { theme, setTheme } = useContext(ThemeContext)!;
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(
    (state: RootState) => state.authorization.authorizated,
  );
  const logOutAndNavigate = () => {
    dispatch(logOut());
    navigation("/login");
  };
  const goToAuthorization = () => {
    navigation("/login");
  };
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Box sx={{ color: "white" }}>
          <IconButton
            aria-label="Stripe"
            color="inherit"
            onClick={() => navigation("/")}
          >
            <HomeIcon />
          </IconButton>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigation("/home")}
          >
            My Posts
          </Button>
          <Button
            color="inherit"
            endIcon={<AddIcon />}
            onClick={() => navigation("/new-post")}
          >
            New Post
          </Button>
        </Box>
        <Box sx={{ marginLeft: "auto", display: "flex" }}>
          <Box>
            Mode:
            {theme == "light" && (
              <IconButton
                onClick={() => {
                  setTheme("dark");
                }}
              >
                <LightModeIcon sx={{ color: yellow[800] }} />
              </IconButton>
            )}
            {theme == "dark" && (
              <IconButton
                onClick={() => {
                  setTheme("light");
                }}
              >
                <ModeNightIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            <IconButton
              aria-label="Home"
              color="inherit"
              onClick={toggleUserMenu}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              open={Boolean(userMenuAnchor)}
              anchorEl={userMenuAnchor}
              onClose={() => setUserMenuAnchor(null)}
            >
              {auth ? (
                <MenuItem onClick={logOutAndNavigate}>Log out</MenuItem>
              ) : (
                <MenuItem onClick={goToAuthorization}>Login</MenuItem>
              )}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ControlBar;
