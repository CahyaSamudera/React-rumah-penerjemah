import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='page-banner'>
      <h1 data-aos='fade-up'>Bersama Kami</h1>
      <h3 data-aos='fade-down'>Urusan Penerjemahan Menjadi Mudah</h3>
      <Link to='/layanan'>
        {' '}
        <button data-aos='fade-up'>Layanan</button>
      </Link>{' '}
    </div>
  );
};

export default Banner;
