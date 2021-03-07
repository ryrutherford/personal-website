import React from "react";
import svgs from "../images/sprite.svg"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-flex">
                <a href="https://www.github.com/ryrutherford" className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon">
                        <use xlinkHref={`${svgs}#icon-github`}/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/ry_rutherford/" className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon">
                        <use xlinkHref={`${svgs}#icon-instagram`}/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/adryan-rutherford-670ba114b/" className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon">
                        <use xlinkHref={`${svgs}#icon-linkedin`}/>
                    </svg>
                </a>
                <a href="mailto:ry.rutherford99@gmail.com" className="link">
                    <svg className="footer-icon">
                        <use xlinkHref={`${svgs}#icon-mail`}/>
                    </svg>
                </a>
            </div>
            <div className="footer-copy">
                Ry Rutherford &copy; {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;