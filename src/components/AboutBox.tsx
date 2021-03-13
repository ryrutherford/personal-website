import {Slide} from "react-awesome-reveal";
import svgs from "../images/sprite.svg"

interface AboutBoxProps {
    triggerOnce: boolean,
    gridClass?: string,
    titleText: string,
    svgId: string,
    side: string,
    bgImageClass: string,
    fontClass?: string,
    mwClass?: string
}

const AboutBox = ({triggerOnce, gridClass, titleText, svgId, side, bgImageClass, fontClass, mwClass}: AboutBoxProps) => {
    return(
        <Slide triggerOnce={triggerOnce} className={gridClass ? gridClass : ""}>
            <div className={side === "left" ? `about-box ${bgImageClass}` : `about-box ${bgImageClass} about-box-right`}>
                <div className={side === "left" ? `about-text ml-2 ${mwClass ? mwClass : ""}` : `about-text mr-2 ${mwClass ? mwClass : ""}`}>
                    <Slide triggerOnce={triggerOnce}>
                        <span className={`about-title color-white ${fontClass ? fontClass : ""}`}>{titleText}</span>
                        <svg className="about-icon">
                            <use xlinkHref={`${svgs}#${svgId}`}/>
                        </svg>
                    </Slide>
                </div>
            </div>
        </Slide>
    );
}

export default AboutBox;