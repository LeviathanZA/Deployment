// Cart/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShippingMethod } from '../../actions/cartActions'; // Import action to select shipping method
import ShippingOptions from '../../ShippingOptions'; // Import ShippingOptions component

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const shippingMethod = useSelector(state => state.cart.shippingMethod);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Function to handle selection of shipping method
  const handleSelectShippingMethod = (method) => {
    dispatch(selectShippingMethod(method));
  };

  return (
    <div className="shopping-cart">
      <h3>Selected Items</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      {/* Display ShippingOptions component */}
      <ShippingOptions onSelectShippingMethod={handleSelectShippingMethod} />
      <div>
  <h3>Shipping Method</h3>
  {shippingMethod ? (
    <p>{shippingMethod.name} - ${shippingMethod.cost}</p>
  ) : (
    <p>Please select a shipping method</p>
  )}
</div>
    </div>
  );
};

export default ShoppingCart;
