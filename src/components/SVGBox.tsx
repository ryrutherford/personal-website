import React from "react";
import Typical from "react-typical";

interface svgProps {
    steps: any[],
    svgStyle: string
}

const SVGBox = ({steps, svgStyle}: svgProps) => {
    return (
        <div className={`svg-box bgcolor-primary ${svgStyle}`}>
            <p className="title color-white"><Typical loop={Infinity} wrapper="b" steps={steps}/></p>
        </div>
    );
}

export default SVGBox;