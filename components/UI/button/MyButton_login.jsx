import React from "react";
import classes from "./MyButton.module.css";

const MyButton_login = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn__login}>
            {children}
        </button>
    );
};
export default MyButton_login;