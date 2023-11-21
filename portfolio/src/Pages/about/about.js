import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Header from "../../components/Header/header";
import * as React from "react";
import TableSkils from "../../components/Skills/tableSkils";
import Footer from "../../components/Footer/footer";
import "./about.css"
import { Link } from "react-router-dom";
const About = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView) {
      controls1.start({ x: 0 });
    }
  }, [controls1, inView]);

  useEffect(() => {
    if (inView1) {
      controls2.start({ x: 0 });
    }
  }, [controls2, inView1]);

  return (
    <div>
      <Header page={"about"}></Header>
      <div className="content">
        <div
          style={{ background: "linear-gradient(to bottom, #150050, #3F0071)" , margin:"0", padding:"0"}}
        >
          <div className="content-left">
            <motion.h1
              className="about-header"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              About
            </motion.h1>

            <motion.h3
              className="about-h3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              I'm Sara.
            </motion.h3>
            <div className="about-p">
              <p>
                A passionate Full Stack Developer on a journey to create elegant
                and efficient digital solutions. With a love for coding and a
                strong desire to turn complex problems into simple, beautiful,
                and intuitive applications, I'm dedicated to crafting
                exceptional web experiences.{" "}
              </p>
              <p>
                Currently, I am studying computer science to enhance my skills
                and knowledge. Additionally, I strive to stay up to date with
                the latest technologies and trends in the software development
                world. My goals are ambitious, and enthusiasm and persistence
                are my greatest strengths.
              </p>
              <p>
                Aside from coding, I enjoy exploration and learning. I have an
                open mind and a love for challenges. Moreover, I enjoy sharing
                my knowledge with others and learning from the community around
                me.
              </p>
              <p>
                Thank you for visiting my website. If you'd like to learn more
                about me or collaborate on projects, please feel free to contact
                me. I look forward to future challenges and opportunities for
                growth and success.
              </p>
            </div>
          </div>
          <div className="content-right">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <img className="img1" src="../sara1.jpg" alt="sara1" />
              
            </motion.div>
            <button className="btn-cv">
                <a href="/CV"> See my CV </a>
              </button>
          </div>
          <div className="next">
            <p> Learn about me more in the next section</p>
            <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
          </div>
        </div>

        <TableSkils></TableSkils>

        <div style={{margin:"0", padding: "0"}}>
          <div
            style={{
              background: "linear-gradient(to bottom, #150050, #3F0071 5%)",
              margin: "0",
              padding: "0"
            }}
          >
            <div className="random">
              <div className="random-text">
                <motion.div
                  className="r-i"
                  ref={ref}
                  initial={{ x: -100 }}
                  animate={controls1}
                >
                  <img src="../mission.jpg" alt="" />
                </motion.div>
                <div className="r-t">
                  <h2>My Mission</h2>
                  <p>
                    My mission is to design and develop software solutions that
                    not only meet functional requirements but also exceed
                    expectations in terms of performance and user experience.
                    I'm committed to producing high-quality code that makes a
                    meaningful impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #3F0071,  #150050 5%)",
            }}
          >
            <div className="random">
              <div className="random-text">
                <div className="r-t">
                  <h2>Let's Work Together:</h2>
                  <p>
                    If you're seeking a Software Engineer who can create
                    optimal, innovative, and efficient software solutions, I'm
                    here to collaborate with you. Whether you have a complex
                    coding challenge, a software project, or a concept that
                    needs to come to life, I'm prepared to help turn your vision
                    into reality. Feel free to get in touch, and let's explore
                    how we can work together to achieve your software
                    development goals. Thank you for visiting my portfolio, and
                    I look forward to the opportunity of working with you.
                  </p>
                  <Link to="/#contact">
                  <button type="submit">Contact Me !</button>
                  </Link>
                </div>
                <motion.div
                  className="r-i"
                  ref={ref1}
                  initial={{ x: 100 }}
                  animate={controls2}
                >
                  <img src="../together.jpg" alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
