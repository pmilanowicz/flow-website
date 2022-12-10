import Head from 'next/head'
import Theme from '../utils/theme';
import Navbar from '../components/navbar';
import MainImage from '../components/main-image';
import News from '../components/news';
import PartnersBar from '../components/partners-bar';
import Footer from '../components/footer';
import FlowBanner from '../public/images/homepage.png';
import MainBar from '../components/main-bar';
import Script from 'next/script'
import { getNewsIds } from '../utils/news-client';
import { Fragment } from 'react';

function Home({ newsIds }) {
  return (
    <Fragment>
      <div id="fb-root"></div>
      <Script defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v13.0&appId=506909657758977&autoLogAppEvents=1" nonce="v8ct5Rpw"></Script>

      <Head>
        <title>Flow Wrocław - Ultimate Frisbee Team</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flow Wrocław to wielokrotni Mistrzowie Polski w ultimate frisbee w kategorii Mixed. Zapoznaj się z historią klubu, prezentacją graczy oraz możliwościami dołączenia do zespołu." />
        <meta name="keywords" content="flow wrocław,flow,ultimate frisbee,frisbee,wrocław,dysk,kategoria mixed,sport,koedukacja" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Theme>

        <main>
          <Navbar />
          <MainImage imgSrc={FlowBanner} />
          <MainBar />
          <News newsIds={newsIds} />
          <PartnersBar />
        </main>

        <footer>
          <Footer />
        </footer>
      </Theme>
    </Fragment>
  )
}

export async function getServerSideProps() {
  return { props: { newsIds: await getNewsIds() } }
}

export default Home;
