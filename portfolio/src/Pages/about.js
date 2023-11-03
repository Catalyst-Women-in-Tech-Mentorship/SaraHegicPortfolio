import Header from "../components/header";
import * as React from "react";
import TableSkils from "../components/tableSkils";

const About = () => {
  return (
    <div>
      <Header page={"about"}></Header>
      <div className="content">
        <div className="content-left">
          <h1 className="about-header">About</h1>

          <h3 className="about-h3">
            I'm Sara. A full-stack developer, software ENGINEER and problem
            solver.
          </h3>

          <p className="about-p">
            A passionate Full Stack Developer on a journey to create elegant and
            efficient digital solutions. With a love for coding and a strong
            desire to turn complex problems into simple, beautiful, and
            intuitive applications, I'm dedicated to crafting exceptional web
            experiences.{" "}
          </p>
        </div>
        <div className="content-right">
          <div>
            <img className="img1" src="../sara1.jpg" alt="sara1"></img>
          </div>
        </div>

        <TableSkils></TableSkils>

        
<div>
          <div className="random">
            <div className="random-text">
              <div className="r-i">
              <img  src="../logo192.png" alt="" /> </div>
              <div className="r-t">
                <h2>My Mission</h2>
                <p>
                  My mission is to design and develop software solutions that
                  not only meet functional requirements but also exceed
                  expectations in terms of performance and user experience. I'm
                  committed to producing high-quality code that makes a
                  meaningful impact.
                </p>
              </div>
            </div>
          </div>

          <div className="random">
            <div className="random-text">
              <div className="r-t">
              <h2>Let's Work Together:</h2>
              <p>
                If you're seeking a Software Engineer who can create optimal,
                innovative, and efficient software solutions, I'm here to
                collaborate with you. Whether you have a complex coding
                challenge, a software project, or a concept that needs to come
                to life, I'm prepared to help turn your vision into reality.
                Feel free to get in touch, and let's explore how we can work
                together to achieve your software development goals. Thank you
                for visiting my portfolio, and I look forward to the opportunity
                of working with you.
              </p>
              <button type="submit">Contact Me !</button>
            </div >

            
            <div className="r-i">
              <img  src="../logo192.png" alt="" /> </div>              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
