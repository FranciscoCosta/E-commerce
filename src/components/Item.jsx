import React from 'react';
import { string, number, func } from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

export default class Item extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      handleAddCart,
      id,
      shipping,
    } = this.props;

    return (
      <div className='card-item-container'>
        <Link to={ `/ProductDetails/${id}` }>
          <div className="card-item-product">
            <div className="card-item-top">
              <img src={ thumbnail } alt={ title } />
              {shipping.free_shipping && <p>Frete Gratis</p>}
            </div>
            <div className="card-item-bottom">
              <h6>{title}</h6>
              <p>{`R$ ${price}`}</p>
            </div>
          </div>
        </Link>

        <button
          className="add-cart"
          type="button"
          onClick={ handleAddCart }
          value={ id }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  handleAddCart: func,
}.isRequired;