import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Modal,
  IconButton,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  Cloud as CloudIcon,
  Build as BuildIcon,
  DesignServices as DesignServicesIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import CallToAction from '../../components/CallToAction';

export default function ConcretePoolsPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleImageClick = (imageNum: number) => {
    setOpenImage(`/products/betonski${imageNum}.webp`);
  };

  const handleCloseModal = () => {
    setOpenImage(null);
  };

  const advantages = [
    {
      icon: <TimerIcon sx={{ fontSize: 50 }} />,
      title: 'Dugotrajan materijal',
      description:
        'Betonski bazeni su izuzetno otporni na habanje i mogu trajati decenijama. Kvalitetna izrada garantuje stabilnost kroz godine, bez potrebe za čestim renoviranjem.',
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 50 }} />,
      title: 'Prilagodljivost dizajna',
      description:
        'Oblik bazena se u potpunosti prilagođava specifičnim zahtevima prostora. Naša specijalnost su pravougaoni bazeni različitih veličina koji omogućavaju maksimalnu iskorišćenost prostora.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 50 }} />,
      title: 'Otpornost na vremenske uslove',
      description:
        'Beton je otporan na temperaturne promene i ne puca usled ekstremnih vrućina ili hladnoće. Zadržava strukturalnu čvrstinu u svim vremenskim uslovima.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 50 }} />,
      title: 'Fleksibilnost u opremi',
      description:
        'Potpuna sloboda izbora opreme - grejanje, napredni sistemi filtracije, LED osvetljenje, hidroterapija. Prilagodite bazen Vašim potrebama za udobnost i efikasnost.',
    },
  ];

  const processSteps = [
    {
      title: '1. Planiranje i projektovanje',
      description:
        'Svaka izrada počinje temeljitim planiranjem. Radimo detaljan razgovor kako bismo razumeli Vaše želje, potrebe prostora i budžet. Razvijamo projekat koji obuhvata sve aspekte – dimenzije, oblik, opremu i završnu obradu.',
    },
    {
      title: '2. Iskop i priprema temelja',
      description:
        'Iskopavanje i priprema temelja su ključni za dugoročnu stabilnost. Precizno iskopavanje prema definisanim dimenzijama i postavljanje čvrstog temelja koji pruža pouzdanu podršku.',
    },
    {
      title: '3. Izrada betonske konstrukcije',
      description:
        'Postavljanje armature i betoniranje osnovne i zidne strukture. Betonska konstrukcija pruža dugoročnu stabilnost i otpornost na pritiske vode i spoljne uticaje.',
    },
    {
      title: '4. Hidroizolacija i završni radovi',
      description:
        'Najkvalitetnija hidroizolacija sprečava curenje vode. Završni radovi uključuju postavljanje pločica, mozaika ili drugih dekorativnih materijala za estetski izgled.',
    },
    {
      title: '5. Instalacija opreme i testiranje',
      description:
        'Instalacija sistema za filtraciju, grejanje, osvetljenje i svih dodataka. Temeljno testiranje svih sistema pre završetka kako bi sve radilo besprekorno.',
    },
  ];

  return (
    <Box>
      <Container maxWidth='lg' sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 2 }}>
          <Typography
            variant='h3'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
          >
            Betonski bazeni
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Kada razmišljate o bazenu koji će postati srce Vašeg dvorišta, izbor
            materijala igra ključnu ulogu. Betonski bazeni nisu samo obični
            bazeni – oni nude spoj trajnosti, fleksibilnosti u dizajnu i
            dugoročne vrednosti, što ih čini idealnim rešenjem za svakoga ko
            želi više od standardnog bazena.
          </Typography>
        </Paper>

        {/* Image Gallery */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[1, 2, 3, 4].map((num) => (
            <Grid item xs={12} md={6} key={num}>
              <Paper
                elevation={3}
                onClick={() => handleImageClick(num)}
                sx={{
                  height: 350,
                  backgroundImage: `url(/products/betonski${num}.webp)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 6,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Concrete Pools */}
        <Paper
          elevation={3}
          sx={{ p: 5, mb: 6, borderRadius: 2, bgcolor: 'primary.main' }}
        >
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: 'primary.contrastText',
              textAlign: 'center',
            }}
          >
            Zašto odabrati betonski bazen?
          </Typography>

          <Typography
            variant='body1'
            paragraph
            sx={{
              fontSize: '1.1rem',
              mb: 4,
              textAlign: 'center',
              color: 'primary.contrastText',
            }}
          >
            Evo nekoliko razloga zašto su betonski bazeni jedinstveni i zašto bi
            mogli biti savršen izbor za Vaše potrebe:
          </Typography>

          <Grid container spacing={4}>
            {advantages.map((advantage, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ color: 'primary.main', mb: 2, textAlign: 'center' }}
                    >
                      {advantage.icon}
                    </Box>
                    <Typography
                      variant='h6'
                      component='h3'
                      gutterBottom
                      sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                    >
                      {advantage.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {advantage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Process Section */}
        <Paper
          elevation={3}
          sx={{ p: 5, mb: 6, borderRadius: 2, bgcolor: 'primary.main' }}
        >
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: 'primary.contrastText',
              textAlign: 'center',
            }}
          >
            Proces Izrade Betonskog Bazena
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{
              fontSize: '1.1rem',
              mb: 4,
              textAlign: 'center',
              color: 'primary.contrastText',
            }}
          >
            Izrada betonskog bazena je složen proces koji zahteva visoku
            preciznost i stručnost na svakom koraku. Sa našim timom, možete biti
            sigurni da će svaki deo izrade biti izveden sa pažnjom i
            ekspertizom.
          </Typography>

          <List>
            {processSteps.map((step, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'block',
                  mb: 3,
                  bgcolor: 'white',
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <ListItemIcon>
                    <CheckCircleIcon
                      color='primary'
                      sx={{ fontSize: 30, mt: 0.5 }}
                    />
                  </ListItemIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant='h6'
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>

          <Typography
            variant='body1'
            sx={{
              fontSize: '1.1rem',
              mt: 4,
              textAlign: 'center',
              color: 'primary.contrastText',
            }}
          >
            Svaka faza izrade betonskog bazena zahteva stručnost i pažnju prema
            detaljima, a mi smo tu da osiguramo da proces bude bez stresa i da
            krajnji rezultat bude savršen.
          </Typography>
        </Paper>

        {/* Call to Action */}
        <CallToAction title='Za sve dodatne informacije ili ako ste spremni da započnete izradu Vašeg bazena' />
      </Container>

      {/* Image Modal */}
      <Modal
        open={openImage !== null}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          {openImage && (
            <Box
              component='img'
              src={openImage}
              alt='Pool image'
              sx={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 6,
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
