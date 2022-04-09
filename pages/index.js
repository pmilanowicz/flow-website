import Head from 'next/head'
import Theme from '../utils/theme';
import Navbar from '../components/navbar';
import MainImage from '../components/main-image';
import News from '../components/news';
import PartnersBar from '../components/partners-bar';
import Footer from '../components/footer';
import FlowBanner from '../public/images/homepage.png';
import MainBar from '../components/main-bar';
// import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Theme>
        {/*<div id="fb-root"></div>*/}
        {/*<Script defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></Script>*/}
        <main>
          <Navbar />
          <MainImage imgSrc={FlowBanner} />
          <MainBar />
          <News />
          <PartnersBar />
        </main>

        <footer>
          <Footer />
        </footer>
      </Theme>
    </>
  )
}
