import './App.css';
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Welcome />
        <Experience />
        <Projects />
        <Skills/>
        <Contact />
      </div>
    </div>  
    )
}

export default App;