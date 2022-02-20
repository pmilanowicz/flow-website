import { Divider, Grid, List, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/footer';
import MainImage from '../../components/main-image';
import Navbar from '../../components/navbar';
import ImageSrc from '../../public/images/o-nas.jpg';
import FirstParagraph from '../../public/images/o-nas/first-paragraph.png';
import Theme from '../../utils/theme';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';

export default function Home() {
  const europeanFinals = [
    { year: 2014, city: 'Frankfurt', position: 4 },
    { year: 2016, city: 'Frankfurt am Main', position: 9 },
    { year: 2018, city: 'Wrocław', position: 5 },
    { year: 2019, city: 'Wenecja', position: 5 },
    { year: 2021, city: 'Bruggia', position: 4 },
  ];

  return (
    <Theme>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team - O nas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <MainImage imgSrc={ImageSrc} />
        <Grid container padding={3}>
          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h3" color="primary">
              O nas
            </Typography>
            <Divider />
          </Grid>

          <Grid container padding={3} columnSpacing={12}>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4">
                Jesteśmy wrocławską drużyną Ultimate.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Pod nazwą Flow występujemy w rozgrywkach Mistrzostw Polski od 2011 roku. Od tego czasu barwy Flow reprezentowało już ponad 100 zawodników. <br /><br />
                Aby walczyć o najwyższe cele, dwa razy w tygodniu spotykamy się na treningach drużynowych, a w pozostałe dni nasi zawodnicy trenują indywidualnie: siłowo, biegowo oraz rzutowo.<br /><br />
                Od kilku sezonów jesteśmy postrzegani jako drużyna dominująca polską scenę Ultimate oraz jako faworyci do kolejnych tytułów mistrzowskich. Aktualnie staramy się mierzyć wyżej i nie zaprzestając walki o krajowe tytuły, przygotowujemy się do walki o tytuł Mistrza Europy.
              </Typography>
            </Grid>

            <Grid item xs={0} lg={5}>
              <Image src={FirstParagraph} layout="responsive" objectFit="contain" alt="Layout zawodnika Flow" />
            </Grid>
          </Grid>

          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h3" color="primary">
              Nasze najważniejsze sukcesy
            </Typography>
            <Divider />
          </Grid>

          <Grid container padding={3} justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4} sm={5} textAlign="right">
              <Typography variant="h5">
                Mistrz Polski <Typography variant="body2">(2018, 2019, 2021)</Typography>
              </Typography>
            </Grid>

            <Grid item xs={4} sm={2} textAlign="center">
              <EmojiEventsOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>

            <Grid item xs={4} sm={5} textAlign="left">
              <Typography variant="h5">
                Plażowy Mistrz Polski <Typography variant="body2">(2015, 2021)</Typography>
              </Typography>
            </Grid>
          </Grid>

          <Grid container padding={3} spacing={3} justifyContent="space-evenly" alignItems="center">
            <Grid item xs="12" sm={2} textAlign="center">
              <MilitaryTechOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>

            <Grid item xs={12} sm={8} textAlign="center" >
              <Typography variant="h5">
                Srebrny medal Mistrzostw Polski <Typography variant="caption">(2015)</Typography>
              </Typography>
              <Divider />
              <Typography variant="h5">
                Srebrny medal Halowych Mistrzostw Polski <Typography variant="caption">(2017, 2018, 2020)</Typography>
              </Typography>
            </Grid>

            <Grid item xs="12" sm={2} textAlign="center">
              <MilitaryTechOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>
          </Grid>


          <Grid container padding={3} spacing={3} justifyContent="space-evenly" alignItems="center">
            <Grid item xs="12" sm={2} textAlign="center">
              <SportsScoreOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>
            <Grid item xs={12} padding={2} textAlign="center">
              <Typography variant="h5" color="primary">
                Finały Klubowych Mistrzostw Europy
                <List>
                  {europeanFinals.map(final => (
                    <ListItemText>{final.year}, {final.city}: <b>{final.position} miejsce</b></ListItemText>
                  ))}
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </main>

      <footer>
        <Footer />
      </footer>
    </Theme>
  )
}
