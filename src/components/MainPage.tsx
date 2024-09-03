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
      <About />
      <SkillPage />
      <ProjectPage />

      <BlogList />
      <Footer />
    </main>
  );
};

export default MainPage;
