import './App.css'
import BioContainer from './components/BioContainer/BioContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
     <NavBar />
     <div>
      <BioContainer 
        bioJob="Web Designer"
        bioName="Sofia Oliveira."
        bioDescription="Escrever aqui bio bonitinha"
      />
     </div>

     </>
  )
  
  }

export default App