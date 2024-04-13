// ShippingOptions.js

import React from 'react';

const ShippingOptions = ({ onSelectShippingMethod }) => {
  const shippingMethods = [
    { id: 1, name: 'Standard Shipping', cost: 5.99 },
    { id: 2, name: 'Expedited Shipping', cost: 9.99 },
    { id: 3, name: 'Free Shipping (Orders over $50)', cost: 0 }
  ];

  return (
    <div className="shipping-options">
      <h2>Shipping Options</h2>
      <ul>
        {shippingMethods.map(method => (
          <li key={method.id}>
            <label>
              <input
                type="radio"
                name="shippingMethod"
                value={method.id}
                onChange={() => onSelectShippingMethod(method)}
              />
              {method.name} - ${method.cost}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingOptions;
