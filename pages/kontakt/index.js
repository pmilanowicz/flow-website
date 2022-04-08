import Head from 'next/head'
import Theme from '../../utils/theme';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Divider, Grid, Typography, Link, InputLabel, Input, FormHelperText, FormControl } from '@mui/material';
import MainImage from '../../components/main-image';
import ImageSrc from '../../public/images/kontakt.jpg';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../../components/contact-form';

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team - Kontakt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <MainImage imgSrc={ImageSrc} />
        <Grid container padding={3} alignItems="flex-start">
          <Grid item xs={6} padding={2}>
            <Typography variant="h3">Kontakt</Typography>
            <Divider />
          </Grid>

          <Grid item xs={6} padding={2}>
            <Typography variant="h3">Formularz kontaktowy</Typography>
            <Divider />
          </Grid>

          <Grid container xs={6} padding={2}>
            <Grid item xs>
              <EmailIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h5" color="primary">
                <Link href="mailto:flow.ultimate.wroclaw@gmail.com">
                  flow.ultimate.wroclaw@gmail.com
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} marginTop={3}>
              <Typography variant="h5" color="primary">
                Klub Sportowy Flow Wrocław
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                ul. Partyzantów 19/2
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                51-672 Wrocław
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} padding={2}>
            <ContactForm />
          </Grid>
        </Grid>
      </main>

      <footer>
        <Footer />
      </footer>
    </Theme>
  )
}
