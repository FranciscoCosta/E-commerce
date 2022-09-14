import React, { Component } from 'react';
import './Item.css';
import './Categories.css';
import { FaDog, FaGamepad, FaCar } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { GiDrinkMe } from 'react-icons/gi';
import { RiComputerFill } from 'react-icons/ri';
import { getProductsFromCategoryAndQuery } from '../service/api';
import Item from './Item';

export default class Categories extends Component {
  state = {
    list: [],
    search: false,
  };
  handleOver = (event) => {
    if(event.type==="mouseover"){
      event.target.style.color = '#00f600';
    }if(event.type==="mouseout"){
      event.target.style.color = '#2fc18c';
  };
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
            <h4>Animais</h4>
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
            <h4>Casa</h4>
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
            <h4>Jogos</h4>
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
            <h4>Bebidas</h4>
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
            <h4>Carros</h4>
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
            <h4>Computadores</h4>
          </div>
        </div>
        <div>
          {list.length === 0 && (
            <p className='info-hero-main'>
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          {search && list.length === 0 ? (
            <p className='info-hero-main'>Nenhum produto foi encontrado</p>
          ) : (
            <div className='Wrapper-itens'>{list}</div>
          )}
        </div>
      </div>
    );
  }
}
