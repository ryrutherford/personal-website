import React from "react";
import { ProjectCardInfo } from "../constants/constants";
import svgs from "../images/sprite.svg"

interface ProjectCardProps {
    details: ProjectCardInfo
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ProjectCard = ({details}: ProjectCardProps) => {
    return(
        <div className="project-card">
            <img src={details.titleImg} alt={details.title} className="project-card-img"/>
            <span className="project-card-title">{details.title}</span>
            <div className="project-card-links">
                {details.link && <a href={details.link} className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="project-card-link-icon">
                        <use xlinkHref={`${svgs}#icon-new-tab`}/>
                    </svg>
                </a>}
                {details.github && 
                    <a href={details.github} className="link" target="_blank" rel="noopener noreferrer">
                        <svg className="project-card-link-icon">
                            <use xlinkHref={`${svgs}#icon-github`}/>
                        </svg>
                    </a>}
                {details.video && 
                    <a href={details.video} className="link" target="_blank" rel="noopener noreferrer">
                        <svg className="project-card-link-icon">
                            <use xlinkHref={`${svgs}#icon-video`}/>
                        </svg>
                    </a>}
            </div>
            <div className="project-card-languages">
                {details.languages.map((language, index) => <div key={index} className="project-card-lang"><img className="project-card-lang-img" src={language.img} alt={language.data}/><span>{language.data}</span></div>)}
            </div>
        </div>
    );
}

export default ProjectCard;