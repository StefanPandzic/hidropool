import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Paper,
} from '@mui/material';
import {
  DesignServices as DesignServicesIcon,
  CleaningServices as CleaningIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

interface ServiceCategoriesProps {
  showTitle?: boolean;
  showImages?: boolean;
}

export default function ServiceCategories({
  showTitle = true,
  showImages = false,
}: ServiceCategoriesProps) {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 2 }}>
        {/* Service Categories */}
        {showTitle && (
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
            Naše usluge
          </Typography>
        )}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                bgcolor: 'white',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardActionArea
                href='/usluge/projektovanje-i-izgradnja-bazena'
                sx={{ height: '100%' }}
              >
                {showImages && (
                  <Box
                    component='img'
                    src='/services/projektovanje.webp'
                    alt='Projektovanje i izgradnja bazena'
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, bgcolor: 'primary.main' }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <DesignServicesIcon
                      sx={{ fontSize: 60, color: 'background.paper' }}
                    />
                  </Box>
                  <Typography
                    variant='h5'
                    component='h3'
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'background.paper',
                    }}
                  >
                    Projektovanje i izgradnja bazena
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{ color: 'background.paper', fontWeight: 500 }}
                    >
                      Saznaj više
                    </Typography>
                    <ArrowForwardIcon
                      sx={{ fontSize: 18, color: 'background.paper' }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                bgcolor: 'white',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardActionArea
                href='/usluge/odrzavanje-i-ciscenje-bazena'
                sx={{ height: '100%' }}
              >
                {showImages && (
                  <Box
                    component='img'
                    src='/services/ciscenje.webp'
                    alt='Održavanje i čišćenje bazena'
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, bgcolor: 'primary.main' }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <CleaningIcon
                      sx={{ fontSize: 60, color: 'background.paper' }}
                    />
                  </Box>
                  <Typography
                    variant='h5'
                    component='h3'
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'background.paper',
                    }}
                  >
                    Održavanje i čišćenje bazena
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{ color: 'background.paper', fontWeight: 500 }}
                    >
                      Saznaj više
                    </Typography>
                    <ArrowForwardIcon
                      sx={{ fontSize: 18, color: 'background.paper' }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
