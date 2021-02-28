import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import About1 from '../../Images/work-team.svg';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='about-area' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-img'>
                <img src={About1} alt='' data-aos='fade-up' />
              </div>
            </div>
            <div className='col-lg-6 col-lg-offset-1'>
              <div className='about-text'>
                {/* <h2>Rumah Penerjemah</h2> */}
                <p data-aos='fade-up'>
                  Kami adalah biro resmi penyedia layanan jasa penerjemahan
                  tersumpah dan jasa legalisasi dokumen. Layanan kami meliputi
                  penerjemahan bahasa Inggris, Arab, Jerman, Belanda, Mandarin,
                  Perancis, Korea, Thailand, Portugis, Spanyol, Rusia, Vietnam,
                  dan Italia.
                </p>
                <p data-aos='fade-up'>
                  Kami menjamin bahwa hasil terjemahan kami dapat dilegalisasi
                  di Departemen Hukum dan HAM, Departemen Luar Negeri,
                  Kantor-kantor Kedutaan Besar negara asing di Indonesia. Kami
                  juga menjamin bahwa dokumen yang kami terjemahkan dapat diakui
                  oleh negara-negara pemilik bahasa terkait.
                </p>
                <p data-aos='fade-up'>
                  Kami menerjemahkan berbagai jenis dokumen yang bersifat legal,
                  medical, technical, maupun financial. Kami juga menerjemahkan
                  dokumen-dokumen lainnya seperti Ijazah, Raport, Transkrip
                  Nilai, Akta Kelahiran, Kartu Keluarga, Kartu Tanda Penduduk,
                  Passport, SKCK, Surat Keterangan dll.
                </p>
                <p data-aos='fade-up'>
                  Para penerjemah kami adalah para penerjemah yang telah
                  memperoleh predikat sebagai penerjemah tersumpah yang telah
                  mendapatkan sertifikasi atau SK dari Gubernur setempat. Adapun
                  dokumen yang memerlukan penerjemahan tersumpah biasanya adalah
                  dokumen-dokumen yang digunakan untuk keperluan legal seperti
                  untuk melanjutkan sekolah keluar negeri seperti ijazah dan
                  transkrip nilai, dan untuk izin tinggal maupun bekerja di luar
                  negeri seperti akta kelahiran, surat nikah, KTP, KK dll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
