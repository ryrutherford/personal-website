import React from "react";
import {ResumeItem} from "../constants/constants";

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
                    <div className={`resume-item-box bgcolor-tertiary ${gridClass !== undefined ? gridClass : ""}`}>
                        <span className="resume-item-main">{experience.role}</span>
                        <span className="resume-item-sub">{experience.company}</span>
                        <span className="resume-item-date">{experience.date}</span>
                        {/*<img src={experience.logo} alt={experience.company} className="resume-item-image"/>*/}
                    </div>
                    {/*
                    <div className="resume-item-left">
                        <span className="resume-item-main">{experience.role}</span>
                        <span className="resume-item-sub">{experience.company}</span>
                        <span className="resume-item-date">{experience.date}</span>
                    </div>
                    <div className="resume-item-right">
                        <img src={experience.logo} alt={experience.company} className="resume-item-image"/>
                    </div>
                    <ul className="resume-item-list">
                        {experience.description && experience.description.map((item, index) => {
                            return(
                                <li className="resume-item-list-item" key={index}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>*/}
                </>
            }
            {language && 
                <div className={`resume-item-box bgcolor-grey-light-1 ${gridClass !== undefined ? gridClass : ""}`}>
                    <span className="resume-item-main">{language.name}</span>
                    <span className="resume-item-sub">{language.proficiency}</span>
                </div>
            }
        </>
    );
}

export default ResumeValue;