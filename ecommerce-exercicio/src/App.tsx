import './App.css'
//import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import SectionTitle from './components/SectionTitle/SectionTitle'

function App() {

  return (
    <>
      <NavBar />
      <MainSlider />
      {/* <Section>
        <CategoriesGrid />
      </Section> */}
      <Section>
        {/* Aqui vao os childrens */}
        <SectionTitle
          title="BESTSELLER PRODUCTS"
          subtitle="Problems trying to resolve the conflict between"
          tagline="Featured Products"
        />
      </Section>
      <Section fullwidth={true}>
        {/* Aqui vao os childrens */}
        <SectionTitle
          title="Featured Posts"
          subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
          tagline="Practice Advice"
        />
      </Section>
    </>
  )
}

export default App