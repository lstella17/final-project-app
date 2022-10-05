import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './BtnNav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            STELLA TRVL
            <i class='fab fa-typo3' />
          </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/weekends' className='nav-links' onClick={closeMobileMenu}>
                  Weekends
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/summer2022' className='nav-links' onClick={closeMobileMenu}>
                  Summer 2022
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                  Sign in
                </Link>
              </li>
              <li>
                <Link to='/sign-up'className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
