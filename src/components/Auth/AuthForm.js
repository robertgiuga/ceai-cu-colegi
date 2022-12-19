import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./auth-context";
import classes from "./AuthForm.module.css";
import axios from "axios";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url = "http://localhost:8080/login";
    var form_data = new FormData();
    form_data.append("email",enteredEmail)
    form_data.append("password",enteredPassword)
    axios.post(url, form_data).then((resp) => {
      console.log(resp.data);
      setIsLoading(false);
      const expirationTime = new Date(
          new Date().getTime() + 600000,
      );
      authCtx.login(resp.data.access_token, expirationTime.toISOString());
      navigate("/events");
    })
        .catch((err) =>{
          setIsLoading(false);
          setIsError(true);
          console.error(err)
        })
  };

  return (
    <section className={classes.auth}>
      <h2>{"Login"}</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type={"submit"}>
              {"Login"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
