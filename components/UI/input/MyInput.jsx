import React from 'react';
import classes from "./MyInput.module.css";
const MyInput = React.forwardRef((props, ref ) => {
    return (
        <input placeholder="Search" ref={ref} className={classes.myInput} {...props}/>

    );
});

export default MyInput;