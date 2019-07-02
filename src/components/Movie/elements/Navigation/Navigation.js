import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => (
    <div className="mg-navigation">
        <div className="mg-navigation-content">
            <Link to="/">
                <p className={"mg-navigation__back"}><FaArrowLeft/> Home</p>
            </Link>
        </div>
    </div>
);

export default Navigation;