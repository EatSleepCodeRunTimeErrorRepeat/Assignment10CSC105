import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuIconHovered, setIsMenuIconHovered] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuIconHover = () => {
    setIsMenuIconHovered(true);
  }

  const handleMenuIconLeave = () => {
    setIsMenuIconHovered(false);
  }

  return (
    <Box container direction="row" sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: "#121212", justifyContent: "space-between" }}>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My website
        </Typography>
        <MenuIcon
          onClick={handleClick}
          onMouseEnter={handleMenuIconHover}
          onMouseLeave={handleMenuIconLeave}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" },
            position: "absolute",
            top: "50px",
            right: "0"}}>
        <Button color="inherit">HOME</Button>
        <Button color="inherit">ABOUT</Button>
        <Button color="inherit">CONTACT</Button>
      </Box>
      <Box sx={{
        display: { xs: isMenuIconHovered ? "block" : "none", md: "none" },
        position: "absolute",
        top: "50px",
        right: "0"
      }}>
        <Button color="inherit">HOME</Button>
        <Button color="inherit">ABOUT</Button>
        <Button color="inherit">CONTACT</Button>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>HOME</MenuItem>
          <MenuItem onClick={handleClose}>ABOUT</MenuItem>
          <MenuItem onClick={handleClose}>CONTACT</MenuItem>
        </Menu>
      </Box>
    </AppBar>
  </Box>
  );
}
