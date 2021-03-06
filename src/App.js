import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'

import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/' component={Home} exact />
          <Route path='/about-me' component={About} excat />
          <Route path='/projects' component={Projects} exact />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App