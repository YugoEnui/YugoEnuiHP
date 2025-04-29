import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuDialog from "./MenuDialog";
import { AppBar, Toolbar, IconButton } from "@mui/material";

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 全体をFragmentで囲む */}
      {/* メニューバー */}
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* メニューダイアログ */}
      <MenuDialog open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default MenuBar;
