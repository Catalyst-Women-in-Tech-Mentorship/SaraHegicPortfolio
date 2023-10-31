import Grid from "@mui/material/Grid";

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      <div className="header_projects">
        <div className="line"></div>
        <h3>SOME OF MY LATEST WORK</h3>
      </div>

      <div className="footer_projects">
        <p>
          Want to see more ? Go to <a href="/"> Projects page </a>
        </p>
      </div>
      <Grid container justifyContent="center" spacing={12}>
        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 1" />
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Triba Game</p>
              </div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 2" />
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Quizz App</p>
              </div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 3" />
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <p>Brick Breaker</p>
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsGrid;
