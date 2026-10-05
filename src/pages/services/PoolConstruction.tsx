import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import {
  DesignServices as DesignServicesIcon,
  Construction as ConstructionIcon,
  ShieldMoon as ShieldIcon,
  Thermostat as ThermostatIcon,
  Phone as PhoneIcon,
  WaterDrop as WaterDropIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import Footer from '../../components/Footer';
import PoolConfigurator from '../../components/PoolConfigurator';
import ScheduleCallButton from '../../components/ScheduleCallButton';
import { CONTACT } from '../../constants/contact';
import { PRICES } from '../../constants/prices';

export default function PoolConstruction() {
  const mainServices = [
    {
      icon: <DesignServicesIcon sx={{ fontSize: 50 }} />,
      title: 'Konsultacije i kreiranje plana za bazen',
      description:
        'Svaka izgradnja bazena počinje detaljnom analizom i savetovanjem. Zajedno s Vama razmatramo sve relevantne faktore, poput prostora, željenog oblika, veličine i specifičnih zahteva. Na osnovu Vaših želja i mogućnosti prostora, kreiramo plan koji je u potpunosti prilagođen Vašim potrebama i dugoročno rešenje koje će biti estetski privlačno, funkcionalno i lako za održavanje.',
    },
    {
      icon: <ConstructionIcon sx={{ fontSize: 50 }} />,
      title: 'Izgradnja bazena po najvišim standardima',
      description:
        'Naš tim preuzima sve građevinske radove vezane za izgradnju Vašeg bazena, počevši od pripreme terena, preko postavljanja temelja, do formiranja same bazenske konstrukcije. Koristimo visokokvalitetne materijale koji obezbeđuju dugoročnu stabilnost i otpornost bazena, čak i u najzahtevnijim vremenskim uslovima. Bez obzira na specifične zahteve Vašeg projekta, naši stručnjaci su spremni da reše svaki izazov.',
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 50 }} />,
      title: 'Završna obrada i hidroizolacija bazena',
      description:
        'Da bi Vaš bazen radio besprekorno, instaliramo napredne hidroizolacione sisteme koji sprečavaju curenje i garantuju dugotrajnu funkcionalnost. Takođe, završne obloge koje postavljamo su otporne na sve spoljne uticaje, uključujući sunce, vlagu i hemikalije, čime Vaš bazen ne samo da ostaje funkcionalan, već i dugoročno očuva svoj izgled.',
    },
    {
      icon: <ThermostatIcon sx={{ fontSize: 50 }} />,
      title: 'Ugradnja sistema za filtraciju i grejanje',
      description:
        'Za čistu i zdravu vodu, postavljamo napredne sisteme filtracije koji održavaju optimalne uslove za plivanje tokom cele godine. Takođe, instaliramo opremu za grejanje bazena, omogućujući Vama da uživate u bazenu bez obzira na godišnje doba. Naša oprema je energetski efikasna i dugotrajna, pružajući Vam besprekorno iskustvo u bazenu kroz sve mesece.',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} alignItems='center'>
          {/* Image - Left on desktop, Top on mobile */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
            <Box
              component='img'
              src='/services/izgradnja.webp'
              alt='Izgradnja bazena'
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          {/* Text - Right on desktop, Bottom on mobile */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 2 } }}>
            <Typography
              variant='h3'
              component='h1'
              gutterBottom
              color='primary.main'
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Vaš bazen "ključ u ruke" – od projekta do prvog skoka!
            </Typography>
            <Typography
              variant='h6'
              paragraph
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              Izgradnja vrhunskih betonskih bazena uz kompletnu opremu i
              garanciju kvaliteta. Cena već od {PRICES.startingPrice}.
              Pretvorite svoje dvorište u privatnu oazu za samo nekoliko
              nedelja.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleIcon color='primary' />
                <Typography variant='body1'>
                  Besplatne konsultacije na lokaciji
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleIcon color='primary' />
                <Typography variant='body1'>
                  Preko 50 završenih projekata
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckCircleIcon color='primary' />
                <Typography variant='body1'>
                  Garancija na hidroizolaciju i opremu
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <ScheduleCallButton />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ my: 6 }} />

      <Box sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth='lg' sx={{ py: 8 }}>
          {/* Pool Categories */}
          <Paper
            elevation={3}
            sx={{
              p: 5,
              mb: 6,
              borderRadius: 2,
              backgroundColor: 'primary.main',
            }}
          >
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              color='primary.contrastText'
              sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}
            >
              Naše bazene gradimo u tri kategorije prilagođene vašem budžetu.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.contrastText',
                fontSize: '1.1rem',
              }}
            >
              Pronađite idealan balans cene i luksuza uz garanciju kvaliteta za
              svaki model.
            </Typography>

            {/* Basic Category */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Grid container spacing={4} alignItems='start'>
                {/* Text - Left on desktop, bottom on mobile */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant='h5'
                    component='h3'
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      color: 'primary.main',
                    }}
                  >
                    1. {PRICES.packages.basic.name} (
                    {PRICES.packages.basic.priceApprox})
                  </Typography>
                  <Typography variant='body1' sx={{ fontSize: '1.05rem' }}>
                    Idealno rešenje za porodice koje žele sopstvenu oazu uz
                    maksimalnu isplativost. Ovaj paket obuhvata bazen dimenzija
                    {PRICES.packages.basic.dimensions} sa kvalitetnom PVC lajner
                    oblogom koja garantuje vodonepropusnost. Sistem "ključ u
                    ruke" uključuje kompletnu filtraciju i robusne merdevine od
                    prohroma. Završni radovi podrazumevaju montažu ivica od
                    protivkliznog kamena. Basic model je dokaz da luksuz može
                    biti dostupan, bez kompromisa u kvalitetu gradnje i čistoći
                    vode.
                  </Typography>
                </Grid>
                {/* Image - Right on desktop, Bottom on mobile */}
                <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                  <Box
                    component='img'
                    src='/services/basic.webp'
                    alt='Basic bazen'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Comfort Category */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              {/* Text */}
              <Typography
                variant='h5'
                component='h3'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: '1.35rem',
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                2. {PRICES.packages.comfort.name} (
                {PRICES.packages.comfort.priceApprox})
              </Typography>
              <Typography variant='body1' sx={{ fontSize: '1.05rem', mb: 4 }}>
                Naš najpopularniji izbor nudi savršen balans komfora i estetike.
                Bazen dimenzija {PRICES.packages.comfort.dimensions} pruža
                prostranost za plivanje i rekreaciju. Uz napredniji filtracioni
                set, Comfort paket uključuje automatizaciju hlorisanja, RGB LED
                osvetljenje sa promenom boja i ugrađene unutrašnje stepenice
                obložene protivkliznim materijalom. Završna obrada obuhvata
                premium lajner dezene i prošireni pojas dekorativnog kamena oko
                bazena. Ovaj nivo opreme dizajniran je za maksimalno uživanje uz
                minimalno vreme potrebno za održavanje.
              </Typography>
              {/* Images - Two images side by side on desktop, stacked on mobile */}
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    component='img'
                    src='/services/comfort1.webp'
                    alt='Comfort bazen 1'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    component='img'
                    src='/services/comfort2.webp'
                    alt='Comfort bazen 2'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Premier Category */}
            <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
              {/* Text */}
              <Typography
                variant='h5'
                component='h3'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: '1.35rem',
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                3. {PRICES.packages.premier.name} (
                {PRICES.packages.premier.priceApprox})
              </Typography>
              <Typography variant='body1' sx={{ fontSize: '1.05rem', mb: 4 }}>
                Premier nivo je namenjen onima koji žele unikatno remek-delo u
                svom dvorištu. Dimenzije i oblici su potpuno personalizovani, a
                konstrukcija se najčešće izvodi u staklenom mozaiku ili
                najfinijoj keramici. Oprema obuhvata samo vrhunske tehnologije:
                toplotne pumpe za kupanje tokom cele godine, protivstrujno
                plivanje, automatske prekrivače i pametne sisteme za daljinsko
                upravljanje putem telefona. Od prelivnih (infinity) ivica do
                hidromasažnih zona, svaki detalj se projektuje prema vašoj
                viziji. Premier nije samo bazen, već investicija u stil života.
              </Typography>
              {/* Images - Two images side by side on desktop, stacked on mobile */}
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    component='img'
                    src='/services/premier1.webp'
                    alt='Premier bazen 1'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    component='img'
                    src='/services/premier2.webp'
                    alt='Premier bazen 2'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Box
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            mb={6}
          >
            <ScheduleCallButton />
          </Box>
          <Divider sx={{ my: 6 }} />
          <Paper
            elevation={3}
            sx={{
              p: '40px 40px 0px',
              mb: 2,
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
              Izračunajte okvirnu cenu vašeg bazena za 60 sekundi uz pomoć našeg
              konfiguratora i preuzmite naš kompletan katalog bazena i opreme:
            </Typography>

            <PoolConfigurator showCatalog />
          </Paper>

          <Box
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            m={6}
          >
            <ScheduleCallButton />
          </Box>
          <Divider sx={{ my: 6 }} />
          {/* Main Services */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {mainServices.map((service, index) => (
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
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography
                      variant='h5'
                      component='h3'
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Chemical Free Highlight */}
          <Paper
            elevation={3}
            sx={{
              p: 5,
              bgcolor: 'primary.main',
              color: 'white',
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            <WaterDropIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant='h4' component='h2' gutterBottom>
              Vaši bazeni ne zahtevaju hemiju
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '1.1rem', mt: 2 }}>
              Jedna od ključnih prednosti naših bazena je to što su osmišljeni
              tako da im nije potrebna apsolutno nikakva hemija za održavanje
              kvaliteta vode. Na osnovu pažljivo odabranih materijala i
              sofisticiranih sistema filtracije i tretmana, Vaš bazen može da
              funkcioniše bez ikakvih hemikalija, čime štitimo zdravlje
              korisnika i smanjujemo potrebu za dodatnim troškovima i
              održavanjem.
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
                color='secondary'
                size='large'
                startIcon={<PhoneIcon />}
                href={`tel:${CONTACT.phoneRaw}`}
                sx={{
                  mt: 3,
                  fontSize: '1.3rem',
                  py: 2.5,
                  px: 5,
                  fontWeight: 'bold',
                  boxShadow: 3,
                  '&:hover': {
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
                color='secondary'
                size='large'
                startIcon={<EmailIcon />}
                href='/kontakt'
                sx={{
                  mt: 3,
                  fontSize: '1.3rem',
                  py: 2.5,
                  px: 5,
                  fontWeight: 'bold',
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Pošaljite nam poruku
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
