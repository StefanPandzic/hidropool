import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Pool as PoolIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import ServiceCategories from '../components/ServiceCategories';
import { CONTACT } from '../constants/contact';
import { PRICES } from '../constants/prices';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Image */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          // Responsive background images
          backgroundImage: {
            xs: 'url(/Picture1-mobile.webp)', // Mobile devices
            md: 'url(/Picture1.webp)', // Tablet and desktop
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant='h2'
              component='h1'
              gutterBottom
              sx={{
                mb: 2,
                fontWeight: 600,
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                fontSize: {
                  xs: '1.75rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '3.75rem',
                },
              }}
            >
              Izgradnja, projektovanje i održavanje bazena u Srbiji
            </Typography>

            <Typography
              variant='h5'
              component='p'
              sx={{
                mb: 1,
                fontStyle: 'italic',
                fontWeight: 300,
                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Ne morate putovati na Karibe, stvorite parče raja u svom dvorištu!
            </Typography>

            <Typography
              variant='h5'
              component='p'
              sx={{
                mb: 4,
                fontStyle: 'italic',
                fontWeight: 300,
                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Cena ključ u ruke već od {PRICES.startingPrice}!
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Button
                variant='contained'
                size='large'
                startIcon={<PhoneIcon />}
                href={`tel:${CONTACT.phoneRaw}`}
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                  py: { xs: 1.5, sm: 2, md: 2.5 },
                  px: { xs: 3, sm: 4, md: 5 },
                  borderRadius: 2,
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  boxShadow: 3,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Pozovite {CONTACT.phoneDisplay}
              </Button>

              <Button
                variant='contained'
                size='large'
                startIcon={<EmailIcon />}
                href='/kontakt'
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                  py: { xs: 1.5, sm: 2, md: 2.5 },
                  px: { xs: 3, sm: 4, md: 5 },
                  borderRadius: 2,
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  boxShadow: 3,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Pošaljite nam poruku
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 2,
                backgroundColor: 'background.paper',
              }}
            >
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}
              >
                Imate mali prostor, a želeli biste bazen? Brine vas kosina
                dvorišta? Udaljenost instalacija? Higijena i održavanje?
              </Typography>

              <Typography
                variant='h4'
                sx={{ color: 'primary.main', my: 3, fontWeight: 'bold' }}
              >
                Ne brinite, mi smo tu!
              </Typography>

              <Typography
                variant='body1'
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Naši inženjeri sa dugogodišnjim iskustvom će Vam ponuditi
                najoptimalnije rešenje, a vrhunska oprema Vam garantuje
                bezbednost i savršenu uslugu. Vaše je samo da uživate!
              </Typography>

              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}
              >
                Stvaramo bazene visokog standarda, prilagođene Vašim željama.
                Svaki projekat podrazumeva detaljno planiranje, preciznu izradu
                i završnu obradu koja garantuje dugotrajan kvalitet.
              </Typography>
            </Paper>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <PoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Iskustvo
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Dugogodišnje iskustvo u izgradnji bazena svih vrsta i veličina
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <PoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Kvalitet
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Vrhunski materijali i oprema za dugotrajan i siguran bazen
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <PoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Servis
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Kompletna podrška i održavanje tokom cele godine
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 4 }} />
          </Grid>

          {/* Service Categories */}
          <ServiceCategories />

          {/* Why Choose Us */}
          <Grid item xs={12} sx={{ mt: 4 }}>
            <WhyChooseUs showButtons={true} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
