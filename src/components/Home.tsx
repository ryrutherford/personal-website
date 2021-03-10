import React from "react";
import SVGBox from "./SVGBox";

const Home = () => {
    return(
        <section>
            <SVGBox svgStyle="topo" bgColorClass="bgcolor-primary" colorClass="color-white"
                steps={["Developer", 1500, "Student", 1500, "Music Producer", 1500, "Motorcyclist", 1500, "Powerlifter", 1500]}/>
        </section>
    );
}

export default Home;