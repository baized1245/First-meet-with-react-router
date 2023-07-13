import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Active from '../ActiveLink/Active';

const Header = () => {
    return (
        <nav>
            <Active to="/">Home</Active>
            <Active to="/about">about</Active>
            <Active to="/contact">Contact</Active>
            <Active to='/posts'>Posts</Active>
            <Active to='/friends'>Friends</Active>
        </nav>
    );
};

export default Header;