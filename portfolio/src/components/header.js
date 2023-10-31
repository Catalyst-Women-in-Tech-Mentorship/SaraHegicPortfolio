import {useState} from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Face3Icon from '@mui/icons-material/Face3';
import MenuIcon from '@mui/icons-material/Menu';
import "../App.css";

const Header = ({page}) => {

  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <div className='nav'>
      <div className="navbar">
        <div className="navbar-left">
          <a href = "/" >
          <Face3Icon />
          </a>
          
        </div>
        <div className="navbar-right ">
          <a className={(page === "home") ? "active" : ""} href="/">Home</a>
          <a className={(page === "about") ? "active" : ""} href="/about">About Me</a>
          <a className={(page === "projects") ? "active" : ""} href="/projects">Projects</a>
        </div>
        <div className="menu-icon">
          <MenuIcon onClick = {toggleNavLinks}></MenuIcon>
        </div>

        <div className="nav-links">
          <a href="/" className="social-icon">
          <FacebookIcon/>
          </a>
          <a href="/" className="social-icon">
            <InstagramIcon></InstagramIcon>
          </a>
          <a href="/" className="social-icon">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
      </div>
      <div className={`navbar-right-dropdown ${showNavLinks ? 'visible' : ''}`}>
        <a className="active" href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
      </div>
    </div>
  );
};

export default Header;