import React, { useEffect, useRef } from "react";
import SVGBox from "./SVGBox";
import ResumeBox from "./ResumeBox";
import {resumeDetails} from "../constants/constants";
import { MutableRefObject } from "react";

const Resume = () => {
    
    const resumeRef = useRef() as MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        setTimeout(() => {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 1250);
    }, []);
    
    return(
        <section>
            <SVGBox steps={["Resume", 1500]} svgStyle="endless-clouds" bgColorClass="bgimage-color-tertiary-gradient"/>
            <div ref={resumeRef} className="resume">
                {resumeDetails.map((resumeDetail, index) => {
                    return (
                        <ResumeBox title={resumeDetail.title} values={resumeDetail.values} key={index}/>
                    );
                })}
            </div>
        </section>
    );
}

export default Resume;