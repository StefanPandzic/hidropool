import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ bgcolor: 'background.default', py: { xs: 4, md: 6 } }}>
        <Container maxWidth='lg'>
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant='h3'
              component='h1'
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Politika privatnosti
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Introduction */}
            <Box sx={{ mb: 4 }}>
              <Typography variant='body1' paragraph>
                Ova Politika privatnosti objašnjava kako Hidro Pool prikuplja,
                koristi i štiti vaše podatke kada koristite naš sajt.
              </Typography>
            </Box>

            {/* Section 1 */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                1. Koje podatke prikupljamo?
              </Typography>
              <Typography variant='body1' paragraph>
                Prikupljamo podatke koje nam direktno date prilikom kupovine ili
                slanja upita:
              </Typography>
              <Box component='ul' sx={{ pl: 3, mb: 2 }}>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Ime i prezime
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Adresa e-pošte (e-mail)
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Adresa za dostavu i broj telefona
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Podaci o transakciji
                </Typography>
              </Box>
              <Typography variant='body1' paragraph>
                Takođe, automatski prikupljamo određene podatke putem kolačića
                (cookies), kao što su vaša IP adresa i način na koji koristite
                sajt.
              </Typography>
            </Box>

            {/* Section 2 */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                2. Kako koristimo vaše podatke?
              </Typography>
              <Typography variant='body1' paragraph>
                Vaše podatke koristimo da bismo:
              </Typography>
              <Box component='ul' sx={{ pl: 3, mb: 2 }}>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Obradili i isporučili vašu porudžbinu.
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Pružili korisničku podršku.
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  <strong>Marketing:</strong> Koristimo podatke za prikazivanje
                  relevantnih oglasa putem platforme Google Ads. Ovo uključuje
                  korišćenje funkcije Customer Match, gde se vaša e-mail adresa
                  u šifrovanom obliku može koristiti za prepoznavanje sličnih
                  korisnika koji bi bili zainteresovani za naše proizvode.
                </Typography>
              </Box>
            </Box>

            {/* Section 3 */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                3. Deljenje podataka sa trećim stranama
              </Typography>
              <Typography variant='body1' paragraph>
                Vaše podatke ne prodajemo trećim licima. Podatke delimo
                isključivo sa pouzdanim partnerima koji nam omogućavaju rad:
              </Typography>
              <Box component='ul' sx={{ pl: 3, mb: 2 }}>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Kurirskim službama (radi dostave).
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Platformama za oglašavanje kao što je Google LLC, u skladu sa
                  njihovim pravilima o privatnosti.
                </Typography>
              </Box>
            </Box>

            {/* Section 4 */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                4. Vaša prava
              </Typography>
              <Typography variant='body1' paragraph>
                U svakom trenutku imate pravo da:
              </Typography>
              <Box component='ul' sx={{ pl: 3, mb: 2 }}>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Zatražite uvid u podatke koje imamo o vama.
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Zatražite ispravku ili brisanje vaših podataka.
                </Typography>
                <Typography component='li' variant='body1' sx={{ mb: 1 }}>
                  Povučete pristanak za korišćenje podataka u marketinške svrhe.
                </Typography>
              </Box>
            </Box>

            {/* Section 5 - Contact */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                5. Kontakt
              </Typography>
              <Typography variant='body1' paragraph>
                Za sva pitanja u vezi sa privatnošću, možete nas kontaktirati na{' '}
                <Typography
                  component='a'
                  href='mailto:hidropoolns@gmail.com'
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'underline',
                    fontWeight: 600,
                  }}
                >
                  hidropoolns@gmail.com
                </Typography>
                .
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
