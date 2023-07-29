function Register() {
  return (
    <div className="Register">
      <h1>Register</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Your email" id="email" name="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
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

export default Register;
