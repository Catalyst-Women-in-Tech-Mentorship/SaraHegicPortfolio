import Header from "../components/header";
import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const About = () => {
  const data = [
    { value: 10, label: "html" },
    { value: 10, label: "CSS" },
    { value: 15, label: "JS" },
    { value: 20, label: "React" },
  ];

  const size = {
    width: 800,
    height: 600,
  };

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

        <div className="skils">

            <h1>MY HARD SKILS</h1>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data,
                cx: 400,
                cy: 200,
                innerRadius: 100,
                outerRadius: 200,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 360,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
            {...size}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>

        <div className="bottom">
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
