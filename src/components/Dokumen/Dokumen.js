import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Dokumen.css';
import Dokumen1 from '../../Images/document.svg';

const Dokumen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='about-area-1' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-img'>
                <img src={Dokumen1} alt='' data-aos='fade-up' />
              </div>
            </div>
            <div className='col-lg-6 col-lg-offset-1'>
              <div className='about-text'>
                <h2 data-aos='fade-up'>Penerjemahan Dokumen</h2>
                <p data-aos='fade-up'>
                  Kami menyediakan layanan penerjemahan yang meliputi jasa
                  penerjemahan dari penerjemah reguler / tidak tersumpah
                  (non-sworn translator) dan jasa penerjemahan dari penerjemah
                  tersumpah resmi dan bersertifikat. Kami menjamin hasil
                  penerjemahan yang kami kerjakan dapat diterima dan dilegalisir
                  di Kementerian Luar Negeri, Kementerian Hukum dan HAM, dan
                  semua kantor kedutaan besar negara sahabat di Indonesia.
                </p>
                <p data-aos='fade-up'>
                  Kami menyediakan jasa penerjemahan untuk berbagai macam
                  dokumen dalam berbagai bidang, yang meliputi:
                </p>
                <p data-aos='fade-up'>
                  1. Dokumen Perbankan seperti MoU, Minuta, Agreement, Annual
                  Report, Financial Report, Ledger, Journal, dan lain-lain.
                </p>
                <p data-aos='fade-up'>
                  2. Dokumen Hukum seperti Putusan Pengadilan, Peraturan
                  Perundang Undangan, Alat Bukti, Berkas-berkas Penyidikan dan
                  Penyelidikan, Berita Acara Persidangan, dan lain-lain.
                </p>
                <p data-aos='fade-up'>
                  3. Dokumen Korporasi atau Perusahaan seperti Akta Notaris
                  (Akta Pendirian Perusahaan), Agreement, AMDAL/ANDAL, Receipt,
                  Invoice, Quote, Annual Report, Merk Dagang, TDP, SIUP, ISO,
                  Manual Book, Advertising, TOS, dan lain-lain.
                </p>
                <p data-aos='fade-up'>
                  4. Dokumen Bidang Teknik seperti Index, Manual User, Journal,
                  Hasil Lab, Software, Website, Program OS dan lain-lain.
                </p>
                <p data-aos='fade-up'>
                  Berikut adalah daftar harga dari layanan penerjemahan dokumen
                  yang kami tawarkan:{' '}
                </p>
                <table data-aos='fade-up'>
                  <tr>
                    <th>No</th>
                    <th>Bahasa</th>
                    <th>Tersumpah</th>
                    <th>Non-Tersumpah</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Arab</td>
                    <td>200.000/hlm</td>
                    <td>150.000/hlm</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Belanda</td>
                    <td>500.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Inggris</td>
                    <td>75.000/hlm</td>
                    <td>50.000/hlm</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jepang</td>
                    <td>400.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Jerman</td>
                    <td>350.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Korea</td>
                    <td> /hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Mandarin (China)</td>
                    <td> 400.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Mandarin (Taiwan)</td>
                    <td> 400.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Perancis</td>
                    <td> 300.000/hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Portugis</td>
                    <td> /hlm</td>
                    <td>500.000/hlm</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Rusia</td>
                    <td> /hlm</td>
                    <td>500.000/hlm</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Spanyol</td>
                    <td> 400.000/hlm</td>
                    <td>500.000/hlm</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Thailand</td>
                    <td> /hlm</td>
                    <td>250.000/hlm</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Vietnam</td>
                    <td> /hlm</td>
                    <td>275.000/hlm</td>
                  </tr>
                </table>

                <p style={{ paddingTop: '20px' }} data-aos='fade-up'>
                  Ketentuan format cetak terjemahan Dokumen sesuai standarisasi
                  penerjemahan adalah sebagai berikut:{' '}
                </p>
                <table className='second-table' data-aos='fade-up'>
                  <tr>
                    <td>Paper</td>
                    <td>A4</td>
                  </tr>
                  <tr>
                    <td>Font</td>
                    <td>Courier New</td>
                  </tr>
                  <tr>
                    <td>Font Size</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Spasi</td>
                    <td>2 (Double) </td>
                  </tr>
                  <tr>
                    <td>Margin</td>
                    <td>1-1, 1-1</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokumen;
