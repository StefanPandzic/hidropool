import { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import ConcretePoolsPage from './products/ConcretePools';
import PVCLinerPoolsPage from './products/PVCLinerPools';
import PolypropylenePoolsPage from './products/PolypropylenePools';
import Footer from '../components/Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`pool-types-tabpanel-${index}`}
      aria-labelledby={`pool-types-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function Products() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
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
            VRSTE BAZENA
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontWeight: 300 }}>
            Izaberite tip bazena koji najbolje odgovara Vašim potrebama
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ mt: 4 }}>
        {/* Tabs Navigation */}
        <Paper elevation={2} sx={{ mb: 4 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            allowScrollButtonsMobile
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 600,
                py: 2,
                minHeight: { xs: 56, md: 64 },
                minWidth: { xs: 100, sm: 140, md: 160 },
                px: { xs: 1, sm: 2 },
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: { xs: 'flex-start', md: 'center' },
              },
              '& .MuiTabs-scrollButtons': {
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
              },
            }}
          >
            <Tab label='Betonski bazeni' />
            <Tab label='Bazeni sa PVC folijom' />
            <Tab label='Polipropilenske kade' />
          </Tabs>
        </Paper>

        {/* Tab Panels */}
        <TabPanel value={value} index={0}>
          <ConcretePoolsPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PVCLinerPoolsPage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PolypropylenePoolsPage />
        </TabPanel>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
