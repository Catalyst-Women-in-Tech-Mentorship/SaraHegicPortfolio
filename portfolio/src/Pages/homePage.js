import Footer from "../components/footer";
import Header from "../components/header";
import ProjectsGrid from "../components/projectsGrid";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <a name="top"></a>
      <div className="background-container">
        <div className="text-overlay">
          <h1>SARA HEGIĆ</h1>
          <p>SOFTWARE ENGINEER, FRONT & BACK END DEVELOPER.</p>
        </div>
      </div>
      <Footer></Footer>
      <ProjectsGrid></ProjectsGrid>
    </div>
  );
};

export default Home;
