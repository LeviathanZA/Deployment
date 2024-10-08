// src/reducers/cartReducer.js
const initialState = {
  items: [],
  shippingMethod: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'SELECT_SHIPPING_METHOD':
      return {
        ...state,
        shippingMethod: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
