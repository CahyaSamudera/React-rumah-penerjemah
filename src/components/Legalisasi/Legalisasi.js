import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Legalisasi.css';
import Legalisasi1 from '../../Images/legalisasi.svg';

const Legalisasi = () => {
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
                <img src={Legalisasi1} alt='legalisasi' data-aos='fade-up' />
              </div>
            </div>
            <div className='col-lg-6 col-lg-offset-1'>
              <div className='about-text'>
                <h2 data-aos='fade-up'>Legalisasi Dokumen</h2>
                <p data-aos='fade-up'>
                  Kami menyediakan jasa legalisasi dokumen yang akan membantu
                  anda mendapatkan legalisir dokumen dari Departemen Hukum dan
                  HAM dan Departemen Luar Negeri dengan mudah. Anda tinggal
                  menghubungi kami dan kami akan mengurus segala prosesnya untuk
                  anda.
                </p>
                <p data-aos='fade-up'>
                  Adapun jenis dokumen yang dilegalisir antara lain: Ijazah,
                  transkrip nilai, akta pendirian, surat perjanjian, akta nikah,
                  akta cerai dll.
                </p>
                <p data-aos='fade-up'>
                  Sebagai tambahan Informasi, persyaratan yang dibutuhkan untuk
                  proses legalisasi di Departemen Hukum dan HAM dan Departemen
                  Luar Negeri antara lain:
                </p>
                <p data-aos='fade-up'>1. Surat Permohonan</p>
                <p data-aos='fade-up'>2. Surat Kuasa</p>
                <p data-aos='fade-up'>3. Poto Kopi KTP</p>
                <p data-aos='fade-up'>4. Poto Kopi Dokumen</p>
                <p data-aos='fade-up'>5. Materai 6000 per lembar</p>
                <p data-aos='fade-up'>
                  Adapun Standar Biaya Jasa Legalisasi / Legalisir:
                </p>
                <table data-aos='fade-up'>
                  <tr>
                    <th>Paket Express</th>
                    <th>Lama Proses</th>
                  </tr>
                  <tr>
                    <td>Rp 500.000,-</td>
                    <td>3 hari kerja</td>
                  </tr>
                </table>
                <p style={{ paddingTop: '20px' }} data-aos='fade-up'>
                  Adapun Standar Biaya Jasa Legalisasi / Notaris:
                </p>
                <table data-aos='fade-up'>
                  <tr>
                    <th>Paket Harga </th>
                    <th>Lama Proses</th>
                  </tr>
                  <tr>
                    <td>Rp 250.000,-</td>
                    <td>2 hari kerja</td>
                  </tr>
                </table>
                <p className='mt-4' data-aos='fade-up'>
                  Untuk informasi lebih lanjut, silahkan menghubungi kami lewat
                  no telepon / WA dan alamat email yang tersedia. Kami akan
                  berusaha membalas pesan anda secepat mungkin.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legalisasi;
