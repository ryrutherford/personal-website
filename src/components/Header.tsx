import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav className="nav">
                <Link to="/" className="nav-logo link">[ Ry Rutherford ]</Link>
                <div className="nav-list">
                    <Link to="/" className="nav-link link">About</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/" className="nav-link link">Projects</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/" className="nav-link link">Resume</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/" className="nav-link link">Miscellaneous</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;