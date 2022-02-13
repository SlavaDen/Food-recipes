import s from "../styles/index.module.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar className={s.header}>
      <Toolbar>
        <Typography sx={{ color: "#4e4e4e" }}>Recipes</Typography>
        <Box sx={{ flowGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
