import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Title
                </Typography>

                <div style={{
                    position: 'relative',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    marginRight: 'auto', // Pushes the search box to the center
                    marginLeft: 'auto', // Pushes the search box to the center
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {/* <IconButton aria-label="search">
            <SearchIcon />
          </IconButton> */}
                    <InputBase
                        placeholder="Search…"
                        style={{ flex: 1, padding: '10px' }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <NavLink to="/">
                    <Button sx={{color:"white"}} color="inherit">Home</Button>
                </NavLink>
                <NavLink to="/admin">
                    <Button sx={{color:"white"}} color="inherit">Admin</Button>
                </NavLink>
                <NavLink to="/login">
                    <Button sx={{color:"white"}} color="inherit">Log In</Button>
                </NavLink>
                <NavLink to="/register">
                    <Button sx={{color:"white"}} color="inherit">Register</Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
