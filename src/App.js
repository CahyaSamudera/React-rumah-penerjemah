import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <SimpleReactLightbox>
          <Route path='/' component={Home} exact />
          <Route path='/layanan' component={Services} exact />
          <Route path='/contact' component={Contact} exact />
        </SimpleReactLightbox>
      </Router>
    </>
  );
}

export default App;
