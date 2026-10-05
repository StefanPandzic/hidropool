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
  WaterDrop as WaterDropIcon,
  Straighten as StraightenIcon,
  CleaningServices as CleaningServicesIcon,
  Timer as TimerIcon,
  Euro as EuroIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import CallToAction from '../../components/CallToAction';

export default function PVCLinerPoolsPage() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleImageClick = (imageNum: number) => {
    setOpenImage(`/products/pvc${imageNum}.webp`);
  };

  const handleCloseModal = () => {
    setOpenImage(null);
  };

  const advantages = [
    {
      icon: <WaterDropIcon sx={{ fontSize: 50 }} />,
      title: 'Voda ne curi',
      description:
        'PVC folija eliminiše mogućnost curenja vode. Pruža 100% vodonepropusnost bez obzira na tip bazena. Posebno značajno kod starijih bazena gde mikro-pukotine mogu dovesti do gubitka vode.',
    },
    {
      icon: <StraightenIcon sx={{ fontSize: 50 }} />,
      title: 'Prilagodljivost',
      description:
        'PVC folija se može prilagoditi gotovo svim oblicima i veličinama bazena. Bilo da želite pravougaoni, zaobljen ili nepravilan oblik, PVC folija se savršeno uklapa u svaki projekat.',
    },
    {
      icon: <CleaningServicesIcon sx={{ fontSize: 50 }} />,
      title: 'Jednostavno održavanje',
      description:
        'Glatka, neporozna površina prirodno odbija prljavštinu, alge i naslage. Čišćenje zahteva manje vremena i hemikalija, što smanjuje troškove i štedi vreme.',
    },
    {
      icon: <TimerIcon sx={{ fontSize: 50 }} />,
      title: 'Trajnost',
      description:
        'PVC folija može trajati više od 10 godina uz pravilno održavanje. Otporna je na UV zračenje, hemikalije i mehanička oštećenja usled česte upotrebe.',
    },
    {
      icon: <EuroIcon sx={{ fontSize: 50 }} />,
      title: 'Pristupačnost',
      description:
        'Povoljnija u poređenju sa pločicama ili mozaikom. Brža i jednostavnija ugradnja, manje troškova rada, i ekonomično dugotrajno održavanje.',
    },
  ];

  const installationSteps = [
    {
      title: '1. Priprema podloge',
      description:
        'Površina bazena mora biti glatka, čista i ravna. Uklanjanje svih nepravilnosti, pukotina ili oštrih ivica koje bi mogle oštetiti foliju.',
    },
    {
      title: '2. Postavljanje zaštitnog sloja',
      description:
        'Geotekstil se postavlja na pripremljenu podlogu. Štiti PVC foliju od oštećenja i poboljšava dugotrajnost i otpornost na habanje.',
    },
    {
      title: '3. Varenje PVC folije',
      description:
        'Folija se postavlja i seče prema dimenzijama bazena. Spojevi se termički vari specijalizovanim alatima stvarajući vodootporne šavove.',
    },
    {
      title: '4. Završni radovi i montaža',
      description:
        'Dodatno zaptivanje spojeva, montaža skimmera, mlaznica, osvetljenja i sistema za filtraciju. Temeljна provera kvaliteta.',
    },
  ];

  const maintenanceTips = [
    {
      title: 'Čišćenje PVC folije',
      description:
        'Koristite meke sunđere ili četke koje nisu abrazivne. Preporučljivi su blagi sapun ili specijalizovani preparati za PVC bazene. Izbegavajte grube četke i agresivne hemikalije.',
    },
    {
      title: 'Korišćenje hemikalija',
      description:
        'Izbegavajte jako kisele supstance i agresivne preparate. Koristite pH neutralne proizvode i stabilizatore. Redovna provera pH vrednosti je ključna.',
    },
    {
      title: 'Priprema bazena za zimu',
      description:
        'Opcije: Pražnjenje bazena, korišćenje zimskih pokrivača, ili prilagođavanje nivoa vode sa zimskim preparatima. Zaštitite foliju od smrzavanja i leda.',
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
            Bazeni sa PVC folijom
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Bazen sa PVC folijom je jedno od najpraktičnijih i najpopularnijih
            rešenja za izgradnju i renovaciju bazena. Ovaj tip bazena nudi
            odličan balans između estetike, trajnosti i pristupačne cene, zbog
            čega ga mnogi vlasnici bazena biraju kao idealnu opciju.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            PVC folija se koristi kao završni sloj kod različitih tipova bazena
            – betonskih, montažnih ili čak starih bazena kojima je potrebno
            osveženje. Ako razmišljate o bazenu koji je i funkcionalan i
            estetski privlačan, nastavite da čitate!
          </Typography>
        </Paper>

        {/* Image Gallery */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[1, 2, 3, 4].map((num) => (
            <Grid item xs={12} md={4} key={num}>
              <Paper
                elevation={3}
                onClick={() => handleImageClick(num)}
                sx={{
                  height: 350,
                  backgroundImage: `url(/products/pvc${num}.webp)`,
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

        {/* Advantages Section */}
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
            Prednosti bazena sa PVC folijom
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
            Bazen sa PVC folijom donosi brojne prednosti koje ga čine popularnim
            izborom. Ove prednosti nisu samo praktične, već i estetske.
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

        {/* Installation Process */}
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
            Proces ugradnje PVC folije za bazene
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
            Ugradnja PVC folije je složen proces koji zahteva stručnost,
            pažljivo planiranje i kvalitetne materijale kako bi se obezbedila
            trajnost i estetski izgled.
          </Typography>

          <List>
            {installationSteps.map((step, index) => (
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
            Pravilno postavljena folija može trajati dugi niz godina uz
            minimalno održavanje, pružajući bazenu moderan izgled i optimalnu
            funkcionalnost.
          </Typography>
        </Paper>

        {/* Maintenance Section */}
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
            Održavanje bazena sa PVC folijom
          </Typography>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', mb: 4, textAlign: 'center' }}
          >
            Pravilno održavanje je ključno za očuvanje svih prednosti PVC
            folije. Pridržavanje nekoliko osnovnih pravila osigurava da Vaš
            bazen ostane u savršenom stanju tokom godina.
          </Typography>

          <Grid container spacing={3}>
            {maintenanceTips.map((tip, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant='h6'
                      gutterBottom
                      sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
                    >
                      {tip.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {tip.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Why Choose */}
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
            Zašto izabrati PVC foliju?
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            PVC folija predstavlja savršenu kombinaciju trajnosti,
            pristupačnosti i modernog dizajna. Njena otpornost na UV zračenje,
            habanje i hemikalije čini je idealnim izborom za privatne i
            komercijalne bazene. Uz pravilno održavanje, bazeni sa PVC folijom
            mogu trajati decenijama, pružajući Vam uživanje i estetiku bez
            velikih troškova.
          </Typography>
        </Paper>

        {/* Call to Action */}
        <CallToAction
          title='Želite bazen sa PVC folijom?'
          description='Kontaktirajte nas danas i saznajte više o mogućnostima i rešenjima koja nudimo! Naš tim je tu da Vaš bazen pretvori u savršen prostor za uživanje.'
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
