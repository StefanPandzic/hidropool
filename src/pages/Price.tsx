import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Modal,
  IconButton,
} from '@mui/material';
import {
  Pool as PoolIcon,
  Home as HomeIcon,
  Landscape as LandscapeIcon,
  Build as BuildIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  AccessTime as AccessTimeIcon,
  Euro as EuroIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';
import PoolConfigurator from '../components/PoolConfigurator';
import CallToAction from '../components/CallToAction';
import { PRICES } from '../constants/prices';

export default function Team() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleImageClick = (imagePath: string) => {
    setOpenImage(imagePath);
  };

  const handleCloseModal = () => {
    setOpenImage(null);
  };

  const pricingFactors = [
    {
      icon: <PoolIcon sx={{ fontSize: 50 }} />,
      title: 'Vrsta bazena',
      description:
        'Betonski bazeni su najskuplja opcija, ali dugotrajniji i prilagodljiviji. Liner bazeni su jeftinija opcija, ali zahtevaju češće održavanje. Fiberglass bazeni predstavljaju srednju opciju sa bržom instalacijom.',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 50 }} />,
      title: 'Veličina i oblik bazena',
      description:
        'Veći bazeni zahtevaju više materijala, rada i vremena. Bazeni sa nepravilnim oblicima zahtevaju dodatne radove. Standardni oblici (pravougaonici ili ovalni) su jeftiniji zbog jednostavnijeg izvođenja.',
    },
    {
      icon: <LandscapeIcon sx={{ fontSize: 50 }} />,
      title: 'Lokacija i pristup terenu',
      description:
        'Ravan i dostupan teren smanjuje troškove. Neuređen teren, nagibi ili težak pristup za mašine povećavaju cenu. Tip tla i potreba za dodatnom hidroizolacijom takođe utiču na troškove.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 50 }} />,
      title: 'Oprema i funkcionalnosti',
      description:
        'Sistemi za filtraciju i grejanje su osnovni delovi opreme. Ekološki sistemi bez hemije mogu biti skuplji ali isplativiji dugoročno. Rasveta, vodopadi i masažni mlazovi dodaju luksuz i povećavaju trošak.',
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 50 }} />,
      title: 'Hidroizolacija i održavanje',
      description:
        'Kvalitetna hidroizolacija je ključna za dugovekost. Bazeni sa minimalnom upotrebom hemikalija imaju složenije sisteme za filtraciju što dodaje na cenu.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 50 }} />,
      title: 'Dodatni elementi',
      description:
        'Automatizovani sistemi za pokrivače, slani sistemi filtracije, elektronsko upravljanje. Poklopci, sistemi za čišćenje na daljinu i posebni materijali za oblaganje značajno povećavaju cenu.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 50 }} />,
      title: 'Sezona i rokovi izgradnje',
      description:
        'U letnjoj sezoni cene mogu rasti zbog velike potražnje. Hitni rokovi zahtevaju dodatne radnike ili skuplje materijale, što povećava troškove.',
    },
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
          <EuroIcon sx={{ fontSize: 80, mb: 2 }} />
          <Typography
            variant='h2'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            CENA BAZENA
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontWeight: 300 }}>
            Od čega zavisi cena izrade bazena?
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Introduction */}
        <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 2 }}>
          <Typography
            variant='h5'
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
          >
            Izgradnja bazena - ozbiljan investicioni projekat
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Izgradnja bazena je ozbiljan investicioni projekat koji zahteva
            pažljivo planiranje i razmatranje svih faktora koji utiču na njegovu
            cenu. Iako je teško dati tačan odgovor bez detaljnog uvida u teren i
            zahteve, možemo reći da cena izgradnje bazena zavisi od mnogo
            faktora.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            U osnovi, raspon cena može biti prilično širok i{' '}
            <strong>kreće se od {PRICES.priceRange}</strong>, u zavisnosti od
            Vaših specifičnih potreba i uslova.
          </Typography>
        </Paper>

        {/* Image Gallery */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              onClick={() => handleImageClick('/Picture2.webp')}
              sx={{
                height: 400,
                backgroundImage: 'url(/Picture2.webp)',
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
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              onClick={() => handleImageClick('/Picture3.webp')}
              sx={{
                height: 400,
                backgroundImage: 'url(/Picture3.webp)',
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
        </Grid>

        {/* Configurator Call to Action */}
        <Paper
          elevation={3}
          sx={{
            p: '40px 40px 0px',
            mb: 6,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h5'
            paragraph
            sx={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 'bold' }}
          >
            Dizajnirajte svoj savršeni kutak za opuštanje u samo nekoliko
            klikova!
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '1.1rem', mb: 2 }}>
            Pokrenite naš konfigurator i odmah saznajte preciznu procenu
            investicije za izgradnju bazena iz vaših snova.
          </Typography>
          <PoolConfigurator variant='compact' />
        </Paper>

        {/* Pricing Factors */}
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
            Faktori koji utiču na cenu
          </Typography>

          <Grid container spacing={4}>
            {pricingFactors.map((factor, index) => (
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
                      {factor.icon}
                    </Box>
                    <Typography
                      variant='h6'
                      component='h3'
                      gutterBottom
                      sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                    >
                      {index + 1}. {factor.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {factor.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Why Difficult to Determine */}
        <Paper
          elevation={3}
          sx={{
            p: 5,
            mb: 6,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 3 }}
          >
            Zašto je teško odrediti tačnu cenu?
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Izgradnja bazena je prilagođen proces, i dok neki manji bazeni mogu
            koštati oko {PRICES.minPrice}, drugi, luksuzniji bazeni sa
            specijalnim funkcijama mogu dostići cenu i do {PRICES.maxPrice} ili
            više.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Naša ponuda je potpuno prilagodljiva Vašim željama, potrebama i
            budžetu, pa je potrebno obaviti detaljnu procenu pre nego što možemo
            ponuditi konačnu cenu.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}
          >
            Zato, iako nije moguće navesti tačne cifre unapred, uveravamo Vas da
            ćemo na osnovu Vaših zahteva i specifičnih uslova lokacije
            pripremiti fer i konkurentnu ponudu.
          </Typography>
        </Paper>

        {/* Call to Action */}
        <CallToAction
          title='Kontaktirajte nas za besplatnu procenu'
          description='Ako želite da saznate koliko bi koštao Vaš bazen, pozivamo Vas da nas kontaktirate putem kontakt forme ili nas pozovete direktno. Naš tim će izvršiti besplatnu procenu i dati Vam tačan odgovor na osnovu specifičnih zahteva i Vašeg budžeta.'
        />
      </Container>

      <Footer />

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
