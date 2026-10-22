import { Audience } from './components/Audience';
import { Capabilities } from './components/Capabilities';
import { Dollar } from './components/Dollar';
import { Downloads } from './components/Downloads';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Limits } from './components/Limits';
import { MobileCta } from './components/MobileCta';
import { Nav } from './components/Nav';
import { OfferStrip } from './components/OfferStrip';
import { Problem } from './components/Problem';
import { Promise } from './components/Promise';
import { Question } from './components/Question';
import { Steps } from './components/Steps';
import { Trust } from './components/Trust';

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Nav />
      <OfferStrip />
      <main id="contenido">
        <Hero />
        <Problem />
        <Promise />
        <Dollar />
        <Question />
        <Audience />
        <Limits />
        <Faq />
        <Gallery />
        <Capabilities />
        <Steps />
        <Trust />
        <Downloads />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
