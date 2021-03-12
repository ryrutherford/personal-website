import React from "react";
import Typical from "react-typical";

interface SVGProps {
    steps: any[],
    svgStyle: string,
    bgColorClass: string,
    colorClass?: string,
}

const SVGBox = ({steps, svgStyle, bgColorClass, colorClass}: SVGProps) => {
    return (
        <div className={`svg-box ${bgColorClass} ${svgStyle}`}>
            <p className={`title ${colorClass ? colorClass: ""}`}><Typical loop={Infinity} wrapper="b" steps={steps}/></p>
        </div>
    );
}

export default SVGBox;