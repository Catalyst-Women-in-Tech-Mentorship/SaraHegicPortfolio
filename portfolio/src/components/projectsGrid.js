import Grid from "@mui/material/Grid";

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      <Grid container justifyContent="center" spacing={12}>
        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 1" />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text">Tekst 1</div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 2" />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text">Tekst 2</div>
            </a>
          </div>
        </Grid>

        <Grid item>
          <div className="box">
            <img src="../download.png" alt="Slika 3" />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text">Tekst 3</div>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsGrid;
