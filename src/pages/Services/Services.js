import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Car from '../../components/Car/Car';
import Footer from '../../components/Footer/Footer';
import Dokumen from '../../components/Dokumen/Dokumen';
import Legalisasi from '../../components/Legalisasi/Legalisasi';
import Lisan from '../../components/Lisan/Lisan';
import Sidebar from '../../components/Sidebar/Sidebar';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Car />
      <Dokumen />
      <Lisan />
      <Legalisasi />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Services;
