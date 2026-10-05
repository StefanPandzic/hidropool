import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Modal,
  IconButton,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

export default function Gallery() {
  const projectTypes = [
    'Moderni dvorišni bazeni',
    'Infinity bazeni',
    'Bazeni sa rasvetom',
    'Bazeni sa grejanjem vode',
  ];

  // Generate array of image filenames 1.webp to 32.webp
  const galleryImages = Array.from({ length: 32 }, (_, i) => `${i + 1}.webp`);

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null,
  );

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentImageIndex(null);
  };

  const handlePrevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      currentImageIndex !== null &&
      currentImageIndex < galleryImages.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
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
            NAŠI PROJEKTI
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontWeight: 300 }}>
            Realizovani projekti širom Srbije
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Introduction */}
        <Paper elevation={3} sx={{ p: 5, mb: 6, borderRadius: 2 }}>
          <Typography
            variant='body1'
            paragraph
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Tokom godina realizovali smo veliki broj projekata u Novom Sadu i
            širom Srbije. Naši bazeni krase dvorišta porodičnih kuća, vila,
            turističkih objekata i spa centara.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}
          >
            Galerija naših radova prikazuje različite tipove bazena:
          </Typography>

          <List>
            {projectTypes.map((type, index) => (
              <ListItem key={index} sx={{ py: 1 }}>
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

          <Typography
            variant='body1'
            sx={{ fontSize: '1.1rem', lineHeight: 1.8, mt: 3 }}
          >
            Svaki projekat je jedinstven i rađen po željama klijenta.
          </Typography>
        </Paper>

        {/* Gallery Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: 280,
                  overflow: 'hidden',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 8,
                  },
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={`/gallery/${image}`}
                  alt={`Hidro Pool projekat ${index + 1}`}
                  loading='lazy'
                  onError={(e) => {
                    console.error(`Failed to load image: /gallery/${image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <CallToAction
          title='Želite da Vaš projekat bude deo naše galerije?'
          description='Kontaktirajte nas i realizujmo Vaš san o savršenom bazenu. Naš tim je spreman da Vam pomogne u svakom koraku.'
        />
      </Container>

      <Footer />

      {/* Image Modal */}
      <Modal
        open={currentImageIndex !== null}
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
          {/* Close Button */}
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

          {/* Previous Button */}
          {currentImageIndex !== null && currentImageIndex > 0 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 1,
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {/* Next Button */}
          {currentImageIndex !== null &&
            currentImageIndex < galleryImages.length - 1 && (
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 1,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            )}

          {/* Image */}
          {currentImageIndex !== null && (
            <Box
              component='img'
              src={`/gallery/${galleryImages[currentImageIndex]}`}
              alt={`Hidro Pool projekat ${currentImageIndex + 1}`}
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
