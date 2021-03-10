import React from "react";
import {ResumeItem} from "../constants/constants";
import Zoom from "react-reveal";

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
                    <Zoom>
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
                                                {item}
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
                <Zoom>
                    <div className={`resume-item-box bgcolor-grey-light-1 ${gridClass !== undefined ? gridClass : ""}`}>
                        <span className="resume-item-main">{language.name}</span>
                        <span className="resume-item-sub">{language.proficiency}</span>
                    </div>
                </Zoom>
            }
        </>
    );
}

export default ResumeValue;