const initialState = {
  products: [
    { id: 1, name: 'Banana', image: 'banana.jpeg', price: 1.99 },
    { id: 2, name: 'Apple', image: 'apple.jpeg', price: 2.49 },
    { id: 3, name: 'Orange', image: 'orange.jpeg', price: 1.79 }
  ]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Ohter actions here as needed
    default:
      return state;
  }
};

export default productReducer;