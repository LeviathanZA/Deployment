const initialState = {
    isAuthenticated: false,
    user: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        const { username, password } = action.payload;
        console.log('Received username:', username);
        console.log('Received password:', password);
        
        // Retrieve registered user data from the state
        const registeredUser = state.user;
        console.log('Registered user:', registeredUser);
  
        // Check if the provided username and password match the registered user
        const isAuthenticated = registeredUser &&
          registeredUser.username === username &&
          registeredUser.password === password;
  
        // Return updated state based on the authentication result
        return {
          ...state,
          isAuthenticated: isAuthenticated,
          user: isAuthenticated ? registeredUser : null
        };
  
      case 'LOGOUT_USER':
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  