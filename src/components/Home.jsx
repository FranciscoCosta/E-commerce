import React, { Component } from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Header from './Header'
import Swipper from './Swipper'

export default class Home extends Component {
  render() {
    return (
      <>
      <div>
        <Header />
        <section className='hero-container'>
          <Swipper className="swipper-full"/>
        </section>
        <section>
          <Categories />
          
        </section>
        
      </div>
      <Footer />
      </>
    )
  }
}
