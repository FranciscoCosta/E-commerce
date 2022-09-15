import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Swipper from './Swipper';
import Item from './Item';

import './Item.css';
import './Categories.css';
import {
  FaDog,
  FaGamepad,
  FaCar,
  FaCookieBite,
  FaCamera,
  FaPhone,
} from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import {
  GiDrinkMe,
  GiCorn,
  GiArchiveResearch,
  GiRunningShoe,
} from 'react-icons/gi';
import { SiFramer } from 'react-icons/si';
import { RiComputerFill } from 'react-icons/ri';
import { getProductsFromCategoryAndQuery } from '../service/api';

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

  handleAddCart = ({ target }) => {
    const { list } = this.state;

    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];

    const item = list.find((elemento) => elemento.key === target.value);
    const {
      props: {
        children: { props },
      },
    } = item;

    const local = [...items, props];
    localStorage.setItem('cartList', JSON.stringify(local));
    this.cartQuantidade();
  };
  cartQuantidade = () => {
    const items = JSON.parse(localStorage.getItem('cartList')) || [];
    if (items.length > 0) {
      const final = items.map((elemento) => elemento.quantidade);
      const sum = final.reduce((accumulator, curr) => accumulator + curr);
      this.setState({ sum });
    }
  };

  handleApi = async (value) => {
    if (typeof value === 'string') {
      const results = await getProductsFromCategoryAndQuery(value);
      this.getData(results);
    } else {
      console.log(value.target.value)
      const results = await getProductsFromCategoryAndQuery(value.target.value);
      this.getData(results);
    }
  };

  getData = (results) => {
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
      <div>
        <Header handleApi={this.handleApi} />
        <section className='hero-container'>
          <Swipper className='swipper-full' />
        </section>
        <section>
          <div className='categories-container'>
            <h1 className='categories-title'>Categorias</h1>
            <div className='categories-container-icons'>
              <div className='categories-icon-wrapper'>
                <GiCorn
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Agro')}
                />
                <h4 onClick={() => this.handleApi('Agro')}>Agro</h4>
              </div>
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
              <div className='categories-icon-wrapper' name='animais'>
                <FaCookieBite
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Alimentos')}
                />
                <h4 onClick={() => this.handleApi('Alimentos')}>Alimentos</h4>
              </div>
              <div className='categories-icon-wrapper'>
                <SiFramer
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Arte')}
                />
                <h4 onClick={() => this.handleApi('Arte')}>Arte</h4>
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
                <GiRunningShoe
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Calçado')}
                />
                <h4 onClick={() => this.handleApi('Calçado')}>Calçado</h4>
              </div>
              <div className='categories-icon-wrapper'>
                <FaCamera
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Cameras')}
                />
                <h4 onClick={() => this.handleApi('Cameras')}>Cameras</h4>
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
                <FaPhone
                  size={100}
                  color='#2fc18c'
                  className='categories-icon'
                  onMouseOver={this.handleOver}
                  onMouseOut={this.handleOver}
                  onClick={() => this.handleApi('Celular')}
                />
                <h4 onClick={() => this.handleApi('Celular')}>Celular</h4>
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
                <h4 onClick={() => this.handleApi('Computadores')}>
                  Computadores
                </h4>
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
            </div>
            <div>
              {list.length === 0 && (
                <div className='info-product'>
                  <GiArchiveResearch size={100} className='info-product-icon' />
                  <p color='#d5dce7'>
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                </div>
              )}
              {search && list.length === 0 ? (
                <p className='info-product-fail'>
                  Nenhum produto foi encontrado
                </p>
              ) : (
                <div>
                  <div className='Wrapper-itens'>{list}</div>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
