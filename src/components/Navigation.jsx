import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import LoginButton from './auth/LoginButton';
import Profile from './auth/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Stack } from '@mui/material';

export default function ButtonAppBar() {

    const { isAuthenticated } = useAuth0()


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/*                     <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Button component={Link} color='inherit' to="/">
                                <Typography variant="h6" >
                                    Productos
                                </Typography>
                            </Button>
                        </Box>
                        {isAuthenticated ?
                            <Stack direction={"row"} spacing={3}>
                                <Button component={Link} color="inherit" to="/formulario">Formulario</Button>
                                <Profile />
                            </Stack>
                            :
                            <LoginButton />
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
}