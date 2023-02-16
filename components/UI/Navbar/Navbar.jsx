import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import MyButton_h from "../button/MyBotton_header";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton  onClick={logout}>
                Logout
            </MyButton>
            <div className="navbar__links">
                    <Link to="/about"><MyButton>About the site</MyButton></Link>
                    <Link to="/posts"><MyButton_h>Posts</MyButton_h></Link>

            </div>
        </div>
    );
};

export default Navbar;