import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Features.css';

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='features' id='features'>
        <div className='features-container'>
          <div className='box' data-aos='fade-up'>
            <h2>01</h2>
            <h3>Pengerjaan Cepat</h3>
            <p>
              Kami menjamin bahwa semua layanan kami baik berupa penerjemahan
              dokumen, legalisasi, dan juga layanan yang lain dikerjakan secara
              cepat dan profesional.
            </p>
          </div>
          <div className='box' data-aos='fade-down'>
            <h2>02</h2>
            <h3>Layanan Penuh</h3>
            <p>
              Kami memberikan layanan penuh dari awal projek penerjemahan sampai
              selesai. Anda juga tidak perlu berkunjung ke kantor kami karena
              kami akan mengirimkan hasil projek penerjemahan ke alamat anda.
            </p>
          </div>
          <div className='box' data-aos='fade-up'>
            <h2>03</h2>
            <h3>Harga Bersahabat</h3>
            <p>
              Harga yang kami tawarkan di Rumah Penerjemah adalah harga yang
              bersahabat. Kami pastikan bahwa layanan premium kami dapat
              didapatkan dengan harga yang terjangkau.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
