import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

const CONSENT_KEY = 'hidropool_cookie_consent';
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 13 months in milliseconds

interface ConsentData {
  accepted: boolean;
  timestamp: number;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        // No consent found, show banner
        setShowBanner(true);
      } else {
        // Check if consent is still valid (not expired)
        const consentData: ConsentData = JSON.parse(consent);
        if (Date.now() - consentData.timestamp > CONSENT_DURATION) {
          // Consent expired, remove it and show banner again
          localStorage.removeItem(CONSENT_KEY);
          setShowBanner(true);
        }
      }
    } catch (error) {
      console.error('Error reading consent data:', error);
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    const consentData: ConsentData = {
      accepted,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));

      // Update Google Consent Mode
      if (window.updateConsent) {
        window.updateConsent(accepted);
      }

      setShowBanner(false);
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      <Paper
        elevation={8}
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          p: { xs: 3, sm: 4 },
          borderRadius: 0,
          bgcolor: 'background.paper',
          borderTop: '4px solid',
          borderColor: 'primary.main',
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              flex: 1,
            }}
          >
            <CookieIcon
              sx={{
                fontSize: 40,
                color: 'primary.main',
                display: { xs: 'none', sm: 'block' },
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                }}
              >
                Poštujemo vašu privatnost
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Mi i naši partneri koristimo kolačiće (cookies) i slične
                tehnologije kako bismo poboljšali vaše iskustvo, analizirali
                saobraćaj i prikazivali relevantne oglase (marketing).
                Detaljnije informacije možete pronaći u našoj{' '}
                <Typography
                  component={Link}
                  to='/politika-privatnosti'
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'underline',
                    fontWeight: 600,
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                >
                  politici privatnosti
                </Typography>
                .
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', md: 'auto' },
              minWidth: { md: '280px' },
            }}
          >
            <Button
              variant='outlined'
              onClick={() => handleConsent(false)}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1.25,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Odbij sve
            </Button>
            <Button
              variant='contained'
              onClick={() => handleConsent(true)}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1.25,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                },
              }}
            >
              Prihvati sve
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

// Add TypeScript declarations for window functions
declare global {
  interface Window {
    updateConsent?: (accepted: boolean) => void;
  }
}

export default CookieConsent;
