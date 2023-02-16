import React from 'react';
import classes from "./MyButton.module.css";
const MyButton_create = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn__createP}>
            {children}
        </button>
    );
};

export default MyButton_create;