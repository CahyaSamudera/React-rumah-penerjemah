import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Lisan.css';
import Lisan1 from '../../Images/lisan.svg';

const Lisan = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='about-area' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-lg-offset-1'>
              <div className='about-text'>
                <h2 data-aos='fade-up'>Penerjemahan Lisan</h2>
                <p data-aos='fade-up'>
                  Jasa Penerjemahan Lisan atau Interpreter adalah sebuah jasa
                  alih bahasa secara verbal atau lisan, dimana penerjemah akan
                  menerjemahkan percakapan secara langsung. Kami menyediakan
                  layanan penerjemahan lisan dalam bahasa Inggris, bahasa Arab,
                  bahasa Korea, bahasa Jerman, dll.
                </p>
                <p data-aos='fade-up'>
                  Dalam prakteknya di lapangan, secara umum ada 2 jenis jasa
                  interpreting, yaitu:
                </p>
                <p data-aos='fade-up'>1. Simultan</p>
                <p data-aos='fade-up'>
                  Dalam kategori ini, Interpreter menerjemahkan ke dalam bahasa
                  target secepat mungkin, sementara pembicara bahasa sumber
                  terus berbicara.
                </p>
                <p data-aos='fade-up'>
                  Adapun standar harga dari layanan ini untuk 8 jam kerja adalah
                  Rp. 5,000.000,-
                </p>
                <p data-aos='fade-up'>2. Konsekutif</p>
                <p data-aos='fade-up'>
                  Dalam kategori ini, interpreter berbicara setelah pembicara
                  bahasa sumber selesai berbicara.
                </p>
                <p data-aos='fade-up'>
                  {' '}
                  Adapun standar harga dari layanan ini untuk 8 jam kerja adalah
                  Rp. 3,000.000,-
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-img'>
                <img src={Lisan1} alt='interpreter' data-aos='fade-up' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lisan;
