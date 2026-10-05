import { Paper, Typography, Button, Chip, Grid, Box } from '@mui/material';
import {
  Settings as SettingsIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

interface PoolConfiguratorProps {
  showCatalog?: boolean;
  variant?: 'default' | 'compact';
}

export default function PoolConfigurator({
  showCatalog = false,
  variant = 'default',
}: PoolConfiguratorProps) {
  const isCompact = variant === 'compact';

  const configuratorSection = (
    <Paper
      elevation={3}
      sx={{
        p: isCompact ? 3 : 4,
        textAlign: 'center',
        borderRadius: 2,
        height: '100%',
        maxWidth: isCompact ? 500 : '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Chip
        label='U pripremi'
        color='warning'
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontWeight: 'bold',
        }}
      />
      <Typography
        variant={isCompact ? 'h6' : 'h5'}
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Konfigurator bazena
      </Typography>
      <Typography variant='body1' paragraph sx={{ mb: 3 }}>
        Kreirajte bazen po Vašoj meri uz pomoć našeg konfiguratora
      </Typography>
      <Button
        variant='outlined'
        size='large'
        startIcon={<SettingsIcon />}
        disabled
        sx={{
          fontSize: isCompact ? '1rem' : '1.1rem',
          py: isCompact ? 1.5 : 2,
          px: isCompact ? 3 : 4,
          fontWeight: 'bold',
        }}
      >
        Konfiguriši bazen
      </Button>
    </Paper>
  );

  const catalogSection = (
    <Paper
      elevation={3}
      sx={{
        p: isCompact ? 3 : 4,
        textAlign: 'center',
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant={isCompact ? 'h6' : 'h5'}
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Katalog bazena
      </Typography>
      <Typography variant='body1' paragraph sx={{ mb: 3 }}>
        Preuzmite naš katalog sa kompletnom ponudom bazena i opreme
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        size='large'
        startIcon={<DownloadIcon />}
        href='/Hidro-pool-katalog.pdf'
        download
        sx={{
          fontSize: isCompact ? '1rem' : '1.1rem',
          py: isCompact ? 1.5 : 2,
          px: isCompact ? 3 : 4,
          fontWeight: 'bold',
        }}
      >
        Preuzmi katalog
      </Button>
    </Paper>
  );

  if (!showCatalog) {
    return <Box sx={{ mb: 6 }}>{configuratorSection}</Box>;
  }

  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      <Grid item xs={12} md={6}>
        {catalogSection}
      </Grid>
      <Grid item xs={12} md={6}>
        {configuratorSection}
      </Grid>
    </Grid>
  );
}
