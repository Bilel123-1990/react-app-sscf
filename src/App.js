import './App.css'
import React from 'react'
import Header from './components/heading/Header'
import {  BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home'

const App = () => {
  return (
    <div>
 
     <Router>
     <Header/>
     <Home/>
     <Routes>
          <Route  path="/" exact component={Home} />
      </Routes>


     </Router>

    </div>
  )
}

export default App