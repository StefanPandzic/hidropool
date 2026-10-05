import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const navItems = [
  { name: 'Početna', path: '/' },
  { name: 'Usluge', path: '/usluge' },
  { name: 'Cena', path: '/cena' },
  { name: 'Vrste bazena', path: '/vrste-bazena' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Naši projekti', path: '/nasi-projekti' },
  { name: 'Kontakt', path: '/kontakt' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            flexGrow: 1,
          }}
        >
          <Box
            component='img'
            src='/Logo.webp'
            alt='Hidropool Logo'
            width={40}
            height={40}
            sx={{ height: 40, width: 'auto' }}
          />
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Hidropool
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                py: 2,
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position='sticky' component='header' sx={{ borderRadius: 0 }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            to='/'
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component='img'
              src='/Logo.webp'
              alt='Hidropool Logo'
              width={50}
              height={50}
            />
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Hidropool
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color='inherit'
                component={Link}
                to={item.path}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: false,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            willChange: 'transform',
            contain: 'layout style paint',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
