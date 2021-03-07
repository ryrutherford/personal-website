import React, {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [selected, setSelected] = useState(-1);

    return(
        <header>
            <nav className="nav">
                <Link to="/" className="nav-logo link" onClick={() => setSelected(-1)}>[ Ry Rutherford ]</Link>
                <div className="nav-list">
                    <Link to="/" className={selected === 0 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(0)}>About</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/" className={selected === 1 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(1)}>Projects</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/resume" className={selected === 2 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(2)}>Resume</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/" className={selected === 3 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(3)}>Miscellaneous</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;