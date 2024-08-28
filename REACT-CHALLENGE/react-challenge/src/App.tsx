import "./App.css";
import BioContainer from "./components/BioContainer/BioContainer";
import NavBar from "./components/NavBar/NavBar";
import SimpleContainer from "./components/SimpleContainer/SimpleContainer";
import aboutMeImage from './assets/about-me.jpg';
import projectsImage from './assets/projects.jpg';
import Links from "./components/LinksComponent/LinksComponent";
import blogImage from './assets/blog-image.jpg';
import Footer from "./components/Footer/FooterComponent";
import ServicesComponent from "./components/ServicesComponent/ServicesComponent";
import SocialContainer from "./components/SocialComponent/SocialComponent";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <div className="row1">
          <div className="row1col1"> 
          <BioContainer
            bioJob="Web Designer"
            bioName="Sofia Oliveira."
            bioDescription="Escrever aqui bio bonitinha"
          />
          </div>
          <div className="col2">
          <Links />
          <div className="sub-row1">
          <div className="row1col2"> 
          <SimpleContainer 
          img={aboutMeImage}
          subtitle="More about me" 
          title="Credentials" />
        <div className="row1col3"> 
          <SimpleContainer 
          img={projectsImage}
          subtitle="Showcase" 
          title="Projects" />
          </div>
          </div>
        </div>
        </div>
        </div>
      <div className="row2">
        <div className="row2col1">
        <SimpleContainer 
          img={blogImage}
          subtitle="Blog" 
          title="Design" />
        </div>
        <div className="row2col2">
          <ServicesComponent 
          subtitle="Specialization"
          title="Services"/>
        </div>
        <div className="row2col3">
          <SocialContainer 
          subtitle="Stay with me"
          title="Profiles"/>
        </div>
      
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
