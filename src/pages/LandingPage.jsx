import React from 'react';
import {
  Box, Container, Typography, Button, Grid, Card,
  CardContent, Chip, Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import MemoryIcon from '@mui/icons-material/Memory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GitHubIcon from '@mui/icons-material/GitHub';

const features = [
  { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: 'Clean Architecture', desc: 'Maintainable, scalable, and elegantly structured codebases designed for the future of web development.' },
  { icon: <SpeedIcon sx={{ fontSize: 40 }} />, title: 'Lightning Fast', desc: 'Optimized for performance with bleeding-edge rendering techniques and zero-delay interactions.' },
  { icon: <SecurityIcon sx={{ fontSize: 40 }} />, title: 'Enterprise Security', desc: 'Bank-grade encryption and secure authentication flows to keep user data strictly confidential.' },
  { icon: <DnsIcon sx={{ fontSize: 40 }} />, title: 'Cloud Native', desc: 'Seamlessly deploy to modern cloud infrastructure with zero-downtime continuous integration.' },
  { icon: <MemoryIcon sx={{ fontSize: 40 }} />, title: 'AI Intregration', desc: 'Leverage powerful machine learning models straight into your frontend architectures.' },
  { icon: <LanguageIcon sx={{ fontSize: 40 }} />, title: 'Global Edge', desc: 'Serve your application to millions worldwide with ultra-low latency edge networking.' },
];

export default function LandingPage() {

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Dynamic Background Elements */}
      <Box sx={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(84,122,149,0.15) 0%, transparent 70%)', top: '-10%', right: '-10%', filter: 'blur(60px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(194,165,109,0.1) 0%, transparent 70%)', top: '40%', left: '-20%', filter: 'blur(80px)', zIndex: 0 }} />

      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          pt: { xs: 15, md: 20 },
          pb: 10,
          zIndex: 1
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4, display: 'inline-flex', p: 1, pr: 2, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', backdropFilter: 'blur(10px)' }}>
                <Box sx={{ backgroundColor: 'primary.main', color: '#fff', borderRadius: '100px', px: 1.5, py: 0.5, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>NEW</Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>Vortex Engine 2.0 is now live</Typography>
                <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              </Stack>
              
              <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' }, mb: 3, color: '#FFFFFF' }}>
                Build the <br/>
                <Box component="span" sx={{ background: 'linear-gradient(to right, #7B9CB6, #D3BC91)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Next Generation</Box>
              </Typography>
              
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 6, maxWidth: 540 }}>
                Develop breathtaking web applications at the speed of thought. Experience an unparalleled ecosystem designed for modern engineering teams.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Button variant="contained" color="primary" size="large" sx={{ py: 2, px: 4, fontSize: '1.1rem' }} component={Link} to="/register">
                  Start Building Free
                </Button>
                <Button variant="outlined" size="large" sx={{ py: 2, px: 4, fontSize: '1.1rem', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.1)' }} startIcon={<GitHubIcon />}>
                  View Repository
                </Button>
              </Stack>
            </Grid>

            {/* Abstract Hero Visual */}
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ position: 'relative', width: '100%', height: '500px', perspective: '1000px' }}>
                <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'linear-gradient(135deg, rgba(84,122,149,0.2) 0%, rgba(211,188,145,0.1) 100%)', borderRadius: '30px', transform: 'rotateY(-20deg) rotateX(10deg)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', transition: 'transform 0.5s', '&:hover': { transform: 'rotateY(0deg) rotateX(0deg)' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ElectricBoltIcon sx={{ fontSize: 120, color: 'primary.light', filter: 'drop-shadow(0 0 20px rgba(84,122,149,0.6))' }} />
                </Box>
                <Box sx={{ position: 'absolute', bottom: '0', right: '-10%', width: '180px', height: '180px', background: 'rgba(194,165,109,0.1)', borderRadius: '24px', backdropFilter: 'blur(20px)', border: '1px solid rgba(194,165,109,0.3)', transform: 'translateZ(50px)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', animation: 'float 6s ease-in-out infinite' }}>
                   <CodeIcon sx={{ fontSize: 80, color: '#C2A56D' }} />
                </Box>
                <style>
                  {`
                    @keyframes float {
                      0% { transform: translateY(0px) translateZ(50px); }
                      50% { transform: translateY(-20px) translateZ(50px); }
                      100% { transform: translateY(0px) translateZ(50px); }
                    }
                  `}
                </style>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 10, md: 16 }, position: 'relative', zIndex: 1 }} id="features">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>POWERFUL ECOSYSTEM</Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Everything you need to scale
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.2rem' }}>
              We've obsessed over every detail of the developer experience, so you can focus entirely on creating amazing products.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '900px', mx: 'auto'}}>
            {features.map((feature, i) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '100%', maxWidth: '240px', aspectRatio: '1 / 1', p: 3, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(84,122,149,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                  <CardContent sx={{ p: '0 !important', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ mb: 2, display: 'inline-flex', p: 1.5, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', color: 'primary.main' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Developers Section */}
      <Box sx={{ py: 10, backgroundColor: 'rgba(255,255,255,0.01)' }} id="developers">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, fontWeight: 700 }}>FOR DEVELOPERS</Typography>
              <Typography variant="h2" sx={{ mb: 3 }}>Built for engineering velocity.</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.8 }}>
                Integrate effortlessly with our comprehensive API, modern SDKs, and intuitive developer tools. Focus on shipping magical features, we handle the boring infrastructure.
              </Typography>
              <Button variant="outlined" color="primary" size="large" sx={{ py: 1.5, px: 4, borderWidth: '2px', borderColor: 'rgba(255,255,255,0.1)' }}>Read Documentation</Button>
            </Grid>
            <Grid item xs={12} md={6}>
               <Box sx={{ p: 4, borderRadius: '24px', backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', color: '#a5b4fc', overflowX: 'auto', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                  <Typography variant="body2" sx={{ mb: 1, color: '#818cf8', fontWeight: 600 }}>{"// Initialize Vortex Client"}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>const client = new Vortex.Client(&#123; apiKey: 'vx_dev_...', &#125;);</Typography>
                  <Typography variant="body2" sx={{ mb: 1, color: '#818cf8', fontWeight: 600 }}>{"// Deploy your application instantly"}</Typography>
                  <Typography variant="body2">await client.deploy(&#123; path: './dist', production: true &#125;);</Typography>
               </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 12, position: 'relative', zIndex: 1 }} id="pricing">
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>Simple, transparent pricing</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem' }}>No hidden fees. No surprise charges. Just powerful infrastructure that scales with you.</Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
             <Grid item xs={12} sm={6}>
                <Card sx={{ p: 4, borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Hobby</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Perfect for side projects and learning.</Typography>
                   <Typography variant="h3" sx={{ mb: 3 }}>$0 <Typography component="span" variant="body1" color="text.secondary">/mo</Typography></Typography>
                   <Stack spacing={2} sx={{ mb: 4 }}>
                      <Typography variant="body2" color="text.secondary">✔ 100k API Requests</Typography>
                      <Typography variant="body2" color="text.secondary">✔ Community Support</Typography>
                   </Stack>
                   <Button fullWidth variant="outlined" color="primary">Start Free</Button>
                </Card>
             </Grid>
             <Grid item xs={12} sm={6}>
                <Card sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'secondary.main', position: 'relative' }}>
                   <Box sx={{ position: 'absolute', top: 16, right: 16 }}><Chip label="POPULAR" color="secondary" size="small" /></Box>
                   <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Pro</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>For professional developers and teams.</Typography>
                   <Typography variant="h3" sx={{ mb: 3 }}>$29 <Typography component="span" variant="body1" color="text.secondary">/mo</Typography></Typography>
                   <Stack spacing={2} sx={{ mb: 4 }}>
                      <Typography variant="body2" color="text.secondary">✔ Unlimited API Requests</Typography>
                      <Typography variant="body2" color="text.secondary">✔ Priority 24/7 Support</Typography>
                   </Stack>
                   <Button fullWidth variant="contained" color="secondary">Upgrade Now</Button>
                </Card>
             </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', background: 'linear-gradient(180deg, rgba(51,66,82,0.9) 0%, #232d38 100%)', backdropFilter: 'blur(20px)', p: { xs: 4, md: 8 }, borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '50%', height: '2px', background: 'linear-gradient(90deg, transparent, #547A95, transparent)' }} />
            
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 3 }}>
              Ready to deploy?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem', maxWidth: 500, mx: 'auto' }}>
              Join thousands of developers building scalable, high-performance applications with our stack.
            </Typography>
            <Button variant="contained" color="primary" size="large" component={Link} to="/register" sx={{ py: 2.5, px: 6, fontSize: '1.2rem', borderRadius: '100px' }}>
              Create Free Account
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}