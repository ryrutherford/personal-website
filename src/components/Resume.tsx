import React from "react";
import SVGBox from "./SVGBox";
import ResumeBox from "./ResumeBox";
import {resumeDetails} from "../constants/constants";

const Resume = () => {
    return(
        <section>
            <SVGBox steps={["Resume", 1500]} svgStyle="endless-clouds" bgColorClass="bgcolor-secondary-dark"/>
            <div className="resume">
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