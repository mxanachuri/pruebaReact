import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import Postulation from './components/Postulation';
import Applicants from './components/Applicants';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Professions from './components/Professions';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
			 <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/postulateAqui" element={<Postulation />} />
        <Route path="/aplicantes" element={<Applicants />} />
        <Route path="/profesiones" element={<Professions />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
