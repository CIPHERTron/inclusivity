import React from "react";
import "./Login.css";

export default function Login(props) {
    const {
      email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError,
      name,
      setName
  } = props;

  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  return (
    <section id="main-section">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1486546910464-ec8e45c4a137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1902&q=80"
              alt=""
            />
          </div>
          <div className="formBx">
            <form action="">
              <h2>Sign In</h2>
              <input type="text" required value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" name="" value="Login" onClick={handleLogin} />
              <p className="signup">
                Don't have an account ?
                <p style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer', fontWeight: '800'}} onClick={toggleForm}>
                  Sign Up.
                </p>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="">
            <h2>Welcome to Inclusivity</h2>
              <input type="text" name="" placeholder="Name" />
              {/* <label>Pronoun: </label>
              <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select> */}
              <input type="email" required value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" name="" value="Sign Up" onClick={handleSignup} />
              <p className="signup">
                Already have an account ?
                <p style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer', fontWeight: '800'}} onClick={toggleForm}>
                  Sign in.
                </p>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1567935850829-e52d7bfe37ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}