import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Projects from "../Pages/projects";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Face3Icon from "@mui/icons-material/Face3";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";

const Header = ({ page }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ top: 0, transition: { duration: 1 } });
  }, [controls]);

  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <div>
      <motion.div className="nav" animate={controls}>
        <div className="navbar">
          <div className="navbar-left">
            <a href="/">
              <img className="logo" src="../saraLogo.png" alt="sara-logo" />
            </a>
          </div>
          <div className="navbar-right ">
            <a className={page === "home" ? "active" : ""} href="/">
              Home
            </a>
            <a className={page === "about" ? "active" : ""} href="/about">
              About Me
            </a>
            <a className={page === "projects" ? "active" : ""} href="/projects">
              Projects
            </a>
          </div>
          <div className="menu-icon">
            <MenuIcon onClick={toggleNavLinks}></MenuIcon>
          </div>

          <div className="nav-links">
            <motion.a
              href="/"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="/"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="/"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
            >
              <LinkedInIcon />
            </motion.a>
          </div>
        </div>
        <div
          className={`navbar-right-dropdown ${showNavLinks ? "visible" : ""}`}
        >
          <div>
            <a className="active" href="/">
              Home
            </a>
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
