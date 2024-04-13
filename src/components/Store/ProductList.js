// Store/ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <img src={require(`../../assets/${product.image}`).default} alt={product.name} />
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
