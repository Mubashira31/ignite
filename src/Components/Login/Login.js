import React, { useContext } from "react";
import signin from "../../assets/signin.png";
import './login.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
// import StudentContext from "../../App";
const Login = () => {
  // const { state, dispatch } = useContext(StudentContext);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("ivalid Credentials");
    } else {
      // dispatch({ type: "USER", payload: true });
      window.alert("login successful");
      navigate("/profile");
    }
  };
  return (
    <>
      <Navbar />
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
          <h2 className="form-title">Please Signin To continue</h2>
            <div className="signin-form">
              <form className="signin-form" id="signin-form" method="POST">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    email="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-key"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="register"
                    id="signin"
                    className="form-submit"
                    value="Sign In"
                    onClick={loginUser}
                  />
                </div>
              </form>
              <div className="signin-image">
                <figure>
                  <img src={signin} alt="signin" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/register">
          <span>create an account</span>
        </NavLink>
      </section>
    </>
  );
};

export default Login;
