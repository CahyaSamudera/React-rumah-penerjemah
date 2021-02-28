import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-content'>
          <h3>Rumah Penerjemah</h3>
          <p>
            Jasa Layanan Penerjemah Dokumen Resmi dan Tersumpah Berkualitas
            Terbaik dengan Harga Terjangkau
          </p>
          {/* <ul className='socials'>
            <li>
              <a href='#hero'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-pinterest'></i>
              </a>
            </li>
          </ul> */}
        </div>
        <div className='footer-bottom'>
          <p>
            copyright &copy;2021 | Powered by{' '}
            <a href='https://prasta.id/' target='_blank'>
              Prasta
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
