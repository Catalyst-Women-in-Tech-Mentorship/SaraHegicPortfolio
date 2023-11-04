import Grid from "@mui/material/Grid";

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      <div className="header_projects">
        <div className="line"></div>
        <h3>SOME OF MY LATEST WORK</h3>
        <div className="line"></div>
      </div>

      <Grid container justifyContent="center" spacing={12}>
        <Grid item>
          <div className="box">
            <div className="image-container">
              <img src="../triba.png" alt="Slika 2" />
            </div>{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Triba Game</p>
              </div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <div className="image-container">
              <img src="../quiz.png" alt="Slika 2" />
            </div>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Quizz App</p>
              </div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <div className="image-container">
              <img src="../bb.png" alt="Slika 2" />
            </div>{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Brick Breaker</p>
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
      <div className="footer_projects">
        <p>
          Want to see more ? Go to{" "}
          <a href="/" target="_self">
            {" "}
            Projects page{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectsGrid;
