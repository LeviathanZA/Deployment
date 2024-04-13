// src/reducers/userReducer.js

const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      // Assuming the payload contains the registered user data
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
