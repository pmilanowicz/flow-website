import Head from 'next/head'
import Theme from '../../utils/theme';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Divider, Grid, Link, Typography } from '@mui/material';
import MainImage from '../../components/main-image';
import ImageSrc from '../../public/images/partnerzy.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import { cooperationEmailAddress } from '../../types';

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team - Współpraca</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <Navbar/>
        <MainImage imgSrc={ImageSrc}/>
        <Grid container padding={3}>
          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h3" color="primary">
              Twoja marka razem z ultimate
            </Typography>
            <Divider/>
          </Grid>

          <Grid item xs={12} padding={2}>
            <Typography variant="body1" color="primary">
              Wierzymy, że ultimate to niesamowity sport, który ma przed sobą świetlaną przyszłość w Polsce i na
              świecie. Z nami docierasz do ludzi w różnym wieku, działających w różnych
              branżach, wykraczając również poza granice kraju.<br/><br/>
              Dyscyplina dopiero raczkuje w temacie sponsoringu więc, jesteśmy głęboko przekonani, że wsparcie naszej
              drużyny spowoduje, że Twoja marka stanie się jedyną kojarzoną z tym sportem
              i zaangażuje całą społeczność ultimate na lata.<br/><br/>
              Zastanów się, co jest najlepsze dla Twojej firmy, a wspólnie stworzymy ofertę oraz wycenę
              satysfakcjonującą obie strony.
            </Typography>
          </Grid>

          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h4" color="primary">
              Wartości ultimate
            </Typography>
            <Divider/>
          </Grid>

          <Grid container padding={2}>
            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">
                Ultimate to jeden z niewielu sportów, w którym kobiety grają razem z mężczyznami na boisku (mixed)
              </Typography>
            </Grid>

            <Grid item xs={2} textAlign="center" justifyContent='center' marginTop="auto" marginBottom="auto">
              <ArrowForwardIcon color='primary' fontSize='large'/>
            </Grid>

            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">
                Twoja marka wspiera ideę sportu dla wszystkich, bez podziałów
              </Typography>
            </Grid>
          </Grid>

          <Grid container padding={2}>
            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">
                Ultimate to jedyny sport, w którym nie ma sędziów
              </Typography>
            </Grid>

            <Grid item xs={2} textAlign="center" justifyContent='center' marginTop="auto" marginBottom="auto">
              <ArrowForwardIcon color='primary' fontSize='large'/>
            </Grid>

            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">
                Twoja marka będzie kojarzona ze sportem, który jest najbardziej fairplay na świecie
              </Typography>
            </Grid>
          </Grid>

          <Grid container padding={2}>
            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">
                Ultimate jest bardzo popularne za oceanem i jesteśmy pewni, że ta moda z opóźnieniem rozwinie się w
                Polsce
              </Typography>
            </Grid>

            <Grid item xs={2} textAlign="center" justifyContent='center' marginTop="auto" marginBottom="auto">
              <ArrowForwardIcon color='primary' fontSize='large'/>
            </Grid>

            <Grid item xs={5} marginTop="auto" marginBottom="auto">
              <Typography variant="h6" color="primary">Twoja marka będzie postrzegana jako świeża i nowoczesna
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} padding={2} textAlign="left">
            <Typography variant="h4" color="primary">
              Sprawdź naszą ofertę!
            </Typography>
            <Divider/>
          </Grid>


          <Grid container padding={2}>
            <Typography variant="body1" color="primary">
              Powyższe wartości to wartości gwarantowane, które otrzymujesz niezależnie od rodzaju współpracy jaki
              podejmiemy.<br/>
              Po więcej szczegółów zapraszamy do zapoznania się z naszą <Link href="/docs/oferta-sponsorska.pdf" target="_blank">ofertę sponsorską.</Link>
            </Typography>
          </Grid>

          <Grid container padding={2}>
            <Grid item xs={12}>
              <Link href="/docs/oferta-sponsorska.pdf" target="_blank">
                <Button variant="contained" endIcon={<FileDownloadIcon/>}>
                  Pobierz ofertę
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} marginTop={2}>
              <Link href="/docs/reklama-na-strojach.pdf" target="_blank">
                <Button variant="contained" endIcon={<FileDownloadIcon/>}>
                  Reklama na strojach
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12} padding={2} textAlign="center">
            <Typography variant="h4" color="primary">Zapraszamy do kontaktu!</Typography>
            <Typography variant="h5" color="primary">
              <Link href={`mailto:${cooperationEmailAddress}`} noWrap>
                {cooperationEmailAddress}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Theme>
  )
}
