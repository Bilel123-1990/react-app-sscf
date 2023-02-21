import './App.css'
import React from 'react'
import Header from './components/heading/Header'
import {  BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/about/About';
import CourHome from './components/les cours/CourHome';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Pricing from './components/pricing/Pricing';
import Inscri from './components/inscris/Inscri';


const App = () => {
  return (
    <div>
 
     <Router>
     <Header/>
     <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/course" element={<CourHome/>} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/price" element={<Pricing/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/contact" element={<Contact/>} />         
          <Route exact path="/inscri" element={<Inscri/>} />         
              
      </Routes>
      <Footer/>
     </Router>

    </div>
  )
}

export default App