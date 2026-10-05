import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { CONTACT } from '../constants/contact';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'grey.700',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={8}>
            <Typography
              variant='h5'
              component='div'
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Hidro Pool
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationIcon sx={{ mr: 1, mt: 0.5, fontSize: 20 }} />
              <Typography variant='body1'>{CONTACT.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant='body1'>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {CONTACT.phoneFormatted}
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant='body1'>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {CONTACT.email}
                </a>
              </Typography>
            </Box>
            <Typography variant='body2' sx={{ opacity: 0.9 }}>
              PIB: {CONTACT.pib}
            </Typography>
            <Typography variant='body2' sx={{ opacity: 0.9 }}>
              MB: {CONTACT.mb}
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography
              variant='h6'
              component='div'
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Pratite nas
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <IconButton
                component='a'
                href={CONTACT.facebookUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Posetite našu Facebook stranicu'
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component='a'
                href={CONTACT.instagramUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Posetite naš Instagram profil'
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component='a'
                href={CONTACT.viberUrl}
                aria-label='Kontaktirajte nas preko Vibera'
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                component='a'
                href={CONTACT.whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Kontaktirajte nas preko WhatsAppa'
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}
        >
          <Typography variant='body2' align='center' sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Hidro Pool. Sva prava zadržana.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
