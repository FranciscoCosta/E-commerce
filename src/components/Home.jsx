import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Swipper from './Swipper'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className='hero-container'>
          <Swipper/>
          < div className="line"></div>
        </section>
        <Footer />
      </div>
    )
  }
}
