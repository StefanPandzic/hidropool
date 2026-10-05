import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || null;

  useEffect(() => {
    // Redirect to home if accessed directly (no email in state)
    // This prevents fake conversions from direct URL access
    if (!userEmail) {
      navigate('/', { replace: true });
      return;
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Clear navigation state after component mounts to prevent revisits
    // This makes the page inaccessible even on browser back button
    window.history.replaceState({}, document.title);
  }, [navigate, userEmail]);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 8 }}>
      <Container maxWidth='md'>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 100,
              color: 'success.main',
              mb: 3,
            }}
          />

          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
          >
            Hvala vam!
          </Typography>

          <Typography variant='h5' paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
            Hvala vam na ukazanom poverenju.
          </Typography>

          <Typography
            variant='body1'
            sx={{ fontSize: '1.2rem', mb: 4, lineHeight: 1.8 }}
          >
            Odgovor možete očekivati u narednih <strong>24-48 časova</strong>
            {userEmail && (
              <>
                {' '}
                na email koji ste ostavili{' '}
                <strong style={{ color: '#0277bd' }}>{userEmail}</strong>
              </>
            )}
            .
          </Typography>

          <Typography
            variant='h6'
            sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 4 }}
          >
            Vaš Hidro Pool
          </Typography>

          <Button
            variant='contained'
            size='large'
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              fontSize: '1.1rem',
              py: 2,
              px: 4,
              fontWeight: 'bold',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s',
            }}
          >
            Nazad na početnu
          </Button>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}
