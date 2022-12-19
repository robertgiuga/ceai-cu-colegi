import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import { Button, FormControl, TextField } from '@mui/material';
// import { useHistory } from 'react-router-dom';
import { HOST, PORT } from "../../prodURL.js";
import AuthContext from "./auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  // const history = useHistory();
  const history = "";
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // timp expirare token
        // modificare dupa structura response expiresIn.idToken
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const doLogin = () => {
    console.log({ pass, email });
    const LOGIN_URL = `http://${HOST}:${PORT}/login`;
    var form_data = new FormData();
    form_data.append("email",email)
    form_data.append("password",pass)
    axios.post(LOGIN_URL, form_data).then((resp) => {
      localStorage.setItem("token",resp.data.access_token)
      navigate("/events");
    })
    .catch((err) => console.error(err));;
  };

  return (
    <section className={classes.auth}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button onClick={doLogin}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
