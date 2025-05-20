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

      <section id="about" className="scroll-mt-28 py-12 md:py-16">
        <About />
      </section>

      <section id="skills" className="py-12 md:py-16">
        <SkillPage />
      </section>

      <section id="projects" className="py-12 md:py-16">
        <ProjectPage />
      </section>

      <section id="blog" className="py-12 md:py-16">
        <BlogList />
      </section>

      <Footer />
    </main>
  );
};

export default MainPage;
