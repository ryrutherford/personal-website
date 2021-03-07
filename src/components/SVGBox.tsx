import React from "react";
import Typical from "react-typical";

interface SVGProps {
    steps: any[],
    svgStyle: string,
    bgColorClass: string,
}

const SVGBox = ({steps, svgStyle, bgColorClass}: SVGProps) => {
    return (
        <div className={`svg-box ${bgColorClass} ${svgStyle}`}>
            <p className="title color-white"><Typical loop={Infinity} wrapper="b" steps={steps}/></p>
        </div>
    );
}

export default SVGBox;