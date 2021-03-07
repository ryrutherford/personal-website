import React from "react";
import Typical from "react-typical";
import RyImage from "../images/RY.jpg";

const Home = () => {
    return(
        <section className="home">
            <div className="home-box">
                <div className="home-intro">
                    <img className="home-img" src={RyImage} alt="Ry Rutherford"/>
                    <p className="home-type"><Typical loop={Infinity} wrapper="b" steps={
                        ["developer", 1000, "student", 1000, "music producer", 1000, "motorcyclist", 1000, "powerlifter", 1000]}/></p>
                </div>
            </div>
        </section>
    );
}

export default Home;