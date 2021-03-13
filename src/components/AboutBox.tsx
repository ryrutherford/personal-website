import {Slide} from "react-awesome-reveal";
import svgs from "../images/sprite.svg"
import {AboutBoxInfo} from "../constants/constants";

interface AboutBoxProps {
    details: AboutBoxInfo
}

const AboutBox = ({details}: AboutBoxProps) => {

    return(
        <Slide triggerOnce={details.triggerOnce} className={details.gridClass ? details.gridClass : ""}>
            <div className={`about-box ${details.gridClass ? details.gridClass : ""}`}>
                <div className={`about-box-side about-box-side--front ${details.bgImageClass} ${details.side === "left" ? "" : "about-box-right"}`}>
                    <div className={`text-align-center ${details.mwClass ? details.mwClass : ""} ${details.side === "left" ? "ml-2" : "mr-2"}`}>
                        <Slide triggerOnce={details.triggerOnce}>
                            <span className={`about-title color-white ${details.fontClass ? details.fontClass : ""}`}>{details.titleText}</span>
                            <svg className="about-icon">
                                <use xlinkHref={`${svgs}#${details.svgId}`}/>
                            </svg>
                        </Slide>
                    </div>
                </div>
                <div className={`about-box-side about-box-side--back bgcolor-primary`}>
                    <div className="about-info">
                        <div className="about-info-text mw-50 text-align-center">
                            <span className="color-white">{details.info}</span>
                        </div>
                        <svg className="about-icon">
                            <use xlinkHref={`${svgs}#${details.svgId}`}/>
                        </svg>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default AboutBox;