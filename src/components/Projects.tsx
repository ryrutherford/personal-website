import React, { useRef, useEffect, MutableRefObject } from "react";
import { Zoom } from "react-awesome-reveal";
import { projectCardInfo } from "../constants/constants";
import ProjectCard from "./ProjectCard";
import SVGBox from "./SVGBox";

const Projects = () => {
    const projectsRef = useRef() as MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        setTimeout(() => {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 1250);

    }, []);
    return(<>
        <SVGBox steps={["Projects", 1500]} svgStyle="lines-in-motion" bgColorClass="bgcolor-primary" colorClass="color-white"/>
        <div ref={projectsRef} className="projects">
            {projectCardInfo.map((project, index) => <Zoom triggerOnce={true}><ProjectCard details={project} key={index}/></Zoom>)}
        </div>
    </>);
}

export default Projects;