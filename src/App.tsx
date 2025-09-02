import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Songs from './pages/Songs';
import Photos from './pages/Photos';
import Socials from './pages/SocialMedia';
import Contact from './pages/Contact';
import Player from './pages/Player';
import OrderCD from './pages/OrderCD';


// import ProtectRoute from './components/ProtectRoute';


import Landing from './pages/Landing';



function App() {

  return (
    <>

      <Header />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/ordercd" element={<OrderCD />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App