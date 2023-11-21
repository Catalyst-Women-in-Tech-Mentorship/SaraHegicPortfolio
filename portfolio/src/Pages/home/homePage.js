
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import ProjectsGrid from "../../components/Projects/projectsGrid";
import ContactSection from "../../components/Contact/contactSection";
import "./home.css"
const Home = () => {

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div>
      <Header page={"home"}></Header>
      
      <div className="background-container" id="top">
        <motion.div className="text-overlay"
        animate={controls}>
          <h1>SARA HEGIĆ</h1>
          <p>SOFTWARE ENGINEER, FRONT & BACK END DEVELOPER.</p>
        </motion.div>
      </div>
      <Footer></Footer>
      <ProjectsGrid></ProjectsGrid>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
