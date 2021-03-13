import React from "react";
import {ResumeItem} from "../constants/constants";
//import Zoom from "react-reveal";
import {Zoom} from "react-awesome-reveal";

interface ResumeValueProps {
    resumeItem: ResumeItem,
    gridClass?: string
}

const ResumeValue = ({resumeItem, gridClass}: ResumeValueProps) => {
    const {experience, language} = resumeItem;
    return(
        <>
            {experience && 
                <>
                    <Zoom triggerOnce={true} className={`${gridClass !== undefined ? gridClass : ""}`}>
                        <div className={`resume-item-box ${gridClass !== undefined ? gridClass : ""}`}>                            
                            <div className="resume-item-box-side bgcolor-tertiary resume-item-box-side--front">
                                <span className="resume-item-main">{experience.role}</span>
                                <span className="resume-item-sub">{experience.company}</span>
                                <span className="resume-item-date">{experience.date}</span>
                            </div>
                            <div className="resume-item-box-side bgimage-color-tertiary-gradient resume-item-box-side--back">
                                <ul className="resume-item-list">
                                    {experience.description && experience.description.map((item, index) => {
                                        return(
                                            <li className="resume-item-list-item" key={index}>
                                                <span>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <img src={experience.logo} alt={experience.company} className="resume-item-image"/>
                            </div>
                        </div>
                    </Zoom>
                </>
            }
            {language && 
                <Zoom className={`${gridClass !== undefined ? gridClass : ""}`}>
                    <div className={`resume-item-box bgcolor-primary ${gridClass !== undefined ? gridClass : ""}`}>
                        <span className="resume-item-main color-white">{language.name}</span>
                        <span className="resume-item-sub color-white">{language.proficiency}</span>
                    </div>
                </Zoom>
            }
        </>
    );
}

export default ResumeValue;