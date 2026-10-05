import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';
import { CONTACT } from '../constants/contact';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const form = e.target as HTMLFormElement;
      const formPayload = new FormData(form);

      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formPayload as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Redirect to thank you page on success with email in state
      navigate('/hvala-vam', { state: { email: formData.email } });
    } catch (err) {
      setError(
        'Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.',
      );
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          boxShadow: 3,
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            variant='h2'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            KONTAKT
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontWeight: 300 }}>
            Kontaktirajte nas za sve informacije
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Introduction */}
        <Paper
          elevation={3}
          sx={{ p: 5, mb: 6, borderRadius: 2, textAlign: 'center' }}
        >
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Ako planirate izgradnju bazena ili vam je potrebna profesionalna
            usluga održavanja, slobodno nas kontaktirajte.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
              >
                Hidro Pool – Novi Sad
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon
                    sx={{ color: 'primary.main', mr: 2, fontSize: 28 }}
                  />
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Telefon:
                  </Typography>
                </Box>
                <Button
                  href={`tel:${CONTACT.phoneRaw}`}
                  sx={{
                    fontSize: '1.2rem',
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      bgcolor: 'transparent',
                    },
                    pl: 0,
                  }}
                >
                  {CONTACT.phoneDisplay}
                </Button>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon
                    sx={{ color: 'primary.main', mr: 2, fontSize: 28 }}
                  />
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Email:
                  </Typography>
                </Box>
                <Button
                  href={`mailto:${CONTACT.email}`}
                  sx={{
                    fontSize: '1rem',
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      bgcolor: 'transparent',
                    },
                    pl: 0,
                    textTransform: 'none',
                  }}
                >
                  {CONTACT.email}
                </Button>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon
                    sx={{ color: 'primary.main', mr: 2, fontSize: 28 }}
                  />
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Lokacija:
                  </Typography>
                </Box>
                <Typography variant='body1' sx={{ pl: 0 }}>
                  Episkopa Visariona 1, Novi Sad 21000
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Podaci o firmi:
                  </Typography>
                </Box>
                <Typography variant='body2' sx={{ opacity: 0.9 }}>
                  PIB: 103906108
                </Typography>
                <Typography variant='body2' sx={{ opacity: 0.9 }}>
                  MB: 61126341
                </Typography>
              </Box>

              <Paper
                elevation={2}
                sx={{ p: 3, mt: 4, bgcolor: 'primary.light' }}
              >
                <Typography
                  variant='body1'
                  sx={{ color: 'white', textAlign: 'center' }}
                >
                  Naš tim će vam pomoći da pronađete najbolje rešenje za vaš
                  prostor i budžet.
                </Typography>
              </Paper>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
              >
                Pošaljite nam poruku
              </Typography>

              {error && (
                <Alert severity='error' sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box
                component='form'
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={handleSubmit}
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                {/* Hidden fields for Netlify Forms */}
                <input type='hidden' name='form-name' value='contact' />
                <input type='hidden' name='bot-field' />

                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Ime i prezime'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='Telefon'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ flexGrow: 1, display: 'flex' }}>
                    <TextField
                      fullWidth
                      label='Vaša poruka'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={12}
                      variant='outlined'
                      sx={{
                        '& .MuiInputBase-root': {
                          height: '100%',
                          alignItems: 'flex-start',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type='submit'
                      variant='contained'
                      color='secondary'
                      size='large'
                      endIcon={<SendIcon />}
                      disabled={loading}
                      fullWidth
                      sx={{
                        fontSize: '1.1rem',
                        py: 2,
                        fontWeight: 'bold',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      {loading ? 'Slanje...' : 'Pošalji poruku'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
