import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./auth-context";
import classes from "./AuthForm.module.css";
import axios from "axios";
import { TextField } from "@mui/material";
import { HOST, PORT } from "../../prodURL.js";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url = "http://localhost:8080/login";
    var form_data = new FormData();
    form_data.append("email", enteredEmail);
    form_data.append("password", enteredPassword);
    axios
      .post(url, form_data)
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
        const expirationTime = new Date(new Date().getTime() + 600000);
        authCtx.login(resp.data.access_token, expirationTime.toISOString());
        navigate("/events");
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.error(err);
      });
  };

  const doLogin = () => {
    console.log({ pass, email });
    const LOGIN_URL = `http://${HOST}:${PORT}/login`;
    var form_data = new FormData();
    form_data.append("email", email)
    form_data.append("password", pass)
    axios.post(LOGIN_URL, form_data).then((resp) => {
      localStorage.setItem("token", resp.data.access_token)
      navigate("/events");
    })
      .catch((err) => console.error(err));;
  };

  return (
    <div className={classes.authPage}>
      <section className={classes.auth}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={submitHandler}>
          <TextField
            type="email"
            className={classes.control}
            label="Your Email"
            variant="standard"
            required
            ref={emailInputRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <TextField
            type="password"
            className={classes.control}
            label="Your Password"
            variant="standard"
            required
            ref={passwordInputRef}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></TextField>
          <div className={classes.actions}>
            {!isLoading && (
              <button onClick={doLogin}>
                {isLogin ? "Login" : "Create Account"}
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};
export default AuthForm;
