import './About.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import BioImage from "../../components/BioImage/BioImage";


function About() {
    
    return(
        <>
        <NavBar />
        <div>
        <div className="row1about">
            <div className="row1col1about"> 
            <BioImage />
            </div>
            <div className="col2">
            
            <div className="sub-row1">
            <div className="row1col2"> 
           
            </div>
            </div>
            </div>
        </div>
        </div>


        <Footer />
        </>
    )
}

export default About