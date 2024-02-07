import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assest/images/wstf-logo 1.png';
import User from '../assest/images/Icon (1).png';
import Details from '../assest/images/Icon.png';

const drawerWidth = 240;
const navItems = ['Statics', 'Overview', 'Dashboard', 'Analytics'];

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#EEF0FA',
  borderRadius: '8px',
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const UserDetailsContainer = styled('div')({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
});

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <img src={Logo} alt="" style={{ width: '25px' }} />
          </IconButton>
          <Typography variant="h6" component="div">
            WASSERSTOFF
          </Typography>
          <SearchContainer>
            <Search>
              <StyledInputBase placeholder="" inputProps={{ 'aria-label': 'search' }} />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </SearchContainer>
          <Box sx={{ display: { xs: 'none', sm: 'flex', padding: '0 0 0 40px', gap: '35px' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{
                  color: 'black',
                  borderBottom: location.pathname === `/${item.toLowerCase()}` ? '1px solid #5756B3' : 'none',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <UserDetailsContainer>
            <img src={User} alt="" />
            <img src={Details} alt="" onClick={handleDrawerToggle} />
          </UserDetailsContainer>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box sx={{ backgroundColor: 'white', color: 'black' }}>
            <Typography variant="h6" sx={{ backgroundColor: 'white', color: 'black', padding: '16px' }}>
              <img src={Logo} alt="" style={{ width: '25px' }} />
              WASSERSTOFF
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
