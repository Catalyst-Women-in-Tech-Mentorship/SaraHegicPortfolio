import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const TableSkils = () => {
  const data = [
    { value: 10, label: "html" },
    { value: 10, label: "CSS" },
    { value: 15, label: "JS" },
    { value: 20, label: "React" },
  ];

  const datasofta = [
    { value: 10, label: "html" },
    { value: 10, label: "CSS" },
    { value: 15, label: "JS" },
    { value: 20, label: "React" },
  ];

  const size = {
    width: 200,
    height: 200,
  };

  return (
    <div  className="div1" >
      <div className="table-skills">
        <div className="development">
          <img className="logo2" src="../si.png" alt="logo"></img>
          <h3>SOFTWARE ENGINEERING</h3>
          <div className="dev-p">
            {" "}
            <p>
              {" "}
              Strong foundation in data structures, algorithms, and code
              optimization. My skills include writing clean, efficient code,
              tackling complex problems, and working on full-stack development
              projects. I'm committed to staying up-to-date with industry trends
              and delivering high-quality software solutions that exceed
              performance expectations
            </p>
          </div>
          <h4 style={{ color: "#d8bfff"}}>Skills I manage to advance: </h4>
        <p>Testing and debugging, Algorithm Skills, Agile Methods, Software Development </p>

        <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data: data,
                cx: 100,
                cy: 95,
                innerRadius: 40,
                outerRadius: 90,
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

        <div className="development">
          <img className="logo2" src="../backend.png" alt="logo"></img>
          <h3>BACKEND</h3>
          <div className="dev-p">
            <p>
              I have a deep understanding of server-side programming and
              databases. I enjoy working with technologies like Node.js, Python,
              and databases like MongoDB and SQL.
            </p>
          </div>
          <h4 style={{ color: "#d8bfff"}}>Languages I speak: </h4>
        <p>Node.js, Python, Java, SQL, C++ </p>
        <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data: datasofta,
                cx: 100,
                cy: 95,
                innerRadius: 40,
                outerRadius: 90,
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

        <div className="development">
          <img className="logo2" src="../frontend.png" alt="logo"></img>
          <h3>FRONTEND</h3>
          <div className="dev-p">
            {" "}
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. I specialize in creating engaging user
              interfaces using modern web technologies like HTML, CSS, and
              JavaScript. I'm adept at crafting responsive, user-friendly
              designs.
            </p>
          </div>
          <h4 style={{ color: "#d8bfff"}}>Languages I speak:</h4>
        <p>HTML, CSS, JavaScript, React.js </p>
        <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data: datasofta,
                cx: 100,
                cy: 95,
                innerRadius: 40,
                outerRadius: 90,
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
      </div>

   
      
      
      <div className="tools">
        <h3>Dev tools I have experience in usage : </h3>
        <p>Bootstrap, MUI Material, Terminal, GIT, GitHub, JetBrains Developer Tools, Express.js, Django, VisualStudio Code, npm and Yarn</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default TableSkils;
