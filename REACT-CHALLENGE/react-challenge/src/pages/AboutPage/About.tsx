import './About.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import BioImage from "../../components/BioImage/BioImage";
import BioTitle from '../../components/BioTitle/BioTitleComponent';
import BioDescription from '../../components/BioDescription/BioDescriptionComponent';
import Credentials from '../../components/Credentials/CredentialsComponent';
import SocialComponent from '../../components/SocialComponent/SocialComponent';
import ContactComponent from '../../components/Contact/ContactComponent';
import SimpleContainer from '../../components/SimpleContainer/SimpleContainer';
import aboutMeImage from '../../assets/about-me.jpg';



function About() {
    let educationItems = [
        {"year":"2011 - 2014",
            "job":"Degree in Design Multimedia",
            "place":"Universidade da Beira Interior",
        },
        {"year":"2014 - 2016",
            "job":"Master Degree in Communication Strategy and Publicity",
            "place":"Universidade da Beira Interior",
        },
        {"year":"2021 - 2022",
            "job":"UX/UI Design",
            "place":"FLAG, Porto"
        }
    ]

    let experienceItems = [
        {"year":"2022 - 2013",
            "job":"Graphic Designer Junior",
            "place":"Wace Studio",
        },
        {"year":"2018 - 2020",
            "job":"Photographer & Videographer",
            "place":"Freelancer",
        },
        {"year":"2017 - 2019",
            "job":"Photography Assistant",
            "place":"Pedro Castro Fotografo"
        }
    ]
    return(
        <>
        <NavBar />
        <div>
        <div className="row1about">
            <div className="row1col1about"> 
            <BioImage />
            </div>
            <div className="col2about">
            <BioTitle
            titleText="SELF-SUMMARY" />
            <div className="sub-row1about">
            <BioDescription />
            </div>
            </div>
            </div>
        <div className='row2about'>
            <div className='row2col1about'>
            <Credentials
            title="EDUCATION"
            items={educationItems}
            />        
            </div>
            <div className='row2col2about'>
            <Credentials 
            title="EXPERIENCE"
            items={experienceItems}/>
            </div>
        
        </div>
        <div className='row3about'>
        <div className="row3col1about">
            <SocialComponent />
          </div>
          <div className="row3col2about">
            <ContactComponent />
          </div>
          <div className='row3col3about'>
          <SimpleContainer 
            img={aboutMeImage}
            subtitle="More about me" 
            title="Credentials" />
          </div>

        </div>
        </div>
        


        <Footer />
        </>
    )
}

export default About