import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Hero from './Hero'
import Home from './Home'
import About from './About'
import Otros from './Otros'
import View from '../layout/View'

const Pages = () => {
  return (
    <View>
      <Switch> 
        <Route path="/hero">
          <Hero />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/otros">
          <Otros /> 
        </Route>
      </Switch>
    </View>
  )
}

export default Pages
