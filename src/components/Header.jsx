import React, { Component } from 'react';
import logo from "../images/logo.png";
import { BsSearch } from 'react-icons/bs';
import { FaCartArrowDown  } from 'react-icons/fa';



export default class Header extends Component {

  state = {
    inputValue: '',
  };
  
  
  handleChange = ({ target }) => this.setState({ inputValue: target.value });


  render() {
    const { inputValue } = this.state;
    const { handleApi} = this.props;
    return (
      <header className='header-container'>
        <div className='header-logo'>
            <img src={logo} alt='Trybe Store logo'></img>
        </div>
        <div className='header-mid'>
        <BsSearch size={30} color="#2fc18c" className='header-btn-small'/>
        <input
            type="text"
            className="header-input"
            value={ inputValue }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            className="header-btn"
            onClick={ handleApi }
            value={ inputValue } 
          >
            Buscar
          </button >
        </div>
        
        <FaCartArrowDown size={30} color="#2fc18c" className='header-cart'/>
      </header>
    )
  }
}
