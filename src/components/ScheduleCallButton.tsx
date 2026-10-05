import { Button, Box, Typography } from '@mui/material';
import { CONTACT } from '../constants/contact';

interface ScheduleCallButtonProps {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export default function ScheduleCallButton({
  variant = 'contained',
  size = 'large',
  fullWidth = false,
}: ScheduleCallButtonProps) {
  return (
    <Button
      variant={variant}
      color='secondary'
      size={size}
      fullWidth={fullWidth}
      href={`tel:${CONTACT.phoneRaw}`}
      sx={{
        py: 2.5,
        px: 4,
        fontWeight: 'bold',
        boxShadow: variant === 'contained' ? 3 : 0,
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: variant === 'contained' ? 6 : 2,
        },
        transition: 'all 0.3s',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant='body1'
            sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
          >
            Zakažite besplatan izlazak na teren
          </Typography>
        </Box>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          {CONTACT.phoneDisplay}
        </Typography>
      </Box>
    </Button>
  );
}
