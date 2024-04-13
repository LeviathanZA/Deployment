import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/authActions'; // Import loginUser action

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const registeredUser = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Dispatching loginUser action with username:', username, 'and password:', password); // Log the dispatched action

    if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
      dispatch(loginUser({ username, password }));
      setUsername('');
      setPassword('');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;