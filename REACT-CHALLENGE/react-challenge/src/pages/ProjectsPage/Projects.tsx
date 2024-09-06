import './Projects.css'
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer";
import BioTitle from "../../components/BioTitle/BioTitleComponent";



function Projects() {
    
    return(
        <>
        <NavBar />
        <div className="row1projects">
        <div className="row1col1projects"> 
            <SimpleContainer />
        </div>
        <div className="row1col2projects">
            <BioTitle 
            titleText="ALL PROJECTS"/>
        </div>
        </div>
        <div className='row2projects'>
        <SimpleContainer />
        <SimpleContainer />
        <SimpleContainer />
        </div>
        <div className='row3projects'>
        <SimpleContainer />
        <SimpleContainer />
        <SimpleContainer />
        </div>

        <Footer />
        </>
    )
}

export default Projects


