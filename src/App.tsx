import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Price from './pages/Price';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PoolConstruction from './pages/services/PoolConstruction';
import PoolMaintenance from './pages/services/PoolMaintenance';
import CookieConsent from './components/CookieConsent';
import Navbar from './components/Navbar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to avoid forced reflow
    // Batch the scroll operation in the next animation frame
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <CookieConsent />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />

        <Box component='main' role='main' sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vrste-bazena' element={<Products />} />
            <Route path='/usluge' element={<Services />} />
            <Route
              path='/usluge/projektovanje-i-izgradnja-bazena'
              element={<PoolConstruction />}
            />
            <Route
              path='/usluge/odrzavanje-i-ciscenje-bazena'
              element={<PoolMaintenance />}
            />
            <Route path='/cena' element={<Price />} />
            <Route path='/o-nama' element={<About />} />
            <Route path='/nasi-projekti' element={<Gallery />} />
            <Route path='/kontakt' element={<Contact />} />
            <Route path='/hvala-vam' element={<ThankYou />} />
            <Route path='/politika-privatnosti' element={<PrivacyPolicy />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
