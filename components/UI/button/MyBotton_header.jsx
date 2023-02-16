import React from 'react';
import classes from "./MyButton.module.css";
const MyButton_h = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn__header}>
            {children}
        </button>
    );
};

export default MyButton_h;