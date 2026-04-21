import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import ComponentsPage from './pages/ComponentsPage';

function Layout({ children, withFooter = true }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      {withFooter && <Footer />}
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/register" element={<Layout withFooter={false}><RegisterPage /></Layout>} />
          <Route path="/components" element={<Layout><ComponentsPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
