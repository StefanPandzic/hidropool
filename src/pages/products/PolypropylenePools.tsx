import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Modal,
  IconButton,
} from '@mui/material';
import {
  Build as BuildIcon,
  Place as PlaceIcon,
  Euro as EuroIcon,
  Security as SecurityIcon,
  Timer as TimerIcon,
  Close as CloseIcon,
  CleaningServices as CleaningServicesIcon,
  FilterAlt as FilterAltIcon,
  AcUnit as AcUnitIcon,
} from '@mui/icons-material';
import CallToAction from '../../components/CallToAction';

export default function PolypropylenePoolsPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleImageClick = (imageNum: number) => {
    setOpenImage(`/products/polipropilen${imageNum}.webp`);
  };

  const handleCloseModal = () => {
    setOpenImage(null);
  };

  const poolTypes = [
    {
      title: 'Okrugli nadzemni bazeni',
      description:
        'Najpopularniji izbor za dvorišta sa ograničenim prostorom. Njihov kompaktan oblik lako se uklapa u svaki ambijent, a istovremeno pruža dovoljno prostora za osveženje i igru.',
    },
    {
      title: 'Bazeni u obliku osmice',
      description:
        'Ako imate više prostora i tražite nešto elegantnije, bazeni u obliku osmice su savršeni. Osim što imaju sofisticiran izgled, pružaju i dodatni prostor za plivanje.',
    },
  ];

  const advantages = [
    {
      icon: <BuildIcon sx={{ fontSize: 50 }} />,
      title: 'Jednostavna montaža',
      description:
        'Ne zahteva iskopavanje ili građevinske radove. Većina modela može se montirati u roku od nekoliko sati, bez potrebe za posebnom opremom ili stručnom pomoći.',
    },
    {
      icon: <PlaceIcon sx={{ fontSize: 50 }} />,
      title: 'Prilagodljivost prostoru',
      description:
        'Lako se prilagođavaju Vašem dvorištu. Ukoliko jednog dana odlučite da ih premestite, to možete učiniti bez problema.',
    },
    {
      icon: <EuroIcon sx={{ fontSize: 50 }} />,
      title: 'Pristupačnost',
      description:
        'Cena je znatno niža u poređenju sa ukopanim bazenima. Održavanje je jednostavno i ekonomično, dostupno širokom krugu ljudi.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50 }} />,
      title: 'Sigurnost',
      description:
        'Dubina od 120 cm je idealna za porodice s decom. Pruža sigurnost tokom igre u vodi i pogodna je za odrasle.',
    },
    {
      icon: <TimerIcon sx={{ fontSize: 50 }} />,
      title: 'Dugotrajnost',
      description:
        'Naši nadzemni bazeni dolaze sa garancijom od 10 godina, što je dodatni pokazatelj njihovog kvaliteta i izdržljivosti.',
    },
  ];

  const maintenanceTips = [
    {
      icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
      title: 'Čišćenje površine',
      description:
        'Redovno uklanjajte lišće, travu i druge nečistoće sa površine vode kako biste sprečili zagađenje.',
    },
    {
      icon: <FilterAltIcon sx={{ fontSize: 40 }} />,
      title: 'Korišćenje filtracionog sistema',
      description:
        'Preporučuje se upotreba filtera koji će cirkulisati vodu i zadržavati prljavštinu.',
    },
    {
      icon: <AcUnitIcon sx={{ fontSize: 40 }} />,
      title: 'Zaštita tokom zime',
      description:
        'Ako ne planirate da koristite bazen tokom zime, preporučuje se njegovo pražnjenje i prekrivanje.',
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
            Polipropilenske kade
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Kada dođe leto, san o sopstvenom bazenu postaje sve jači. Međutim,
            mnogi odustaju od te ideje zbog komplikovanih građevinskih radova,
            visokih troškova ili manjka prostora. Tu na scenu stupaju
            propilenske kade, odnosno nadzemni bazeni – jednostavni, pristupačni
            i praktični, oni donose sve čari bazena bez velikih ulaganja i
            komplikacija.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Otkrijte kako nadzemni bazeni mogu uneti osveženje u Vaše dvorište,
            zašto su praktični, kako ih odabrati i održavati, i šta ih izdvaja
            od ostalih rešenja.
          </Typography>
        </Paper>

        {/* Image Gallery */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[1, 2].map((num) => (
            <Grid item xs={12} md={6} key={num}>
              <Paper
                elevation={3}
                onClick={() => handleImageClick(num)}
                sx={{
                  height: 400,
                  backgroundImage: `url(/products/polipropilen${num}.webp)`,
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

        {/* Pool Types */}
        <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 2 }}>
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Koje vrste nadzemnih bazena postoje?
          </Typography>

          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', mb: 4, textAlign: 'center' }}
          >
            Kada je reč o obliku i dizajnu, nudimo dve osnovne varijante:
          </Typography>

          <Grid container spacing={4}>
            {poolTypes.map((type, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant='h5'
                      component='h3'
                      gutterBottom
                      sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
                    >
                      {type.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {type.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 6,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', textAlign: 'center' }}
          >
            <strong>Dubina naših nadzemnih bazena je do 120 cm</strong>, što ih
            čini sigurnim i pogodnim za decu i odrasle.
          </Typography>
        </Paper>

        {/* Advantages Section */}
        <Paper
          elevation={3}
          sx={{
            p: 5,
            mb: 6,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
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
            Zašto odabrati nadzemni bazen?
          </Typography>

          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', mb: 4, textAlign: 'center' }}
          >
            Nadzemni bazeni imaju brojne prednosti u odnosu na klasične, ukopane
            bazene. Evo nekoliko razloga zašto su savršen izbor:
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

        {/* Maintenance Section */}
        <Paper
          elevation={3}
          sx={{
            p: 5,
            mb: 6,
            borderRadius: 2,
            bgcolor: 'primary.main',
          }}
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
            Saveti za održavanje bazena
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
            Održavanje nadzemnih bazena je jednostavno i ne zahteva mnogo truda,
            ali nekoliko koraka je ključno kako biste osigurali čistu i bezbednu
            vodu:
          </Typography>

          <Grid container spacing={4}>
            {maintenanceTips.map((tip, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    bgcolor: 'white',
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: 1,
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{tip.icon}</Box>
                  <Typography
                    variant='h6'
                    gutterBottom
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {tip.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {tip.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Why Choose Our Pools */}
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
            Zašto odabrati naše bazene?
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Pored visokog kvaliteta i garancije od 10 godina, naši nadzemni
            bazeni dolaze u različitim oblicima i veličinama, prilagođeni Vašim
            potrebama. Naš tim pruža podršku prilikom odabira i montaže, kako
            biste bez brige uživali u svom novom bazenu.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Nadzemni bazeni su sjajan način da obogatite svoje dvorište i
            stvorite prostor za opuštanje i uživanje tokom letnjih meseci.
            Njihova pristupačnost, jednostavna montaža i dugotrajnost čine ih
            idealnim rešenjem za svakoga ko želi bazen bez komplikacija.
          </Typography>
        </Paper>

        {/* Call to Action */}
        <CallToAction
          title='Ne čekajte da prođe leto!'
          description='Kontaktirajte nas danas i izaberite bazen koji će odgovarati Vašim potrebama.'
        />
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
