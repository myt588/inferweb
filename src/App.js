import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Header, Footer } from './components/'
import Home from './pages/Home/'
import Products from './pages/Products/'
import Cases from './pages/Cases/'
import Media from './pages/Media/'
import About from './pages/About/'
import Request from './pages/Request/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App () {
  return (
    <Router>
      <ScrollToTopp>
        <Routess />
      </ScrollToTopp>
    </Router>
  )
}

class ScrollToTop extends React.Component {  
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

const ScrollToTopp = withRouter(ScrollToTop)

class Routes extends React.Component {
  render () {
    const style = this.props.location.pathname === '/about' ? {} : { backgroundColor: 'black' }
    return (
      <div style={style}>
        <Helmet>
          <title>Infervision</title>
        </Helmet>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/cases' component={Cases} />
        <Route path='/media' component={Media} />
        <Route path='/about' component={About} />
        <Route path='/request' component={Request} />
        <Footer />
      </div>
    )
  }
}

const Routess = withRouter(Routes)

export default App
