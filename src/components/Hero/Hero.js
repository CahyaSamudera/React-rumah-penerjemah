import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import Shape1 from '../../Images/shape1.svg';
import Shape2 from '../../Images/shape2.svg';
import Shape3 from '../../Images/shape3.svg';
import Shape4 from '../../Images/shape4.svg';
import Shape5 from '../../Images/shape5.svg';
import Health from '../../Images/health.svg';
import Car from '../../Images/car.svg';
import Home1 from '../../Images/home.svg';
import Business from '../../Images/business.svg';
import Curve from '../../Images/curve.svg';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='hero' id='hero'>
      <div className='container-hero'>
        <img src={Shape1} alt='shape' className='shape shape1' />
        <img src={Shape2} alt='shape' className='shape shape2' />
        <img src={Shape3} alt='shape' className='shape shape3' />
        <img src={Shape4} alt='shape' className='shape shape4' />
        <img src={Shape5} alt='shape' className='shape shape5' />
        <div className='hero-wrapper d-flex-1'>
          <div className='col-left'>
            <h1 data-aos='fade-down'>
              <Typewriter
                options={{
                  strings: ['Kami Hadir Untuk Anda'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-up'>
              Percayakan Urusan Penerjemah Anda Kepada Kami
            </p>
            <ul data-aos='fade-up'>
              <li>
                <img src={Health} alt='health' />
                Dokumen
              </li>
              <li>
                <img src={Car} alt='car' />
                Lisan
              </li>
              <li>
                <img src={Home1} alt='Home' />
                Legalisasi
              </li>
            </ul>
          </div>
          <div className='hero-image'>
            <img src={Business} alt='hero image' />
          </div>
        </div>
      </div>
      <img src={Curve} alt='Curve image' className='curve-image' />
    </div>
  );
};

export default Hero;
