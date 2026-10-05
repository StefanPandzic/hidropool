import { Typography, Box, Button, Grid, Paper } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { whyChooseUs } from '../data/homeData';
import { CONTACT } from '../constants/contact';

interface WhyChooseUsProps {
  showButtons?: boolean;
  showEmailButton?: boolean;
}

export default function WhyChooseUs({
  showButtons = true,
  showEmailButton = true,
}: WhyChooseUsProps) {
  return (
    <Paper elevation={3} sx={{ p: 5, textAlign: 'center', borderRadius: 2 }}>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
      >
        Zašto izabrati Hidro Pool?
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {whyChooseUs.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              <CheckCircleIcon sx={{ color: 'primary.main' }} />
              <Typography variant='body1' sx={{ fontWeight: 500 }}>
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant='body1' paragraph sx={{ mt: 3 }}>
        Verujemo da bazen nije samo luksuz već prostor za porodično okupljanje,
        opuštanje i uživanje. Zato svakom projektu pristupamo sa posebnom
        pažnjom.
      </Typography>
      {showButtons && (
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mt: 3,
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            size='large'
            startIcon={<PhoneIcon />}
            href={`tel:${CONTACT.phoneRaw}`}
            sx={{
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
          {showEmailButton && (
            <Button
              variant='contained'
              color='secondary'
              size='large'
              startIcon={<EmailIcon />}
              href='/kontakt'
              sx={{
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
          )}
        </Box>
      )}
    </Paper>
  );
}
