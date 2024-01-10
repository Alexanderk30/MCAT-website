import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  function close () {
    setDrawerOpen(false);
  }

  function open() {
    setDrawerOpen(true);
  }

    return (
        <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={open}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             mcatPlanner
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
      anchor={"left"}
      open={drawerOpen}
      onClose={close}
      
    >
      <p>sdsdsd</p>
    </Drawer>
    </>
    );
  }