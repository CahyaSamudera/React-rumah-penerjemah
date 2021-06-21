import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Car from '../../components/Car/Car';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Car />
      <div className='contact' id='contact'>
        <div className='container-2'>
          <div className='contactInfo'>
            <div className='box' data-aos='fade-up'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='text'>
                <h3>Alamat: </h3>
                <p>
                  Jl Cirendeu Indah II No. 49, Cirendeu. <br />
                  Tangerang Selatan, 15419
                </p>
              </div>
            </div>
            <div className='box' data-aos='fade-down'>
              <div className='icon'>
                {' '}
                <FaPhone />{' '}
              </div>
              <div className='text'>
                <h3>Telepon / WA: </h3>
                <p>+62 878 2968 6178</p>
              </div>
            </div>
            <div className='box' data-aos='fade-up'>
              <div className='icon'>
                {' '}
                <FaEnvelope />{' '}
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>rumahpenterjemah@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm' data-aos='fade-up'>
            <form action='/contact' name='contact' method='post'>
              <input type='hidden' name='form-name' value='contact' />
              <h2>Kirim Pesan</h2>
              <div className='inputBox'>
                <input type='text' name='name' id='name' required />
                <span>Nama Lengkap</span>
              </div>
              <div className='inputBox'>
                <input type='email' name='email' id='email' required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea type='text' name='message' id='message' required />
                <span>Tulis Pesan Anda ...</span>
              </div>
              <div className='inputBox'>
                <input type='submit' value='Kirim' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Contact;
