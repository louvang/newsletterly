function Login() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Login</label>
        <input type="text" placeholder="Your email" id="login" name="login" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Login;
