import React from "react";
import {ResumeBoxInfo} from "../constants/constants";
import ResumeValue from "./ResumeValue";


const ResumeBox = ({title, values}: ResumeBoxInfo) => {
    const valuesLength = values.length;
    return(
        <>
            <span className="resume-item-title">{title}</span>
            <span className="resume-item-separator"/>
            {values[0].tool ? 
                <div className="grid-full resume-item-flex">
                    {values.map((value, index) => {
                        return <ResumeValue resumeItem={value} key={index}/>;
                    })}
                </div> 
            :
            values.map((value, index) => {
                if(index === valuesLength - 1 && index % 2 === 0){
                    return (
                        <ResumeValue resumeItem={value} gridClass="grid-full" key={index}/>
                    );
                }
                else{
                    return (<ResumeValue resumeItem={value} key={index}/>);
                }
            })}
        </>
    );
}

export default ResumeBox;