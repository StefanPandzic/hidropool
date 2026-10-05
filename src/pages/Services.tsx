import { Container, Typography, Box, Grid, Divider } from '@mui/material';

import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import ServiceCategories from '../components/ServiceCategories';

export default function Services() {
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
            NAŠE USLUGE
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ py: 8 }}>
        {/* Service Categories */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <ServiceCategories showTitle={false} showImages={true} />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>

        {/* Why Choose Us */}
        <WhyChooseUs showButtons={true} showEmailButton={true} />
      </Container>

      <Footer />
    </Box>
  );
}
