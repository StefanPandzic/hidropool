import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

export default function About() {
  const poolTypes = [
    'Privatni bazeni za dvorišta',
    'Bazeni za vile i apartmane',
    'Bazeni za hotele i spa centre',
    'Montažni i betonski bazeni',
  ];

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
            O NAMA
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontWeight: 300 }}>
            Hidro Pool - Vaš partner za izgradnju i održavanje bazena
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Main Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 5, borderRadius: 2, height: '100%' }}>
              <Typography
                variant='h4'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
              >
                Ko smo mi?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Hidro Pool je firma iz Novog Sada specijalizovana za
                projektovanje, izgradnju i održavanje bazena za privatne i
                poslovne objekte. Naš cilj je da svakom klijentu omogućimo
                vrhunski prostor za uživanje, relaksaciju i zabavu, uz
                korišćenje kvalitetnih materijala i savremene opreme.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Sa dugogodišnjim iskustvom u radu sa bazenskom tehnikom i
                hidroizolacijom, tim Hidro Pool-a nudi kompletna rešenja – od
                ideje i projektovanja, preko izgradnje, pa sve do redovnog
                održavanja bazena.
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Radimo na teritoriji Novog Sada i cele Srbije, a posebno smo
                ponosni na brojne zadovoljne klijente koji nam iz godine u
                godinu ukazuju poverenje.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                height: '100%',
                minHeight: 400,
                backgroundImage: 'url(/onama.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>

        {/* Pool Types Section */}
        <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 2 }}>
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Radimo različite tipove bazena
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', mb: 4, textAlign: 'center' }}
          >
            Svaki projekat prilagođavamo željama klijenta i specifičnostima
            prostora.
          </Typography>

          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} md={8}>
              <List>
                {poolTypes.map((type, index) => (
                  <ListItem key={index} sx={{ py: 1.5 }}>
                    <ListItemIcon>
                      <CheckCircleIcon color='primary' sx={{ fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={type}
                      primaryTypographyProps={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <CallToAction
          title='Kontaktirajte nas za više informacija'
          description='Naš tim je tu da odgovori na sva Vaša pitanja i pomogne u realizaciji Vašeg projekta.'
        />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
