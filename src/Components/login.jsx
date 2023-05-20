// components/Login.js
import { useContext, useState } from 'react';
import { TokenContext } from './Contex/Authcontext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { token, storeToken } = useContext(TokenContext);
    
  console.log(token);

  const handleLogin = async () => {
    const response = await fetch('https://puce-lazy-kingfisher.cyclic.app/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:username, password:password }),
    });
    if (response.ok) {
      const data = await response.json();
      storeToken(data.token)
      navigate("/list")
      
    } else {
      // Handle login error
    }
  };

  return (
    <div>
        <label htmlFor="">Username : </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> <br />
      <label htmlFor="">Password : </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
