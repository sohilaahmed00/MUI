import React from 'react';
import {
  Box, Container, Grid, Typography, IconButton,
  Divider, Link as MuiLink, Stack
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Community'],
  Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#232d38', pt: 12, pb: 6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <CodeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                VORTEX
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, maxWidth: 300, lineHeight: 1.8 }}>
              Empowering developers to build the next generation of digital experiences with bleeding-edge technology.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {[GitHubIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton key={i} sx={{ color: 'text.secondary', backgroundColor: 'rgba(255,255,255,0.03)', width: 40, height: 40, '&:hover': { backgroundColor: 'primary.main', color: '#fff', transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2} justifyContent="space-between">
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid item xs={6} sm={4} key={category}>
                  <Typography variant="subtitle2" sx={{ color: '#FFFFFF', mb: 3, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {category}
                  </Typography>
                  <Stack spacing={2}>
                    {links.map((link) => (
                      <MuiLink key={link} href="#" underline="none" sx={{ color: 'text.secondary', fontSize: '0.9rem', transition: 'all 0.2s', '&:hover': { color: 'primary.light' } }}>
                        {link}
                      </MuiLink>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Vortex, Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
             <Box sx={{ width: 8, height: 8, backgroundColor: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }} />
             <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>All systems operational</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}