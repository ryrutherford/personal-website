import React, {useState} from "react";
import {Link} from "react-router-dom";

const getSelectedPath = (pathname: string) => {
    if(pathname === "/about"){
        return 0;
    }
    else if(pathname === "/projects"){
        return 1;
    }
    else if(window.location.pathname === "/resume"){
        return 2;
    }
    else if(window.location.pathname === "/misc"){
        return 3;
    }
    else{
        return -1;
    }
}

const Header = () => {
    const [selected, setSelected] = useState(getSelectedPath(window.location.pathname));

    return(
        <header>
            <nav className="nav">
                <Link to="/" className="nav-logo link" onClick={() => setSelected(-1)}>[ Ry Rutherford ]</Link>
                <div className="nav-list">
                    <Link to="/about" className={selected === 0 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(0)}>About</Link>
                    <p className="nav-separator">/</p>
                    <Link to="/projects" className={selected === 1 ? "nav-link nav-link-selected link" : "nav-link link"} onClick={() => setSelected(1)}>Projects</Link>
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