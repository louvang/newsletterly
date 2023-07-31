import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validEmailMsg, setValidEmailMsg] = useState('Invalid email.');
  const [validPassword, setValidPassword] = useState(true);
  const [pwConfirmed, setPwConfirmed] = useState(true);

  const validateRegistration = () => {
    let isValid = true;

    if (password !== confirmPw) {
      setPwConfirmed(false);
      isValid = false;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setValidEmail(false);
      isValid = false;
    } else {
      setValidEmail(true);
    }

    // 8-32 characters && 1 or more numbers &&
    // 1 or more uppercase && 1 or more lowercase
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()_\-+={}[\]|\\;:'"<>,./?]{8,32}$/;
    if (!pwRegex.test(password)) {
      setValidPassword(false);
      isValid = false;
    } else {
      setValidPassword(true);
    }

    return isValid;
  };

  const submitRegistration = (e) => {
    const isValid = validateRegistration();

    if (!isValid) {
      e.preventDefault();
    } else {
      const data = { name, email, password };

      axios
        .post('/api/register', data)
        .then((res) => {
          console.log(res.data);

          if (!res.data.userCreated) {
            setValidEmail(false);
            setValidEmailMsg("There's already a user with that email already.");
          } else {
            window.location = '/login';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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

        {validEmail ? '' : <span>ERROR: {validEmailMsg}</span>}
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
        {validPassword ? (
          ''
        ) : (
          <span>
            ERROR: Password must be 8-32 characters, has 1 or more numbers + 1
            or more uppercase + 1 or more lowercase.
          </span>
        )}
      </div>

      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
        />

        {pwConfirmed ? '' : <span>ERROR: Passwords do not match.</span>}
      </div>

      <div>
        <button onClick={submitRegistration}>Submit</button>
      </div>
    </div>
  );
}

export default Register;
