import Head from 'next/head'
import Theme from '../../utils/theme';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Divider, Grid, Link, Typography } from '@mui/material';
import MainImage from '../../components/main-image';
import ImageSrc from '../../public/images/kontakt.jpg';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../../components/contact-form';
import { emailAddress } from "../../types";

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team - Kontakt</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <Navbar/>
        <MainImage imgSrc={ImageSrc}/>
        <Grid container padding={3} alignItems="flex-start">
          <Grid item xs={12} padding={2}>
            <Typography variant="h3">Kontakt</Typography>
            <Divider/>
          </Grid>

          <Grid item sm={12} md={6}>
            <Grid container padding={2} alignItems={"flex-start"}>
              <Grid item marginRight={1}>
                <EmailIcon fontSize="large" color="primary"/>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="primary">
                  <Link href={`mailto:${emailAddress}`}>
                    {emailAddress}
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
          </Grid>

          <Grid item sm={12} md={6} padding={2}>
            <ContactForm/>
          </Grid>
        </Grid>
      </main>

      <footer>
        <Footer/>
      </footer>
    </Theme>
  )
}
