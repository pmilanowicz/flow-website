import { Divider, Grid, List, Link, ListItemText, Typography } from '@mui/material';
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

          <Grid container padding={2} columnSpacing={12}>
            <Grid item xs={12} lg={7}>
              <Typography variant="body1" sx={{ lineHeight: 2 }} color="primary">
                <strong>Flow Wrocław</strong> to drużyna reprezentująca Wrocław w ultimate frisbee w dywizji Mixed, która charakteryzuje się grą mężczyzn i kobiet jednocześnie. W ostatnim czasie klub przygotowuje się także do startu w drugich rozgrywkach w dywizji Open, która pomimo nazwy reprezentowana jest w większości przez mężczyzn.<br /><br />

                Drużyna została założona w roku 2011 i od tej pory zdobyła liczna trofea na polskich i europejskich zawodach, będąc wielokrotnym medalistą i trzykrotnym Mistrzem Polski.<br /><br />

                Od początku istnienia klubu w drużynie wystąpiło ponad 100 zawodników z polskiej sceny ultimate frisbee. Aktualnie członkami klubu są w większości młode i aktywne osoby (19-27 lat), które prowadzone są przez weteranów i byłych zawodników kadry Polski.<br /><br />
                Oficjalne treningi odbywają się stale przez cały rok dwa razy w tygodniu, przy czym zawodnicy mają także ustalone i rozpisane indywidualne treningi w trakcie i po sezonie. Każdy trening skupia się nie tylko na treningach rzutowych i strategiach rozgrywki, ale są to także typowe treningi biegowe i siłowe. <br /><br />
                Głównymi trenerami klubu są Maciej Pająk, Zuzanna Brzezińska i Paweł Milanowicz  – byli lub obecni reprezentanci kraju i jedni z najlepszych graczy ultimate w Polsce.<br /><br />
                {/*Klub prowadzi także otwarte treningi klubu, które dostępne są dla wszystkich chętnych nauki gry w Ultimate Frisbee. Treningi odbywają się również dwa razy w tygodniu, a wszystkie informacje o otwartych treningach dostępne są TUTAJ.*/}
                Przeczytaj o nas więcej na <strong><Link target="_blank" href="https://pl.wikipedia.org/wiki/Flow_Wroc%C5%82aw" color="primary">https://pl.wikipedia.org/wiki/Flow_Wrocław</Link></strong>
              </Typography>
            </Grid>

            <Grid item xs={0} lg={5}>
              <Image src={FirstParagraph} layout="responsive" objectFit="contain" alt="Layout zawodnika Flow" />
            </Grid>
          </Grid>

          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h3" color="primary">
              Nasze sukcesy
            </Typography>
            <Divider />
          </Grid>

          <Grid container padding={3} justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item sx={{ display: { xs: 'block', sm: 'none' } }} xs={12} textAlign="center">
              <EmojiEventsOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>

            <Grid item xs={12} sm={5} textAlign="center">
              <Typography variant="h5" color="primary">
                Mistrz Polski
                <Divider />
                <Typography variant="body2" color="primary">(2018, 2019, 2021)</Typography>
              </Typography>
            </Grid>

            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={2} textAlign="center">
              <EmojiEventsOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>

            <Grid item xs={12} sm={5} textAlign="center">
              <Typography variant="h5" color="primary">
                Plażowy Mistrz Polski
                <Divider />
                <Typography variant="body2" color="primary">(2015, 2021)</Typography>
              </Typography>
            </Grid>
          </Grid>

          <Grid container padding={3} spacing={3} justifyContent="space-evenly" alignItems="center">
            <Grid item xs="12" sm={2} textAlign="center">
              <MilitaryTechOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>

            <Grid item xs={12} sm={8} textAlign="center">
              <Typography variant="h5" color="primary" marginBottom={1}>
                II m-ce na Mistrzostwach Polski <Typography variant="body2" color="primary">(2015)</Typography>
              </Typography>
              <Divider />
              <Typography variant="h5" color="primary" marginBottom={1}>
                III m-ce na Mistrzostwach Polski <Typography variant="body2" color="primary">(2022)</Typography>
              </Typography>
              <Divider />
              <Typography variant="h5" color="primary" marginBottom={1}>
                II m-ce na Halowych MP <Typography variant="body2" color="primary">(2018, 2019)</Typography>
              </Typography>
              <Divider />
              <Typography variant="h5" color="primary" marginBottom={1}>
                III m-ce na Halowych MP <Typography variant="body2" color="primary">(2020, 2022)</Typography>
              </Typography>
            </Grid>

            <Grid item xs="12" sm={2} sx={{ display: { xs: 'none', sm: 'block' } }} textAlign="center">
              <MilitaryTechOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            </Grid>
          </Grid>

          <Grid container padding={3} spacing={3} justifyContent="space-evenly" alignItems="center">
            <Grid item xs={12} padding={2} textAlign="center">
              <Typography variant="h5" color="primary">
                Finały Klubowych Mistrzostw Europy
                <Divider />
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
