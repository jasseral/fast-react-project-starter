import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Layout from '../components/layouts'
import Home from '../containers/Home'


const NotFound = () => (
    <div>Not found</div>
)

const App = () => (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={ NotFound }/>
        </Switch>
      </Layout>
  </BrowserRouter>
)

export default App