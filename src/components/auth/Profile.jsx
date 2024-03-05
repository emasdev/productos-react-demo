import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth0()
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    logout()
    handleCloseUserMenu()
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      {isAuthenticated &&
        <>
          <Tooltip title=" Abrir opciones" onClick={handleOpenUserMenu} style={{ cursor: "pointer" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography>{user.name}</Typography>
              {user.picture &&
                <>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.picture} />
                  </IconButton>
                </>
              }

            </Stack>

          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem onClick={onLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      }

    </Box>

  )
}
