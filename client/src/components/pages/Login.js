import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);

  const login = () => {
    console.log('click');

    const data = { email, password };

    axios
      .post('/api/login', data)
      .then((res) => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(data);

        setLoginFail(true);
      });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      {loginFail ? <div>ERROR: Login failed.</div> : ''}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Your email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
