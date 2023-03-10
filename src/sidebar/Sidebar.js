import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar__wrapper">
            <div className="sidebar">
                <div className="home">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </div>
                <ul>
                    <Link to="/sorting">
                        <li><i className="fa fa-signal"></i></li>
                    </Link>

                    <Link to="/path-finder">
                        <li className="sidebar__link-active">
                            <i className="fa fa-search-location"></i>
                        </li>
                    </Link>
                    <Link to="/algorithm-art">

                        <i className="fa fa-rocket"></i>
                    </Link>

                </ul>
                <div className="sidebar__social">
                    <a href="https://github.com/Akshay200228/algo-visualizer" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;