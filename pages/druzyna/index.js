import Head from 'next/head'
import Theme from '../../utils/theme';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Divider, Grid, Typography } from '@mui/material';
import MainImage from '../../components/main-image';
import ImageSrc from '../../public/images/druzyna.png';
import { PlayerMediaCard } from '../../components/player-media-card';
import roster from '../../types/roster.json';

const sortedRoster = roster.players.sort((a, b) => a.number - b.number);

export default function Home() {
  

  return (
    <Theme>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team - Drużyna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <MainImage imgSrc={ImageSrc} />
        <Grid container padding={3}>
          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h3" color="primary">
              Poznaj naszych zawodników
            </Typography>
            <Divider />
          </Grid>

          {sortedRoster.map((player, index) =>
            <Grid key={index} item xs={12} sm={6} md={3} padding={2}>
              <PlayerMediaCard {...player} />
            </Grid>
          )}
        </Grid>
      </main>

      <footer>
        <Footer />
      </footer>
    </Theme>
  )
}
