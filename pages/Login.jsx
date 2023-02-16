import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import MyButton_login from "../components/UI/button/MyButton_login";
import classes from "../../src/styles/App.css";

const Login = () => {
    const {isAuth, setIsAuth}  = useContext(AuthContext)
    const login = event  => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1 className={classes.h1_about}>Page for Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Type login"/>
                <MyInput type="password" placeholder="Type password"/>
                <MyButton_login>Login</MyButton_login>
            </form>
        </div>
    );
};

export default Login;