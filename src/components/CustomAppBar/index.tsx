import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./style.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SettingsIcon from '@mui/icons-material/Settings';

const CustomAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" classes={{ root: "appbar-root" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 4,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box>
            <Button
              key="deliver"
              onClick={handleCloseNavMenu}
              sx={{ color: "white" }}
            >
              <div className="appbar-deliver">
                <span className="appbar-deliver-to">Deliver to</span>
                <div className="appbar-deliver-location">
                  <LocationOnIcon
                    fontSize="small"
                    classes={{ root: "location-icon-root" }}
                  />
                  <span>India</span>
                </div>
              </div>
            </Button>
          </Box>
          <Box sx={{ ml: 4, mr: 4 }} className="appbar-search-area">
            <TextField
              id="outlined-basic"
              variant="standard"
              classes={{ root: "appbar-search" }}
              size="small"
              InputLabelProps={{ shrink: false }}
              InputProps={{ disableUnderline: true }}
            />
            <IconButton
              type="submit"
              aria-label="search"
              classes={{ root: "appbar-search-icon-button" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box className="appbar-signin-area">
            <div className="appbar-signin">Hello, Signin</div>
            <div className="account-list">Account & Lists</div>
          </Box>
          <Box className="appbar-return-order-area" sx={{ ml: 4 }}>
            <div className="return">Returns</div>
            <div className="orders">& Orders</div>
          </Box>
          <Box sx={{ ml: 4, flexGrow : 1 }} className="appbar-cart">
            <AddShoppingCartIcon
              fontSize="large"
              className="appbar-cart-icon"
            />
            <div className="cart-text-area">
              <div className="cart-count">0</div>
              <div className="appbar-cart-text">Cart</div>
            </div>
          </Box>
          <Box sx={{ mr : 2}} className = "appbar-settings">
              <SettingsIcon fontSize="small"/>
              <span>Settings</span>
          </Box>
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
