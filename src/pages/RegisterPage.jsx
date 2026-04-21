import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button,
  IconButton, InputAdornment, Stack, Link as MuiLink, Paper, Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'background.default', position: 'relative', pt: { xs: 12, md: 16 }, pb: { xs: 4, md: 8 }  }}>
      {/* Background Orbs */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(84,122,149,0.2) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(194,165,109,0.15) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, backgroundColor: 'rgba(51, 66, 82, 0.5)', backdropFilter: 'blur(20px)', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', minHeight: '600px' }}>
          
          {/* Visual Left Side */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', position: 'relative', background: 'linear-gradient(135deg, rgba(84,122,149,0.15) 0%, #232d38 100%)', p: 6, borderRight: '1px solid rgba(255,255,255,0.05)', width: { md: '41.66%' }, flexShrink: 0 }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 2 }}>
              <Box>
                <Button component={Link} to="/" startIcon={<ArrowBackIcon />} sx={{ color: 'text.secondary', mb: 8, p: 0, '&:hover': { color: '#fff', transform: 'none' } }}>
                  Back to platform
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                  <CodeIcon sx={{ color: 'primary.main', fontSize: 36 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                    VORTEX
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 3, color: '#FFFFFF', lineHeight: 1.2 }}>
                  Join the Future of Development.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  A unified platform that gives you everything you need to build, deploy, and scale modern web applications effortlessly.
                </Typography>
              </Box>
              
              <Paper elevation={0} sx={{ mt: 6, p: 4, backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontStyle: 'italic' }}>
                  "Vortex completely changed how our team ships features. Deployment times went from hours to seconds."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', color: '#1a1a1a', fontWeight: 700 }}>SA</Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Sohila Ahmed</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>VP of Engineering, CloudFlare</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* Form Right Side */}
          <Box sx={{ p: { xs: 4, sm: 8, md: 10 }, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h3" sx={{ mb: 1, letterSpacing: '-0.02em' }}>Create your account</Typography>
                <Typography variant="body1" color="text.secondary">
                  Start building for free. No credit card required.
                </Typography>
              </Box>

              <Stack spacing={3}>
                <TextField fullWidth name="name" label="Full Name" variant="outlined" value={form.name} onChange={handleChange} />
                <TextField fullWidth name="email" label="Email Address" variant="outlined" type="email" value={form.email} onChange={handleChange} />

                <Box>
                  <TextField
                    fullWidth name="password" label="Password" variant="outlined" type={showPassword ? 'text' : 'password'}
                    value={form.password} onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1, display: 'block' }}>
                    Must be at least 8 characters long and contain a number or symbol.
                  </Typography>
                </Box>

                <Button variant="contained" color="primary" size="large" sx={{ py: 2, fontSize: '1.1rem', mt: 2 }} endIcon={<ArrowForwardIcon />}>
                  Sign Up & Continue
                </Button>
              </Stack>
              
              <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                  Already have an account? <MuiLink href="#" sx={{ color: 'primary.main', fontWeight: 600, ml: 1, textDecoration: 'none', '&:hover': { color: 'primary.light' } }}>Log in</MuiLink>
                </Typography>
              </Box>
            </Box>
        </Box>
      </Container>
    </Box>
  );
}