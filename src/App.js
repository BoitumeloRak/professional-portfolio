import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <div className='App'>
        < Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>  
    </Router>
  );
}

export default App;