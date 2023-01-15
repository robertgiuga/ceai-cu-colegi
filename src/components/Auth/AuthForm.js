
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./auth-context";
import classes from "./AuthForm.module.css";
import axios from "axios";
import { TextField } from "@mui/material";
import { HOST, PORT } from "../../prodURL.js";

const AuthForm = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUn] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [func, setFunc] = useState("");
    const [isPassDif, setIsPassDif] = useState(false);

    const checkPass = (cnfpass) => {
        if (pass !== cnfpass)
            setIsPassDif(true);
        else
            setIsPassDif(false);
    }

    const clearFields = () => {
        setEmail("");
        setPass("");
        setUn("");
        setLname("");
        setFname("");
        setCpass("");
        setFunc("");
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (isLogin) {
            const url = `http://${HOST}:${PORT}/login`;
            var form_data = new FormData();
            form_data.append("email", email);
            form_data.append("password", pass);
            axios
                .post(url, form_data)
                .then((resp) => {
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
        } else {
            const url = `http://${HOST}:${PORT}/register`;
            const data = {
                username: username,
                password: pass,
                email: email,
                firstName: fname,
                lastName: lname,
                function: func
            }
            axios
                .post(url, data)
                .then((resp) => {
                    setIsLoading(false);
                    clearFields();
                    setIsLogin(true);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.error(err);
                });
        }
    };

    return (
        <div className={classes.authPage}>
            <section className={isLogin ? classes.auth2 : classes.auth}>
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                <form onSubmit={submitHandler}>
                    {!isLogin &&
                        <div>
                            <TextField
                                className={classes.control}
                                label="Your FirstName"
                                variant="standard"
                                required
                                value={fname}
                                onChange={(e) => {
                                    setFname(e.target.value);
                                }}
                            ></TextField>
                            <TextField
                                className={classes.control}
                                label="Your LastName"
                                variant="standard"
                                required
                                value={lname}
                                onChange={(e) => {
                                    setLname(e.target.value);
                                }}
                            ></TextField>
                            <TextField
                                className={classes.control}
                                label="Your username"
                                variant="standard"
                                value={username}
                                onChange={(e) => {
                                    setUn(e.target.value);
                                }}
                            ></TextField>
                            <TextField
                                className={classes.control}
                                label="Your Position"
                                variant="standard"
                                required
                                value={func}
                                onChange={(e) => {
                                    setFunc(e.target.value);
                                }}
                            ></TextField>
                        </div>
                    }
                    <TextField
                        className={classes.control}
                        label="Your Email"
                        variant="standard"
                        required
                        value={email}
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
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    ></TextField>
                    {!isLogin &&
                        <TextField
                            type="password"
                            className={classes.control}
                            error={isPassDif}
                            label="Confirm Password"
                            variant="standard"
                            required
                            value={cpass}
                            onChange={(e) => {
                                setCpass(e.target.value);
                                checkPass(e.target.value);
                            }}
                        ></TextField>
                    }
                    <div className={classes.actions}>
                        {!isLoading && (
                            <button type="submit" disabled={isPassDif}>
                                {isLogin ? "Login" : "Create Account"}
                            </button>
                        )}
                    </div>
                </form>
                {isLogin &&
                    <a onClick={() => {
                        clearFields();
                        setIsLogin(false)
                    }}>Register</a>
                }
                {!isLogin &&
                    <a onClick={() => {
                        clearFields();
                        setIsLogin(true)
                    }}>LogIn</a>
                }
            </section>
        </div>
    );
};
export default AuthForm;
