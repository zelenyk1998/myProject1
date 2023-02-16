import React from 'react';
import classes from './MyModal.module.css';
const MyModal = ({children, visible, setVisible}) => {

    const rootClacces = [classes.myModal]

    if (visible) {
        rootClacces.push(classes.acive);
    }
    return (
        <div className={rootClacces.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;