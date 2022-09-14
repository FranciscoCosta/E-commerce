import React, { Component } from 'react';
import './Item.css';
import './Categories.css';
import { FaDog, FaGamepad, FaCar } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { GiDrinkMe } from 'react-icons/gi';
import { GiArchiveResearch } from 'react-icons/gi';
import { RiComputerFill } from 'react-icons/ri';
import { getProductsFromCategoryAndQuery } from '../service/api';

import Item from './Item';

export default class Categories extends Component {
  state = {
    list: [],
    search: false,
  };
  handleOver = (event) => {
    if (event.type === 'mouseover') {
      event.target.style.color = '#00f600';
    }
    if (event.type === 'mouseout') {
      event.target.style.color = '#2fc18c';
    }
  };
  handleApi = async (value) => {
    const results = await getProductsFromCategoryAndQuery(value);
    const items = results.results.map((item) => (
      <div className='Card-item' key={item.id}>
        <Item
          key={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          id={item.id}
          quantidade={1}
          shipping={item.shipping}
          available_quantity={item.available_quantity}
          handleAddCart={this.handleAddCart}
        />
      </div>
    ));
    this.setState({ list: items, search: true });
  };

  render() {
    const { list, search } = this.state;
    return (
      <div className='categories-container'>
        <h1 className='categories-title'>Categorias</h1>
        <div className='categories-container-icons'>
          <div className='categories-icon-wrapper' name='animais'>
            <FaDog
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Animais')}
            />
            <h4 onClick={() => this.handleApi('Animais')}>Animais</h4>
          </div>
          <div className='categories-icon-wrapper'>
            <BsFillHouseDoorFill
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Casa')}
            />
            <h4 onClick={() => this.handleApi('Casa')}>Casa</h4>
          </div>
          <div className='categories-icon-wrapper'>
            <FaGamepad
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Jogos')}
            />
            <h4 onClick={() => this.handleApi('Jogos')}>Jogos</h4>
          </div>
          <div className='categories-icon-wrapper'>
            <GiDrinkMe
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Drink')}
            />
            <h4 onClick={() => this.handleApi('Bebidas')}>Bebidas</h4>
          </div>
          <div className='categories-icon-wrapper'>
            <FaCar
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Carros')}
            />
            <h4 onClick={() => this.handleApi('Carros')}>Carros</h4>
          </div>
          <div className='categories-icon-wrapper'>
            <RiComputerFill
              size={100}
              color='#2fc18c'
              className='categories-icon'
              onMouseOver={this.handleOver}
              onMouseOut={this.handleOver}
              onClick={() => this.handleApi('Computadores')}
            />
            <h4 onClick={() => this.handleApi('Computadores')} >Computadores</h4>
          </div>
        </div>
        <div>
          {list.length === 0 && (
            <div className='info-product'>
              <GiArchiveResearch size={100} className="info-product-icon"/>
              <p  color='#d5dce7'>
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          )}
          {search && list.length === 0 ? (
            <p className='info-product-fail'>Nenhum produto foi encontrado</p>
          ) : (
            <div className='Wrapper-itens'>{list}</div>
          )}
        </div>
      </div>
    );
  }
}
