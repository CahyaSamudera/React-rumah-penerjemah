import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Span,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            Rumah
            <Span scrollNav={scrollNav}>Penerjemah</Span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='/'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Beranda
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/layanan'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Layanan
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='/contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Kontak
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
