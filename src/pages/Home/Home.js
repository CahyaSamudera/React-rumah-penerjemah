import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Sidebar from '../../components/Sidebar/Sidebar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <About />
      <Features />
      <Banner />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Home;
