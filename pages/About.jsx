import React from 'react';
import MyButton_about from "../components/UI/button/MyButton_about";



const About = () => {
    return (
        <div>
            <h1>
                This application create misha
            </h1>
            <MyButton_about>Contact</MyButton_about>
            <MyButton_about>Adress</MyButton_about>
            <MyButton_about>Policy</MyButton_about>
            <MyButton_about>Support</MyButton_about>
        </div>
    );
};

export default About;