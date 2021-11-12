
import Head from 'next/head'
import { ThemeProvider } from '@mui/system';
import theme from '../components/theme-provider';
import Navbar from '../components/navbar';
import MainImage from '../components/main-image';
import News from '../components/news';
import PartnersBar from '../components/partners-bar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <MainImage />
        <News />
        <PartnersBar />
      </main>

      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  )
}
