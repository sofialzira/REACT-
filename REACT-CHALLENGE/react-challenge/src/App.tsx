import "./App.css";
import BioContainer from "./components/BioContainer/BioContainer";
import NavBar from "./components/NavBar/NavBar";
import SimpleContainer from "./components/SimpleContainer/SimpleContainer";
import aboutMeImage from './assets/about-me.jpg'

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
          <div className="row1col2"> 
          <SimpleContainer 
          img={aboutMeImage}
          subtitle="More about me" 
          title="Credentials" />
        </div>
        <div className="row1col3"> 
          <SimpleContainer 
          img={aboutMeImage}
          subtitle="Showcase" 
          title="Projects" />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
