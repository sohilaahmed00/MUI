import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, useScrollTrigger, Slide, useTheme, useMediaQuery, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { Link, useLocation } from 'react-router-dom';

const sectionLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Developers', href: '#developers' },
  { label: 'Pricing', href: '#pricing' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleSectionClick = (href) => {
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={{ background: 'rgba(35, 45, 56, 0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)', boxShadow: 'none' }}>
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, minHeight: 80 }}>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
              <CodeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                VORTEX
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Button component={Link} to="/" sx={{ color: isHome ? '#ffffff' : 'text.secondary', fontWeight: 600, fontSize: '0.95rem', '&:hover': { backgroundColor: 'transparent', color: 'primary.light' } }}>
                  Overview
                </Button>
                {sectionLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => handleSectionClick(link.href)}
                    component={isHome ? 'button' : Link}
                    to={isHome ? undefined : `/${link.href}`}
                    sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.95rem', px: 2, '&:hover': { backgroundColor: 'transparent', color: 'primary.light' } }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2, mx: 1 }} />
                <Button variant="text" component={Link} to="/register" sx={{ color: '#ffffff', fontWeight: 600, ml: 1 }}>
                  Log In
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/register" sx={{ borderRadius: '100px', px: 3, py: 1 }}>
                  Sign Up
                </Button>
              </Box>
            )}

            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#ffffff' }}>
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: 320, pt: 2, backgroundColor: '#232d38', borderLeft: '1px solid rgba(255,255,255,0.05)' } }}>
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff' }}>VORTEX</Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ px: 2, pt: 3 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton component={Link} to="/" onClick={() => setDrawerOpen(false)} sx={{ borderRadius: 2 }}>
              <ListItemText primary="Overview" primaryTypographyProps={{ fontWeight: 600, color: '#ffffff' }} />
            </ListItemButton>
          </ListItem>
          {sectionLinks.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton onClick={() => handleSectionClick(link.href)} sx={{ borderRadius: 2 }}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600, color: 'text.secondary' }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.05)' }} />
          <ListItem sx={{ px: 0, flexDirection: 'column', gap: 2 }}>
            <Button fullWidth variant="outlined" component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
              Log In
            </Button>
            <Button fullWidth variant="contained" color="primary" component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
              Sign Up Free
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}