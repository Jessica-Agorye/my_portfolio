import Header from "./Header";
import About from "./About";
import ProjectPage from "./ProjectPage";
import BlogList from "./BlogList";
import Footer from "./Footer";
import SkillPage from "./SkillPage";

const MainPage = () => {
  return (
    <main>
      <Header />
      <div id="about">
        <About />
      </div>
      <SkillPage />
      <div id="projects">
        <ProjectPage />
      </div>
      <div id="blog">
        <BlogList />
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
