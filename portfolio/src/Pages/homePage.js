import Footer from "../components/footer";
import Header from "../components/header";
import ProjectsGrid from "../components/projectsGrid";
import ContactSection from "../components/contactSection";

const Home = () => {
  return (
    <div>
      <Header page={"home"}></Header>
      <a name="top"></a>
      <div className="background-container">
        <div className="text-overlay">
          <h1>SARA HEGIĆ</h1>
          <p>SOFTWARE ENGINEER, FRONT & BACK END DEVELOPER.</p>
        </div>
      </div>
      <Footer></Footer>
      <ProjectsGrid></ProjectsGrid>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
