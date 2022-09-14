import React, { Component } from 'react'
import { ImHome  } from 'react-icons/im';
import { BiCategory  } from 'react-icons/bi';
import { FaCartArrowDown  } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-mobile'>
        <ImHome size={30} color="#2fc18c"/>
        <BiCategory size={30} color="#2fc18c"/>
        <FaCartArrowDown size={30} color="#2fc18c"/>
      </div>
    )
  }
}
