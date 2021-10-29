import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './style.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const View = ({ children }) => {
  return (
    <Router>
      <div className="l_view__wrapper">
        <Header />
        <div className="l_view__container">
          {children}
        </div>
        <Footer />
      </div>
    </Router>

  )
}

export default View
