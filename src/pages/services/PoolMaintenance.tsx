import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CleaningServices as CleaningIcon,
  Handyman as HandymanIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';

export default function PoolMaintenance() {
  const maintenance = [
    'Čišćenje bazena',
    'Kontrolu kvaliteta vode',
    'Dodavanje bazenske hemije',
    'Servis pumpi i filtera',
    'Pripremu bazena za sezonu',
    'Zatvaranje bazena za zimu',
  ];

  const service = [
    'Popravku pumpi',
    'Zamenu filtera',
    'Sanaciju curenja',
    'Zamenu folije',
    'Popravku rasvete',
  ];
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '30vh',
          backgroundImage: 'url(/services/ciscenjebazena.webp)',
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
              variant='h3'
              component='h1'
              gutterBottom
              sx={{
                mb: 2,
                fontWeight: 600,
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
              }}
            >
              Održavanje i čišćenje bazena
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Equipment, Maintenance, Service */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Maintenance */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <CleaningIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                </Box>
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold', textAlign: 'center' }}
                >
                  Održavanje bazena
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant='body2' paragraph>
                  Redovno održavanje bazena je ključno za čistoću vode i dug vek
                  trajanja opreme. Nudimo profesionalno održavanje tokom cele
                  sezone.
                </Typography>
                <List dense>
                  {maintenance.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color='primary' />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Service */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <HandymanIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                </Box>
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold', textAlign: 'center' }}
                >
                  Servis opreme
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant='body2' paragraph>
                  Pružamo servis i popravku bazenske opreme bez obzira da li je
                  bazen građen od strane naše firme ili drugog izvođača.
                </Typography>
                <List dense>
                  {service.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color='primary' />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Pricing */}
          <Grid item xs={12}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant='h4'
                  component='h3'
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'primary.main',
                    mb: 4,
                  }}
                >
                  CENOVNIK
                </Typography>

                {/* Main Services */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        Otvaranje bazena
                      </Typography>
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        60€
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.secondary'>
                      Skidanje prekrivke i dopunu vode u sistem, kalibraciju
                      sondi i proveru nivoa uspune u filteru, provera ispravnost
                      celokupnog sistema za filtraciju i podešavanje svih
                      parametara za ispravnost bazenske vode.*
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        Zatvaranje bazena
                      </Typography>
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        60€
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.secondary'>
                      Zatvaranje bazena podrazumeva pražnjenje kompletnog
                      sistema i izbacivanje vode iz istog, postavljanje
                      prekrivke preko bazena i protivlednih tegova.*
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        Redovno čišćenje bazena
                      </Typography>
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      >
                        30€
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.secondary'>
                      Čišćenje korpe skimera, čišćenje predfiltera pumpe,
                      usisavanje dna i zidova bazena, pranje filtera, kontrolu
                      pH vrednosti vode i nivoa hlora.*
                    </Typography>
                  </Box>

                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ fontStyle: 'italic', display: 'block', mt: 2 }}
                  >
                    *U cenu nije uračunata potrebna hemija
                  </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Individual Services */}
                <Box>
                  <Typography
                    variant='h5'
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    Pojedinačne usluge
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { service: 'Kalibracija pH sonde', price: '20€' },
                      { service: 'Kalibracija Cl sonde', price: '20€' },
                      {
                        service: 'Čišćenje od kamenca ćelije za elektrolizu',
                        price: '50€',
                      },
                      { service: 'Zamena filterske ispune', price: '80€' },
                      { service: 'Remont pumpe', price: '80€' },
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            bgcolor: 'grey.100',
                            borderRadius: 1,
                          }}
                        >
                          <Typography variant='body1'>
                            {index + 1}. {item.service}
                          </Typography>
                          <Typography
                            variant='body1'
                            sx={{ fontWeight: 'bold', color: 'primary.main' }}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <CallToAction title='Za sve dodatne informacije možete nas kontaktirati' />
      </Container>

      <Footer />
    </Box>
  );
}
