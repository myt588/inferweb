import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Footer } from './components/'
import Home from './pages/Home/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/cases' component={Cases} />
        <Route path='/media' component={Media} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

function Products () {
  return (
    <div>
      <h2>Products</h2>
    </div>
  )
}

function Cases () {
  return (
    <div>
      <h2>Cases</h2>
    </div>
  )
}

function Media () {
  return (
    <div>
      <h2>Media</h2>
    </div>
  )
}

function About () {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default App
