import { Box, Button, Paper, Typography } from '@mui/material';
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import { CONTACT } from '../constants/contact';

export interface CallToActionProps {
  title?: string;
  description?: string;
}

export default function CallToAction({
  title,
  description,
}: CallToActionProps) {
  if (!title && !description) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ p: 5, textAlign: 'center', borderRadius: 2 }}>
      {title && (
        <Typography
          variant='h4'
          component='h2'
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          variant='body1'
          paragraph
          sx={{ fontSize: '1.1rem', mb: 3 }}
        >
          {description}
        </Typography>
      )}
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
  );
}
