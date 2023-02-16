import React from "react";
import classes from "./MyButton.module.css";

const MyButton_about = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn__about}>
            {children}
        </button>
    );
};
export default MyButton_about;