import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Recipes from './components/Recipes'
import Contact from './components/Contact'
import './App.css'


function App() {

  return (
    <div className="App">
      <div className="w-100">
        <Router>
            <Routes>
              <Route path='/' Component={Home} />
              <Route exact path='/about' Component={About} />
              <Route exact path='/Recipes' Component={Recipes} />
              <Route exact path='/Contact' Component={Contact} />              
            </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
